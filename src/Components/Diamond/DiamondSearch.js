import React, { useCallback, useEffect, useRef, useState } from 'react';
import roundShape from '../../Assets/Images/diamond-shape/round.svg';
import SVGInject from '@iconfu/svg-inject';
import { Formik } from 'formik';
import _ from 'lodash';
import { Button, Form, Tab, Tabs } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import ResetIcon from '../../Assets/Images/reset.svg';
import Loader from '../Global/Loader';
import { getDiamondDetailList } from '../Redux/reducers/common.slice';
import {
  getSeavedSearchList,
  getTotalSearchDiamond,
  setIsClearSelection,
  setIsFancyColor,
  setIsRemoveFromSearchTemplateList,
  setSearchDiamondSavedData,
} from '../Redux/reducers/dashboard.slice';

export default function DiamondSearch() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitRef = useRef(null);
  const { diamondDetailList, diamondFilterDetail, diamondDetailListLoading } =
    useSelector(({ common }) => common);
  const {
    SeavedSearchList,
    isFilterSaved,
    totalCountSearchDiamond,
    searchDiamondSavedData,
    isModifySearch,
    saveSearchUpdated,
    isFancySearch,
    isColorType,
    isRemoveFromSearchTemplateList,
    isSavedToResult,
    isSavedToSearchDiamond,
    isClearSelection,
    savePartyDemandUpdated,
    savePartyDemandLoading,
    totalSearchDiamondLoading,
    seavedSearchLoading,
  } = useSelector(({ dashboard }) => dashboard);
  const [advanceSearchToggle, setAdvanceSearchToggle] = useState(false);
  const [whiteFancyToggle, setWhiteFancyToggle] = useState(false);
  const [weightToggle, setWeightToggle] = useState(false);
  const [searchId, setSearchId] = useState('');
  const [diamondFilterData, setDiamondFilterData] = useState(null);
  const [selectShapeListId, setSelectShapeListId] = useState([]);
  const [checkboxIdList, setCheckboxIdList] = useState([]);
  const { userData } = useSelector(({ auth }) => auth);
  const initialValues = {
    shape: [],
    sizeFrom: 0,
    sizeTo: 0,
    colorType: isColorType,
    whiteColor: [],
    fancyColor: '',
    fancyIntensity: '',
    fancyOvertone: '',
    clarity: [],
    tinge: [],
    treatment: [],
    growthType: [],
    cut: [],
    polish: [],
    symmetry: [],
    fluorescence: [],
    lab: [],
    hna: '',
    location: '',
    labGrownDiamond: '1',
    StockStatus: '',
    // noBGMOnly: false,
    // showAvailableDiamond: false,
    // showPairDiamond: false,
    // withImageOnly: false,
    // withVideoOnly: false,
    priceFrom: '',
    priceTo: '',
    discountFrom: 0,
    discountTo: 0,
    ratioFrom: '',
    ratioTo: '',
    girdlePerFrom: 0,
    girdlePerTo: 0,
    tableFrom: 0,
    tableTo: 0,
    depthFrom: 0,
    depthTo: 0,
    girdleCondition: [],
    girdleThin: [],
    girdleThick: [],
    culetSize: [],
    culetCondition: [],
    shade: [],
    milky: [],
    eyeClean: [],
    lengthFrom: 0,
    lengthTo: 0,
    widthFrom: 0,
    widthTo: 0,
    crownAngleFrom: 0,
    crownAngleTo: 0,
    crownHeightFrom: 0,
    crownHeightTo: 0,
    pavilionAngleFrom: 0,
    pavilionAngleTo: 0,
    pavilionDepthFrom: 0,
    pavilionDepthTo: 0,
    starLengthFrom: 0,
    starLengthTo: 0,
    lowerHalfFrom: 0,
    lowerHalfTo: 0,
    keytoSymbols: '',
    caratSizeIds: '',
    searchName: '',
    checkboxId: '',
  };
  const [serchDiamondFinalValue, setSerchDiamondFinalValue] =
    useState(initialValues);
  useEffect(() => {
    // if (SeavedSearchList?.length <= 0) {
    dispatch(getSeavedSearchList({ UserID: userData.UserID }));
    // }
    dispatch(
      getTotalSearchDiamond({
        ...searchDiamondSavedData,
        UserID: userData.UserID,
      }),
    );
    return () => {
      // dispatch(setIsFilterSaved(false));
      // dispatch(setIsFancySearch(false));
      // dispatch(setIsSavedToResult(false));
      // dispatch(setIsSavedToSearchDiamond(false));
      // dispatch(setIsRemoveFromSearchTemplateList(false));
      // dispatch(setIsClearSelection(false));
    };
  }, []);
  useEffect(() => {
    if (saveSearchUpdated) {
      dispatch(getSeavedSearchList({ UserID: userData.UserID }));
      dispatch(
        getTotalSearchDiamond({
          ...searchDiamondSavedData,
          UserID: userData.UserID,
        }),
      );
    }
  }, [saveSearchUpdated]);
  useEffect(() => {
    if (isRemoveFromSearchTemplateList) {
      dispatch(getSeavedSearchList({ UserID: userData.UserID }));
      dispatch(setIsRemoveFromSearchTemplateList(false));
    }
  }, [isRemoveFromSearchTemplateList]);
  useEffect(() => {
    if (diamondDetailList.length === 0) {
      dispatch(getDiamondDetailList());
    } else {
      if (isModifySearch) {
        if (searchDiamondSavedData !== '') {
          let dummyShapeArray = [];
          let dummyClarityArray = [];
          let dummyCutArray = [];
          let dummyPolishArray = [];
          let dummyTingeArray = [];
          // let dummyTreatmentArray = [];
          let dummyGrowthTypeArray = [];
          let dummySymmetryArray = [];
          let dummyFluorescenceArray = [];
          let dummyLabArray = [];
          let dummyWhiteColorArray = [];
          let dummyGirdleConditionArray = [];
          let dummyGirdleThinArray = [];
          let dummyGirdleThickArray = [];
          let dummyCuletConditionArray = [];
          let dummyCuletSizeArray = [];
          let dummyShadeArray = [];
          let dummyMilkyArray = [];
          let dummyEyeCleanArray = [];
          let dummyFancyColorArray = [];
          let dummyFancyIntensityArray = [];
          let dummyFancyOvertoneArray = [];
          let dummyhnaArray = [];
          let dummyLocationArray = [];
          let caratSize = searchDiamondSavedData.caratSizeIds?.split('-');

          setDiamondFilterData({
            ...diamondFilterDetail,
            shapeList: diamondFilterDetail?.shapeList.map(item => {
              if (
                searchDiamondSavedData.shape?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyShapeArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            clarityList: diamondFilterDetail?.clarityList.map(item => {
              if (
                searchDiamondSavedData.clarity?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyClarityArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            cutList: diamondFilterDetail?.cutList.map(item => {
              if (
                searchDiamondSavedData.cut?.includes(item.MasterTypeValue_Code)
              ) {
                dummyCutArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            polishList: diamondFilterDetail?.polishList.map(item => {
              if (
                searchDiamondSavedData.polish?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyPolishArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            tingeList: diamondFilterDetail?.tingeList.map(item => {
              if (
                searchDiamondSavedData.tinge?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyTingeArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            // treatmentList: diamondFilterDetail?.treatmentList.map((item) => {
            //   if (
            //     searchDiamondSavedData.treatment?.includes(
            //       item.MasterTypeValue_Code
            //     )
            //   ) {
            //     dummyTreatmentArray.push(item.MasterTypeValue_Code);
            //     return {
            //       ...item,
            //       classToggle: !item.classToggle,
            //     };
            //   }
            //   return item;
            // }),
            growthTypeList: diamondFilterDetail?.growthTypeList.map(item => {
              if (
                searchDiamondSavedData.growthType?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyGrowthTypeArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            symmetryList: diamondFilterDetail?.symmetryList.map(item => {
              if (
                searchDiamondSavedData.symmetry?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummySymmetryArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            fluorescenceList: diamondFilterDetail?.fluorescenceList.map(
              item => {
                if (
                  searchDiamondSavedData.fluorescence?.includes(
                    item.MasterTypeValue_Code,
                  )
                ) {
                  dummyFluorescenceArray.push(item.MasterTypeValue_Code);
                  return {
                    ...item,
                    classToggle: !item.classToggle,
                  };
                }
                return item;
              },
            ),
            labList: diamondFilterDetail?.labList.map(item => {
              if (
                searchDiamondSavedData.lab?.includes(item.MasterTypeValue_Code)
              ) {
                dummyLabArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            colorWhiteList: diamondFilterDetail?.colorWhiteList.map(item => {
              if (
                searchDiamondSavedData.whiteColor?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyWhiteColorArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            gridleConditionList: diamondFilterDetail?.gridleConditionList.map(
              item => {
                if (
                  searchDiamondSavedData.girdleCondition?.includes(
                    item.MasterTypeValue_Code,
                  )
                ) {
                  dummyGirdleConditionArray.push(item.MasterTypeValue_Code);
                  return {
                    ...item,
                    classToggle: !item.classToggle,
                  };
                }
                return item;
              },
            ),
            gridleList: diamondFilterDetail?.gridleList.map(item => {
              if (
                searchDiamondSavedData.girdleThin?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyGirdleThinArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            gridleThickList: diamondFilterDetail?.gridleThickList.map(item => {
              if (
                searchDiamondSavedData.girdleThick?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyGirdleThickArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            culetSizeList: diamondFilterDetail?.culetSizeList.map(item => {
              if (
                searchDiamondSavedData.culetSize?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyCuletSizeArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            culetConditionList: diamondFilterDetail?.culetConditionList?.map(
              item => {
                if (
                  searchDiamondSavedData.culetCondition?.includes(
                    item.MasterTypeValue_Code,
                  )
                ) {
                  dummyCuletConditionArray.push(item.MasterTypeValue_Code);
                  return {
                    ...item,
                    classToggle: !item.classToggle,
                  };
                }
                return item;
              },
            ),
            shadeList: diamondFilterDetail?.shadeList.map(item => {
              if (
                searchDiamondSavedData.shade?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyShadeArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),

            milkyList: diamondFilterDetail?.milkyList.map(item => {
              if (
                searchDiamondSavedData.milky?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyMilkyArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),

            eyecleanList: diamondFilterDetail?.eyecleanList.map(item => {
              if (
                searchDiamondSavedData.eyeClean?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyEyeCleanArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            fancycolorList: diamondFilterDetail?.fancycolorList.map(item => {
              if (searchDiamondSavedData.fancyColor?.includes(item.value)) {
                dummyFancyColorArray.push(item);
                return {
                  item,
                };
              }
              return item;
            }),
            fancyintensityList: diamondFilterDetail?.fancyintensityList.map(
              item => {
                if (
                  searchDiamondSavedData.fancyIntensity?.includes(item.value)
                ) {
                  dummyFancyIntensityArray.push(item);
                  return {
                    item,
                  };
                }
                return item;
              },
            ),
            fancyovertonList: diamondFilterDetail?.fancyovertonList.map(
              item => {
                if (
                  searchDiamondSavedData.fancyOvertone?.includes(item.value)
                ) {
                  dummyFancyOvertoneArray.push(item);
                  return {
                    item,
                  };
                }
                return item;
              },
            ),
            hnaList: diamondFilterDetail?.hnaList.map(item => {
              if (searchDiamondSavedData.hna?.includes(item.value)) {
                dummyhnaArray.push(item);
                return {
                  item,
                };
              }
              return item;
            }),
            locationList: diamondFilterDetail?.locationList.map(item => {
              if (searchDiamondSavedData.location?.includes(item.value)) {
                dummyLocationArray.push(item);
                return {
                  item,
                };
              }
              return item;
            }),
          });

          let finalFancyColor = dummyFancyColorArray.map((item, index) => {
            return item;
          });
          let finalFancyIntensity = dummyFancyIntensityArray.map(
            (item, index) => {
              return item;
            },
          );
          let finalFancyOvertone = dummyFancyOvertoneArray.map(
            (item, index) => {
              return item;
            },
          );
          let finalHna = dummyhnaArray.map((item, index) => {
            return item;
          });
          let finalLocation = dummyLocationArray.map((item, index) => {
            return item;
          });

          setSerchDiamondFinalValue({
            ...serchDiamondFinalValue,
            shape: dummyShapeArray,
            clarity: dummyClarityArray,
            cut: dummyCutArray,
            polish: dummyPolishArray,
            tinge: dummyTingeArray,
            // treatment: dummyTreatmentArray,
            growthType: dummyGrowthTypeArray,
            symmetry: dummySymmetryArray,
            fluorescence: dummyFluorescenceArray,
            lab: dummyLabArray,
            whiteColor: dummyWhiteColorArray,
            girdleCondition: dummyGirdleConditionArray,
            girdleThin: dummyGirdleThinArray,
            girdleThick: dummyGirdleThickArray,
            culetCondition: dummyCuletConditionArray,
            culetSize: dummyCuletSizeArray,
            shade: dummyShadeArray,
            milky: dummyMilkyArray,
            eyeClean: dummyEyeCleanArray,
            sizeFrom: caratSize && caratSize[0] ? caratSize[0] : 0,
            sizeTo: caratSize && caratSize[1] ? caratSize[1] : 0,
            priceFrom: searchDiamondSavedData.priceFrom
              ? searchDiamondSavedData.priceFrom
              : 0,
            priceTo: searchDiamondSavedData.priceTo
              ? searchDiamondSavedData.priceTo
              : 0,
            colorType: searchDiamondSavedData.colorType,
            fancyColor: finalFancyColor,
            fancyIntensity: finalFancyIntensity,
            fancyOvertone: finalFancyOvertone,
            hna: finalHna,
            location: finalLocation,
            discountFrom: searchDiamondSavedData.discountFrom,
            discountTo: searchDiamondSavedData.discountTo,
            ratioFrom: searchDiamondSavedData.ratioFrom,
            ratioTo: searchDiamondSavedData.ratioTo,
            girdlePerFrom: searchDiamondSavedData.girdlePerFrom,
            girdlePerTo: searchDiamondSavedData.girdlePerTo,
            tableFrom: searchDiamondSavedData.tableFrom,
            tableTo: searchDiamondSavedData.tableTo,
            depthFrom: searchDiamondSavedData.depthFrom,
            depthTo: searchDiamondSavedData.depthTo,
            lengthFrom: searchDiamondSavedData.lengthFrom,
            lengthTo: searchDiamondSavedData.lengthTo,
            widthFrom: searchDiamondSavedData.widthFrom,
            widthTo: searchDiamondSavedData.widthTo,
            crownAngleFrom: searchDiamondSavedData.crownAngleFrom,
            crownAngleTo: searchDiamondSavedData.crownAngleTo,
            crownHeightFrom: searchDiamondSavedData.crownHeightFrom,
            crownHeightTo: searchDiamondSavedData.crownHeightTo,
            pavilionAngleFrom: searchDiamondSavedData.pavilionAngleFrom,
            pavilionAngleTo: searchDiamondSavedData.pavilionAngleTo,
            pavilionDepthFrom: searchDiamondSavedData.pavilionDepthFrom,
            pavilionDepthTo: searchDiamondSavedData.pavilionDepthTo,
            starLengthFrom: searchDiamondSavedData.starLengthFrom,
            starLengthTo: searchDiamondSavedData.starLengthTo,
            lowerHalfFrom: searchDiamondSavedData.lowerHalfFrom,
            lowerHalfTo: searchDiamondSavedData.lowerHalfTo,
            isFancyShape: false,
            StockStatus: searchDiamondSavedData.StockStatus,
            checkboxId: searchDiamondSavedData.checkboxId,
          });
        }
      } else if (isFancySearch) {
        setDiamondFilterData({
          ...diamondFilterDetail,
          isFancyShape: false,
          colorType: 2,
        });

        setSerchDiamondFinalValue({
          ...serchDiamondFinalValue,
          colorType: 2,
          isFancyShape: false,
        });
      } else if (isSavedToSearchDiamond) {
        if (searchDiamondSavedData !== '') {
          let dummyShapeArray = [];
          let dummyClarityArray = [];
          let dummyCutArray = [];
          let dummyPolishArray = [];
          let dummyTingeArray = [];
          // let dummyTreatmentArray = [];
          let dummyGrowthTypeArray = [];
          let dummySymmetryArray = [];
          let dummyFluorescenceArray = [];
          let dummyLabArray = [];
          let dummyWhiteColorArray = [];
          let dummyGirdleConditionArray = [];
          let dummyGirdleThinArray = [];
          let dummyGirdleThickArray = [];
          let dummyCuletConditionArray = [];
          let dummyCuletSizeArray = [];
          let dummyShadeArray = [];
          let dummyMilkyArray = [];
          let dummyEyeCleanArray = [];
          let dummyFancyColorArray = [];
          let dummyFancyIntensityArray = [];
          let dummyFancyOvertoneArray = [];
          let dummyhnaArray = [];
          let dummyLocationArray = [];
          let caratSize = searchDiamondSavedData.caratSizeIds?.split('-');

          setDiamondFilterData({
            ...diamondFilterDetail,
            shapeList: diamondFilterDetail?.shapeList.map(item => {
              if (
                searchDiamondSavedData.shape?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyShapeArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            clarityList: diamondFilterDetail?.clarityList.map(item => {
              if (
                searchDiamondSavedData.clarity?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyClarityArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            cutList: diamondFilterDetail?.cutList.map(item => {
              if (
                searchDiamondSavedData.cut?.includes(item.MasterTypeValue_Code)
              ) {
                dummyCutArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            polishList: diamondFilterDetail?.polishList.map(item => {
              if (
                searchDiamondSavedData.polish?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyPolishArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            tingeList: diamondFilterDetail?.tingeList.map(item => {
              if (
                searchDiamondSavedData.tinge?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyTingeArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            // treatmentList: diamondFilterDetail?.treatmentList.map((item) => {
            //   if (
            //     searchDiamondSavedData.treatment?.includes(
            //       item.MasterTypeValue_Code
            //     )
            //   ) {
            //     dummyTreatmentArray.push(item.MasterTypeValue_Code);
            //     return {
            //       ...item,
            //       classToggle: !item.classToggle,
            //     };
            //   }
            //   return item;
            // }),
            growthTypeList: diamondFilterDetail?.growthTypeList.map(item => {
              if (
                searchDiamondSavedData.growthType?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyGrowthTypeArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            symmetryList: diamondFilterDetail?.symmetryList.map(item => {
              if (
                searchDiamondSavedData.symmetry?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummySymmetryArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            fluorescenceList: diamondFilterDetail?.fluorescenceList.map(
              item => {
                if (
                  searchDiamondSavedData.fluorescence?.includes(
                    item.MasterTypeValue_Code,
                  )
                ) {
                  dummyFluorescenceArray.push(item.MasterTypeValue_Code);
                  return {
                    ...item,
                    classToggle: !item.classToggle,
                  };
                }
                return item;
              },
            ),
            labList: diamondFilterDetail?.labList.map(item => {
              if (
                searchDiamondSavedData.lab?.includes(item.MasterTypeValue_Code)
              ) {
                dummyLabArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            colorWhiteList: diamondFilterDetail?.colorWhiteList.map(item => {
              if (
                searchDiamondSavedData.whiteColor?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyWhiteColorArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            gridleConditionList: diamondFilterDetail?.gridleConditionList.map(
              item => {
                if (
                  searchDiamondSavedData.girdleCondition?.includes(
                    item.MasterTypeValue_Code,
                  )
                ) {
                  dummyGirdleConditionArray.push(item.MasterTypeValue_Code);
                  return {
                    ...item,
                    classToggle: !item.classToggle,
                  };
                }
                return item;
              },
            ),
            gridleList: diamondFilterDetail?.gridleList.map(item => {
              if (
                searchDiamondSavedData.girdleThin?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyGirdleThinArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            gridleThickList: diamondFilterDetail?.gridleThickList.map(item => {
              if (
                searchDiamondSavedData.girdleThick?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyGirdleThickArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            culetSizeList: diamondFilterDetail?.culetSizeList.map(item => {
              if (
                searchDiamondSavedData.culetSize?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyCuletSizeArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            culetConditionList: diamondFilterDetail?.culetConditionList?.map(
              item => {
                if (
                  searchDiamondSavedData.culetCondition?.includes(
                    item.MasterTypeValue_Code,
                  )
                ) {
                  dummyCuletConditionArray.push(item.MasterTypeValue_Code);
                  return {
                    ...item,
                    classToggle: !item.classToggle,
                  };
                }
                return item;
              },
            ),
            shadeList: diamondFilterDetail?.shadeList.map(item => {
              if (
                searchDiamondSavedData.shade?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyShadeArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),

            milkyList: diamondFilterDetail?.milkyList.map(item => {
              if (
                searchDiamondSavedData.milky?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyMilkyArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),

            eyecleanList: diamondFilterDetail?.eyecleanList.map(item => {
              if (
                searchDiamondSavedData.eyeClean?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyEyeCleanArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            fancycolorList: diamondFilterDetail?.fancycolorList.map(item => {
              if (searchDiamondSavedData.fancyColor?.includes(item.value)) {
                dummyFancyColorArray.push(item);
                return {
                  item,
                };
              }
              return item;
            }),
            fancyintensityList: diamondFilterDetail?.fancyintensityList.map(
              item => {
                if (
                  searchDiamondSavedData.fancyIntensity?.includes(item.value)
                ) {
                  dummyFancyIntensityArray.push(item);
                  return {
                    item,
                  };
                }
                return item;
              },
            ),
            fancyovertonList: diamondFilterDetail?.fancyovertonList.map(
              item => {
                if (
                  searchDiamondSavedData.fancyOvertone?.includes(item.value)
                ) {
                  dummyFancyOvertoneArray.push(item);
                  return {
                    item,
                  };
                }
                return item;
              },
            ),
            hnaList: diamondFilterDetail?.hnaList.map(item => {
              if (searchDiamondSavedData.hna?.includes(item.value)) {
                dummyhnaArray.push(item);
                return {
                  item,
                };
              }
              return item;
            }),
            locationList: diamondFilterDetail?.locationList.map(item => {
              if (searchDiamondSavedData.location?.includes(item.value)) {
                dummyLocationArray.push(item);
                return {
                  item,
                };
              }
              return item;
            }),
          });

          let finalFancyColor = dummyFancyColorArray.map((item, index) => {
            return item;
          });
          let finalFancyIntensity = dummyFancyIntensityArray.map(
            (item, index) => {
              return item;
            },
          );
          let finalFancyOvertone = dummyFancyOvertoneArray.map(
            (item, index) => {
              return item;
            },
          );
          let finalHna = dummyhnaArray.map((item, index) => {
            return item;
          });
          let finalLocation = dummyLocationArray.map((item, index) => {
            return item;
          });
          setSerchDiamondFinalValue({
            ...serchDiamondFinalValue,
            shape: dummyShapeArray,
            clarity: dummyClarityArray,
            cut: dummyCutArray,
            polish: dummyPolishArray,
            tinge: dummyTingeArray,
            // treatment: dummyTreatmentArray,
            growthType: dummyGrowthTypeArray,
            symmetry: dummySymmetryArray,
            fluorescence: dummyFluorescenceArray,
            lab: dummyLabArray,
            whiteColor: dummyWhiteColorArray,
            girdleCondition: dummyGirdleConditionArray,
            girdleThin: dummyGirdleThinArray,
            girdleThick: dummyGirdleThickArray,
            culetCondition: dummyCuletConditionArray,
            culetSize: dummyCuletSizeArray,
            shade: dummyShadeArray,
            milky: dummyMilkyArray,
            eyeClean: dummyEyeCleanArray,
            sizeFrom: caratSize && caratSize[0] ? caratSize[0] : 0,
            sizeTo: caratSize && caratSize[1] ? caratSize[1] : 0,
            priceFrom: searchDiamondSavedData.priceFrom
              ? searchDiamondSavedData.priceFrom
              : 0,
            priceTo: searchDiamondSavedData.priceTo
              ? searchDiamondSavedData.priceTo
              : 0,
            colorType: searchDiamondSavedData.colorType,
            fancyColor: finalFancyColor,
            fancyIntensity: finalFancyIntensity,
            fancyOvertone: finalFancyOvertone,
            hna: finalHna,
            location: finalLocation,
            discountFrom: searchDiamondSavedData.discountFrom,
            discountTo: searchDiamondSavedData.discountTo,
            ratioFrom: searchDiamondSavedData.ratioFrom,
            ratioTo: searchDiamondSavedData.ratioTo,
            girdlePerFrom: searchDiamondSavedData.girdlePerFrom,
            girdlePerTo: searchDiamondSavedData.girdlePerTo,
            tableFrom: searchDiamondSavedData.tableFrom,
            tableTo: searchDiamondSavedData.tableTo,
            depthFrom: searchDiamondSavedData.depthFrom,
            depthTo: searchDiamondSavedData.depthTo,
            lengthFrom: searchDiamondSavedData.lengthFrom,
            lengthTo: searchDiamondSavedData.lengthTo,
            widthFrom: searchDiamondSavedData.widthFrom,
            widthTo: searchDiamondSavedData.widthTo,
            crownAngleFrom: searchDiamondSavedData.crownAngleFrom,
            crownAngleTo: searchDiamondSavedData.crownAngleTo,
            crownHeightFrom: searchDiamondSavedData.crownHeightFrom,
            crownHeightTo: searchDiamondSavedData.crownHeightTo,
            pavilionAngleFrom: searchDiamondSavedData.pavilionAngleFrom,
            pavilionAngleTo: searchDiamondSavedData.pavilionAngleTo,
            pavilionDepthFrom: searchDiamondSavedData.pavilionDepthFrom,
            pavilionDepthTo: searchDiamondSavedData.pavilionDepthTo,
            starLengthFrom: searchDiamondSavedData.starLengthFrom,
            starLengthTo: searchDiamondSavedData.starLengthTo,
            lowerHalfFrom: searchDiamondSavedData.lowerHalfFrom,
            lowerHalfTo: searchDiamondSavedData.lowerHalfTo,
            isFancyShape: false,
          });
        }
      } else {
        setDiamondFilterData(diamondFilterDetail);
      }
    }
  }, [dispatch, diamondDetailList, isSavedToSearchDiamond]);
  useEffect(() => {
    if (isFilterSaved === true) {
      navigate('/search-result');
    }
  }, [isFilterSaved]);
  useEffect(() => {
    if (isSavedToResult === true) {
      navigate('/search-result');
    }
  }, [isSavedToResult]);
  useEffect(() => {
    if (isClearSelection === true) {
      dispatch(
        getTotalSearchDiamond({
          ...searchDiamondSavedData,
          UserID: userData.UserID,
        }),
      );
    }
    dispatch(setIsClearSelection(false));
  }, [isClearSelection]);
  useEffect(() => {
    if (savePartyDemandUpdated === true) {
      dispatch(
        getTotalSearchDiamond({
          ...searchDiamondSavedData,
          UserID: userData.UserID,
        }),
      );
    }
  }, [savePartyDemandUpdated]);

  useEffect(() => {
    SVGInject(document.querySelectorAll('img.injectable'));
  }, [diamondFilterData?.shapeList]);

  const handleShapeToggle = useCallback(
    id => {
      setDiamondFilterData({
        ...diamondFilterData,
        shapeList: diamondFilterData?.shapeList?.map(item2 => {
          if (item2.MasterTypeValue_Id === id) {
            return {
              ...item2,
              classToggle: !item2.classToggle,
            };
          }
          return item2;
        }),
      });
    },
    [diamondFilterData],
  );
  const handleWeightToggle = index => {
    setDiamondFilterData({
      ...diamondFilterData,
      caratSizeList: diamondFilterData.caratSizeList.map((item, index2) => {
        if (index2 === index) {
          return { ...item, classToggle: !item.classToggle };
        }
        return item;
      }),
    });
  };
  const handleColorWhiteToggle = useCallback(
    id => {
      setDiamondFilterData({
        ...diamondFilterData,
        colorWhiteList: diamondFilterData.colorWhiteList.map(item => {
          if (item.Display_Order === id) {
            return { ...item, classToggle: !item.classToggle };
          }
          return item;
        }),
      });
    },
    [diamondFilterData],
  );

  const handleFluorescenceToggle = id => {
    setDiamondFilterData({
      ...diamondFilterData,
      fluorescenceList: diamondFilterData.fluorescenceList.map(
        (item, index2) => {
          if (item.Display_Order === id) {
            return { ...item, classToggle: !item.classToggle };
          }
          return item;
        },
      ),
    });
  };
  const handleLabToggle = id => {
    setDiamondFilterData({
      ...diamondFilterData,
      labList: diamondFilterData.labList.map((item, index2) => {
        if (item.Display_Order === id) {
          return { ...item, classToggle: !item.classToggle };
        }
        return item;
      }),
    });
  };
  const handleCarityToggle = id => {
    setDiamondFilterData({
      ...diamondFilterData,
      clarityList: diamondFilterData.clarityList.map((item, index2) => {
        if (item.Display_Order === id) {
          return { ...item, classToggle: !item.classToggle };
        }
        return item;
      }),
    });
  };
  const handleTingeToggle = id => {
    setDiamondFilterData({
      ...diamondFilterData,
      tingeList: diamondFilterData.tingeList.map((item, index2) => {
        if (item.Display_Order === id) {
          return { ...item, classToggle: !item.classToggle };
        }
        return item;
      }),
    });
  };
  // const handleTreatmentToggle = (id) => {
  //   setDiamondFilterData({
  //     ...diamondFilterData,
  //     treatmentList: diamondFilterData.treatmentList.map((item, index2) => {
  //       if (item.Display_Order === id) {
  //         return { ...item, classToggle: !item.classToggle };
  //       }
  //       return item;
  //     }),
  //   });
  // };
  const handleGrowthTypeToggle = id => {
    setDiamondFilterData({
      ...diamondFilterData,
      growthTypeList: diamondFilterData?.growthTypeList.map((item, index2) => {
        if (item.Display_Order === id) {
          return { ...item, classToggle: !item.classToggle };
        }
        return item;
      }),
    });
  };
  const handleCutToggle = id => {
    setDiamondFilterData({
      ...diamondFilterData,
      cutList: diamondFilterData.cutList.map((item, index2) => {
        if (item.Display_Order === id) {
          return { ...item, classToggle: !item.classToggle };
        }
        return item;
      }),
    });
  };
  const handlePolishToggle = id => {
    setDiamondFilterData({
      ...diamondFilterData,
      polishList: diamondFilterData.polishList.map((item, index2) => {
        if (item.Display_Order === id) {
          return { ...item, classToggle: !item.classToggle };
        }
        return item;
      }),
    });
  };
  const handleSymmetryToggle = id => {
    setDiamondFilterData({
      ...diamondFilterData,
      symmetryList: diamondFilterData.symmetryList.map((item, index2) => {
        if (item.Display_Order === id) {
          return { ...item, classToggle: !item.classToggle };
        }
        return item;
      }),
    });
  };
  const handlegridleConditionToggle = id => {
    setDiamondFilterData({
      ...diamondFilterData,
      gridleConditionList: diamondFilterData.gridleConditionList.map(
        (item, index2) => {
          if (item.Display_Order === id) {
            return { ...item, classToggle: !item.classToggle };
          }
          return item;
        },
      ),
    });
  };
  const handlegridleThickToggle = id => {
    setDiamondFilterData({
      ...diamondFilterData,
      gridleThickList: diamondFilterData.gridleThickList.map((item, index2) => {
        if (item.Display_Order === id) {
          return { ...item, classToggle: !item.classToggle };
        }
        return item;
      }),
    });
  };
  const handleculetSizeToggle = id => {
    setDiamondFilterData({
      ...diamondFilterData,
      culetSizeList: diamondFilterData.culetSizeList.map((item, index2) => {
        if (item.Display_Order === id) {
          return { ...item, classToggle: !item.classToggle };
        }
        return item;
      }),
    });
  };
  const handlegridleThinToggle = id => {
    setDiamondFilterData({
      ...diamondFilterData,
      gridleList: diamondFilterData.gridleList.map((item, index2) => {
        if (item.Display_Order === id) {
          return { ...item, classToggle: !item.classToggle };
        }
        return item;
      }),
    });
  };
  const handleculetConditionToggle = id => {
    setDiamondFilterData({
      ...diamondFilterData,
      culetConditionList: diamondFilterData.culetConditionList.map(
        (item, index2) => {
          if (item.MasterTypeValue_Id === id) {
            return { ...item, classToggle: !item.classToggle };
          }
          return item;
        },
      ),
    });
  };
  const handleMilkyToggle = id => {
    setDiamondFilterData({
      ...diamondFilterData,
      milkyList: diamondFilterData.milkyList.map((item, index2) => {
        if (item.Display_Order === id) {
          return { ...item, classToggle: !item.classToggle };
        }
        return item;
      }),
    });
  };
  const handleShadeToggle = id => {
    setDiamondFilterData({
      ...diamondFilterData,
      shadeList: diamondFilterData.shadeList.map((item, index2) => {
        if (item.Display_Order === id) {
          return { ...item, classToggle: !item.classToggle };
        }
        return item;
      }),
    });
  };
  const handleEyeCleanToggle = id => {
    setDiamondFilterData({
      ...diamondFilterData,
      eyecleanList: diamondFilterData.eyecleanList.map((item, index2) => {
        if (item.Display_Order === id) {
          return { ...item, classToggle: !item.classToggle };
        }
        return item;
      }),
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 11,
    slidesToScroll: 1,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 11,
        spaceBetween: 10,
      },
    },
  };
  const options = {
    loop: false,
    margin: 10,
    items: 11,
    autoplay: false,
    nav: true,
    responsive: {
      0: {
        items: 2,
      },
      500: {
        items: 3,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 8,
      },
      1200: {
        items: 9,
      },
      1500: {
        items: 11,
      },
    },
  };
  const handleChangePriceFrom = useCallback(
    value => {
      dispatch(
        setSearchDiamondSavedData({
          ...searchDiamondSavedData,
          priceFrom: value,
        }),
      );
      dispatch(
        getTotalSearchDiamond({
          ...searchDiamondSavedData,
          priceFrom: value,
          UserID: userData.UserID,
        }),
      );
    },
    [dispatch, searchDiamondSavedData, userData],
  );
  const priceFromTextChange = useCallback(
    _.debounce(handleChangePriceFrom, 800),
  );
  const handleChangeCaratFrom = useCallback(
    value => {
      dispatch(
        setSearchDiamondSavedData({
          ...searchDiamondSavedData,
          caratSizeIds: value,
        }),
      );
      dispatch(
        getTotalSearchDiamond({
          ...searchDiamondSavedData,
          caratSizeIds: value,
          UserID: userData.UserID,
        }),
      );
    },
    [dispatch, searchDiamondSavedData, userData],
  );
  const caratFromTextChange = useCallback(
    _.debounce(handleChangeCaratFrom, 800),
  );
  const handleChangePriceTo = useCallback(
    value => {
      dispatch(
        setSearchDiamondSavedData({
          ...searchDiamondSavedData,
          priceTo: value,
        }),
      );
      dispatch(
        getTotalSearchDiamond({
          ...searchDiamondSavedData,
          priceTo: value,
          UserID: userData.UserID,
        }),
      );
    },
    [dispatch, searchDiamondSavedData, userData],
  );
  const priceToTextChange = useCallback(_.debounce(handleChangePriceTo, 800));
  const handleChangeCaratTo = useCallback(
    (sizeFrom, value) => {
      dispatch(
        setSearchDiamondSavedData({
          ...searchDiamondSavedData,
          caratSizeIds: sizeFrom + '-' + value,
        }),
      );
      dispatch(
        getTotalSearchDiamond({
          ...searchDiamondSavedData,
          caratSizeIds: sizeFrom + '-' + value,
          UserID: userData.UserID,
        }),
      );
    },
    [dispatch, searchDiamondSavedData, userData],
  );
  const caratToTextChange = useCallback(_.debounce(handleChangeCaratTo, 800));
  // const [diamondType, setDiamondType] = useState(1);
  return (
    <>
      {(seavedSearchLoading ||
        totalSearchDiamondLoading ||
        diamondDetailListLoading) && <Loader />}
      <Formik
        enableReinitialize={true}
        // initialValues={initialValues}
        initialValues={serchDiamondFinalValue}
        innerRef={submitRef}
        onSubmit={values => {
          /* let finalLocation =
          values.location &&
          values.location.map((item, index) => {
            return item.value.toString();
          });
        let finalHnA =
          values.hna &&
          values.hna.map((item, index) => {
            return item.value.toString();
          });
        let finalFancyColor =
          values.fancyColor &&
          values.fancyColor.map((item, index) => {
            return item.value.toString();
          });
        let finalFancyItens =
          values.fancyIntensity &&
          values.fancyIntensity.map((item, index) => {
            return item.value.toString();
          });
        let finalFancyOverton =
          values.fancyOvertone &&
          values.fancyOvertone.map((item, index) => {
            return item.value.toString();
          });
        let newObj = {
          shape: values.shape?.toString(),
          milky: values.milky?.toString(),
          location: finalLocation?.toString(),
          hna: finalHnA?.toString(),
          SearchName: values.searchName,
          colorType: Number(values.colorType),
          caratSizeIds: values.caratSizeIds
            ? values.caratSizeIds
            : values.sizeFrom !== 0 && values.sizeTo !== 0
            ? `${values.sizeFrom}-${values.sizeTo}`
            : '',
          culetSize: values.culetSize?.toString(),
          culetCondition: values.culetCondition?.toString(),
          clarity: values.clarity?.toString(),
          crownAngleFrom: values.crownAngleFrom,
          crownAngleTo: values.crownAngleTo,
          whiteColor: values.whiteColor?.toString(),
          fancyColor: finalFancyColor?.toString(),
          fancyIntensity: finalFancyItens?.toString(),
          fancyOvertone: finalFancyOverton?.toString(),
          cut: values.cut?.toString(),
          polish: values.polish?.toString(),
          symmetry: values.symmetry?.toString(),
          fluorescence: values.fluorescence?.toString(),
          tinge: values.tinge?.toString(),
          // treatment: values.treatment?.toString(),
          growthType: values.growthType?.toString(),
          lab: values.lab?.toString(),
          priceFrom: values.priceFrom,
          priceTo: values.priceTo,
          discountFrom: values.discountFrom,
          discountTo: values.discountTo,
          ratioFrom: values.ratioFrom,
          ratioTo: values.ratioTo,
          tableFrom: values.tableFrom,
          tableTo: values.tableTo,
          pavilionAngleFrom: values.pavilionAngleFrom,
          pavilionAngleTo: values.pavilionAngleTo,
          pavilionDepthFrom: values.pavilionDepthFrom,
          pavilionDepthTo: values.pavilionDepthTo,
          starLengthFrom: values.starLengthFrom,
          starLengthTo: values.starLengthTo,
          lowerHalfFrom: values.lowerHalfFrom,
          lowerHalfTo: values.lowerHalfTo,
          girdlePerFrom: values.girdlePerFrom,
          girdlePerTo: values.girdlePerTo,
          eyeClean: values.eyeClean?.toString(),
          lengthFrom: values.lengthFrom,
          lengthTo: values.lengthTo,
          widthFrom: values.widthFrom,
          widthTo: values.widthTo,
          depthFrom: values.depthFrom,
          depthTo: values.depthTo,
          keytoSymbols: values.keytoSymbols,
          girdleCondition: values.girdleCondition?.toString(),
          shade: values.shade?.toString(),
          girdleThin: values.girdleThin?.toString(),
          girdleThick: values.girdleThick?.toString(),
          crownHeightFrom: values.crownHeightFrom,
          crownHeightTo: values.crownHeightTo,
          StockStatus: values.StockStatus ? 'available' : '',
        };
        dispatch(
          setSearchDiamondSavedData({
            ...newObj,
            checkboxId: values.checkboxId,
          }),
        );
        // dispatch(setSearchDiamondSavedData(newObj));
        dispatch(getTotalSearchDiamond({ ...newObj, UserID: userData.UserID }));
        dispatch(setIsFilterSaved(true));
        dispatch(setIsModifySearch(false)); */
        }}
      >
        {({
          getFieldProps,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          resetForm,
        }) => (
          <Form onSubmit={handleSubmit}>
            <div className="quick_search_inner">
              <div className="search_inner_wrap">
                <div className="check_input_wraper">
                  <ul>
                    <li>
                      <div className="checkbox_wrapper radio_wrapper">
                        <Form.Check
                          type="radio"
                          name="labGrownDiamond"
                          id="NaturalDiamond"
                          label="Natural Diamond"
                          checked={values.labGrownDiamond === '1'}
                          onClick={() => handleChange('labGrownDiamond')('1')}
                        />
                      </div>
                    </li>
                    <li>
                      <div className="checkbox_wrapper radio_wrapper">
                        <Form.Check
                          type="radio"
                          name="labGrownDiamond"
                          id="LabGrownDiamond"
                          label="Lab Grown Diamond"
                          checked={values.labGrownDiamond === '2'}
                          onClick={() => handleChange('labGrownDiamond')('2')}
                        />
                      </div>
                    </li>
                    <li>
                      <div className="checkbox_wrapper radio_wrapper">
                        <Form.Check
                          type="radio"
                          name="labGrownDiamond"
                          id="GemStone"
                          label="Gem Stone"
                          checked={values.labGrownDiamond === '3'}
                          onClick={() => handleChange('labGrownDiamond')('3')}
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="search_inner_wrap">
                <div className="search_label">
                  <h6>Shape</h6>
                </div>
                <div className="search_content">
                  <div className="shape_select">
                    <ul>
                      {diamondFilterData?.shapeList?.map((item, index) => {
                        return (
                          <li key={index}>
                            <div className="custom_checkbox_shape">
                              <input
                                type="checkbox"
                                id={item.DisplayName}
                                checked={values?.shape?.includes(
                                  item.MasterTypeValue_Code,
                                )}
                                readOnly
                                onClick={e => {
                                  handleShapeToggle(item.MasterTypeValue_Id);
                                  const { checked } = e.target;
                                  if (checked) {
                                    if (
                                      values.shape.includes(
                                        item.MasterTypeValue_Code,
                                      )
                                    ) {
                                      const newarr = values.shape.filter(
                                        item2 =>
                                          item2 !== item.MasterTypeValue_Code,
                                      );

                                      setFieldValue('shape', newarr);
                                      dispatch(
                                        setSearchDiamondSavedData({
                                          ...searchDiamondSavedData,
                                          shape: newarr?.toString(),
                                        }),
                                      );
                                      dispatch(
                                        getTotalSearchDiamond({
                                          ...searchDiamondSavedData,
                                          shape: newarr?.toString(),
                                          UserID: userData.UserID,
                                        }),
                                      );
                                    } else {
                                      setFieldValue('shape', [
                                        ...values.shape,
                                        item.MasterTypeValue_Code,
                                      ]);
                                      dispatch(
                                        setSearchDiamondSavedData({
                                          ...searchDiamondSavedData,
                                          shape: [
                                            ...values.shape,
                                            item.MasterTypeValue_Code,
                                          ].toString(),
                                        }),
                                      );
                                      dispatch(
                                        getTotalSearchDiamond({
                                          ...searchDiamondSavedData,
                                          shape: [
                                            ...values.shape,
                                            item.MasterTypeValue_Code,
                                          ].toString(),
                                          UserID: userData.UserID,
                                        }),
                                      );
                                    }
                                  } else {
                                    setFieldValue(
                                      'shape',
                                      values.shape.filter(
                                        v => v !== item.MasterTypeValue_Code,
                                      ),
                                    );
                                    dispatch(
                                      setSearchDiamondSavedData({
                                        ...searchDiamondSavedData,
                                        shape: values.shape
                                          .filter(
                                            v =>
                                              v !== item.MasterTypeValue_Code,
                                          )
                                          .toString(),
                                      }),
                                    );
                                    dispatch(
                                      getTotalSearchDiamond({
                                        ...searchDiamondSavedData,
                                        shape: values.shape
                                          .filter(
                                            v =>
                                              v !== item.MasterTypeValue_Code,
                                          )
                                          .toString(),
                                        UserID: userData.UserID,
                                      }),
                                    );
                                  }
                                }}
                              />
                              <label htmlFor={item.DisplayName}>
                                <img
                                  src={`${process.env.REACT_APP_DOMAIN}/Content/DomainData/${process.env.REACT_APP_DOMAIN_WITHOUT_HTTP}/img/Diamonds/Active/${item.DisplayName}.svg`}
                                  alt={item.DisplayName}
                                  className="injectable"
                                />
                              </label>
                            </div>
                          </li>
                        );
                      })}
                      <li>
                        <div className="custom_checkbox_shape">
                          <input type="checkbox" id="round" />
                          <label htmlFor="round">
                            <img
                              src={roundShape}
                              alt="round"
                              className="injectable"
                            />
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="search_inner_wrap">
                <div className="search_label">
                  <h6>Price</h6>
                </div>
                <div className="search_content">
                  <div className="input_box_wrapper">
                    <ul>
                      <li>
                        <Form.Group
                          className="form_group"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control
                            type="number"
                            name="priceFrom"
                            value={values.priceFrom}
                            onChange={e => {
                              handleChange('priceFrom')(e.target.value);
                              priceFromTextChange(e.target.value);
                            }}
                            placeholder="$ From"
                          />
                        </Form.Group>
                      </li>
                      <li>
                        <Form.Group
                          className="form_group"
                          controlId="exampleForm.ControlInput2"
                        >
                          <Form.Control
                            type="number"
                            name="priceTo"
                            value={values.priceTo}
                            onChange={e => {
                              handleChange('priceTo')(e.target.value);
                              priceToTextChange(e.target.value);
                            }}
                            placeholder="$ To"
                          />
                        </Form.Group>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {values?.labGrownDiamond === '1' ||
              values?.labGrownDiamond === '2' ? (
                <>
                  <div className="search_inner_wrap">
                    <div className="search_label">
                      <h6>Carat</h6>
                    </div>
                    <div className="search_content">
                      <div className="input_box_wrapper">
                        <ul>
                          {!values.caratSizeIds && !weightToggle && (
                            <>
                              <li>
                                <Form.Group
                                  className="form_group"
                                  controlId="exampleForm.ControlInput3"
                                >
                                  <Form.Control
                                    type="number"
                                    placeholder="From"
                                    name="sizeFrom"
                                    value={values.sizeFrom}
                                    onChange={e => {
                                      handleChange('sizeFrom')(e.target.value);
                                      handleChange('caratSizeIds')('');
                                      caratFromTextChange(e.target.value);
                                    }}
                                  />
                                </Form.Group>
                              </li>
                              <li>
                                <Form.Group
                                  className="form_group"
                                  controlId="exampleForm.ControlInput4"
                                >
                                  <Form.Control
                                    type="number"
                                    name="sizeTo"
                                    placeholder="To"
                                    value={values.sizeTo}
                                    onChange={e => {
                                      handleChange('sizeTo')(e.target.value);
                                      handleChange('caratSizeIds')('');
                                      caratToTextChange(
                                        values.sizeFrom,
                                        e.target.value,
                                      );
                                    }}
                                  />
                                </Form.Group>
                              </li>
                            </>
                          )}
                          {(weightToggle || values.caratSizeIds !== '') && (
                            <div className="weight_search_wrap">
                              {/*  <input
                                type="text"
                                className="form-control"
                                value={values.caratSizeIds}
                              /> */}
                              <Form.Control
                                type="text"
                                name="caratSizeIds"
                                value={values.caratSizeIds}
                              />
                            </div>
                          )}
                          <button
                            className="btn_blue active"
                            id="weight-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#weight"
                            type="button"
                            role="tab"
                            aria-controls="weight"
                            aria-selected="true"
                            onClick={() => {
                              setWeightToggle(!weightToggle);
                            }}
                          >
                            Carat
                          </button>

                          {weightToggle && (
                            <div className="weight_dropdown">
                              {diamondFilterData?.caratSizeList?.map(
                                (item, index) => {
                                  return (
                                    <div className="row">
                                      <div className="col-12">
                                        <div className="weight_dropdown_row">
                                          <div className="checkbox_wdropdown">
                                            <input
                                              type="checkbox"
                                              id={index}
                                              name="weight"
                                              value={values.caratSizeIds}
                                              checked={
                                                item.classToggle ? true : false
                                              }
                                              onChange={() => {
                                                handleWeightToggle(index);
                                              }}
                                            />
                                            <label
                                              htmlFor={index}
                                              className={
                                                item.classToggle === true
                                                  ? 'active'
                                                  : ''
                                              }
                                            >
                                              {item.CaratSizeTo}
                                            </label>
                                          </div>
                                          <input
                                            type="number"
                                            className="form-control"
                                            id="sizeFrom"
                                            name="sizeFrom"
                                            placeholder=""
                                            value={
                                              item.classToggle &&
                                              item.CaratSizeFrom
                                            }
                                            onChange={e => {
                                              handleChange('sizeFrom')(
                                                e.target.value,
                                              );
                                              dispatch(
                                                setSearchDiamondSavedData({
                                                  ...searchDiamondSavedData,
                                                  caratSizeIds: e.target.value,
                                                }),
                                              );
                                              dispatch(
                                                getTotalSearchDiamond({
                                                  ...searchDiamondSavedData,
                                                  caratSizeIds: e.target.value,
                                                  UserID: userData.UserID,
                                                }),
                                              );
                                            }}
                                          />
                                          <span>-</span>
                                          <input
                                            type="number"
                                            className="form-control"
                                            id="sizeTo"
                                            placeholder=""
                                            value={
                                              item.classToggle &&
                                              item.CaratSizeTo
                                            }
                                            onChange={e => {
                                              handleChange('sizeTo')(
                                                e.target.value,
                                              );
                                              dispatch(
                                                setSearchDiamondSavedData({
                                                  ...searchDiamondSavedData,
                                                  caratSizeIds:
                                                    values.sizeFrom +
                                                    '-' +
                                                    e.target.value,
                                                }),
                                              );
                                              dispatch(
                                                getTotalSearchDiamond({
                                                  ...searchDiamondSavedData,
                                                  caratSizeIds:
                                                    values.sizeFrom +
                                                    '-' +
                                                    e.target.value,
                                                  UserID: userData.UserID,
                                                }),
                                              );
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  );
                                },
                              )}
                              <div className="dropdown_btn_wrap">
                                <button
                                  className="btn_blue"
                                  onClick={() => {
                                    let dummyData = [];
                                    diamondFilterData.caratSizeList.filter(
                                      item => {
                                        if (item.classToggle) {
                                          dummyData.push(
                                            `${item.CaratSizeFrom}-${item.CaratSizeTo}`,
                                          );
                                        }
                                      },
                                    );
                                    handleChange('caratSizeIds')(
                                      dummyData.toString(),
                                    );
                                    handleChange('sizeFrom')('0');
                                    handleChange('sizeTo')('0');
                                    setWeightToggle(!weightToggle);
                                    dispatch(
                                      setSearchDiamondSavedData({
                                        ...searchDiamondSavedData,
                                        caratSizeIds: dummyData.toString(),
                                      }),
                                    );
                                    dispatch(
                                      getTotalSearchDiamond({
                                        ...searchDiamondSavedData,
                                        caratSizeIds: dummyData.toString(),
                                        UserID: userData.UserID,
                                      }),
                                    );
                                  }}
                                >
                                  Ok
                                </button>
                                <button
                                  className="btn_blue"
                                  onClick={() => {
                                    handleChange('caratSizeIds')('');
                                    setWeightToggle(!weightToggle);
                                  }}
                                >
                                  Clear
                                </button>
                                <button
                                  className="btn_blue"
                                  onClick={() => setWeightToggle(!weightToggle)}
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          )}
                          <li>
                            <Form.Group
                              className="form_group"
                              controlId="exampleForm.ControlInput5"
                            >
                              <Form.Control
                                type="email"
                                placeholder="Certificate No."
                              />
                            </Form.Group>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="search_inner_wrap align-items-start">
                    <div className="search_label mt10">
                      <h6>Color</h6>
                    </div>
                    <div className="search_content">
                      <div className="fancy_color_tab_wrapper">
                        <div className="tab_design_one">
                          <Tabs
                            id="fancy_color_tab"
                            activeKey={values.colorType}
                            onSelect={k => {
                              if (k === '1') {
                                setFieldValue('colorType', 1);
                                setWhiteFancyToggle(false);
                                dispatch(setIsFancyColor(1));
                                dispatch(
                                  setSearchDiamondSavedData({
                                    ...searchDiamondSavedData,
                                    colorType: 1,
                                  }),
                                );
                                dispatch(
                                  getTotalSearchDiamond({
                                    ...searchDiamondSavedData,
                                    colorType: 1,
                                    UserID: userData.UserID,
                                  }),
                                );
                              } else {
                                setFieldValue('colorType', 2);
                                setWhiteFancyToggle(true);
                                dispatch(setIsFancyColor(2));
                                dispatch(
                                  setSearchDiamondSavedData({
                                    ...searchDiamondSavedData,
                                    colorType: 2,
                                  }),
                                );
                                dispatch(
                                  getTotalSearchDiamond({
                                    ...searchDiamondSavedData,
                                    colorType: 2,
                                    UserID: userData.UserID,
                                  }),
                                );
                              }
                            }}
                          >
                            <Tab eventKey="1" title="White" name="colorType">
                              <div className="check_input_wraper">
                                <ul>
                                  {diamondFilterData?.colorWhiteList?.map(
                                    (item, index) => {
                                      return (
                                        <li key={index}>
                                          <div className="checkbox_wrapper">
                                            <Form.Check
                                              type="checkbox"
                                              id={item.MasterTypeValue_Code}
                                              label={item.MasterTypeValue_Code}
                                              checked={values.whiteColor.includes(
                                                item.MasterTypeValue_Code,
                                              )}
                                              onClick={e => {
                                                handleColorWhiteToggle(
                                                  item.Display_Order,
                                                );
                                                const { checked } = e.target;
                                                if (checked) {
                                                  if (
                                                    values.whiteColor.includes(
                                                      item.MasterTypeValue_Code,
                                                    )
                                                  ) {
                                                    const newarr =
                                                      values.whiteColor.filter(
                                                        item2 =>
                                                          item2 !==
                                                          item.MasterTypeValue_Code,
                                                      );

                                                    setFieldValue(
                                                      'whiteColor',
                                                      newarr,
                                                    );
                                                    dispatch(
                                                      setSearchDiamondSavedData(
                                                        {
                                                          ...searchDiamondSavedData,
                                                          ColorType:
                                                            values.ColorType,
                                                          whiteColor:
                                                            newarr?.toString(),
                                                        },
                                                      ),
                                                    );
                                                    dispatch(
                                                      getTotalSearchDiamond({
                                                        ...searchDiamondSavedData,
                                                        ColorType:
                                                          values.ColorType,
                                                        whiteColor:
                                                          newarr?.toString(),
                                                        UserID: userData.UserID,
                                                      }),
                                                    );
                                                  } else {
                                                    setFieldValue(
                                                      'whiteColor',
                                                      [
                                                        ...values.whiteColor,
                                                        item.MasterTypeValue_Code,
                                                      ],
                                                    );
                                                    dispatch(
                                                      setSearchDiamondSavedData(
                                                        {
                                                          ...searchDiamondSavedData,
                                                          ColorType:
                                                            values.ColorType,
                                                          whiteColor: [
                                                            ...values.whiteColor,
                                                            item.MasterTypeValue_Code,
                                                          ].toString(),
                                                        },
                                                      ),
                                                    );
                                                    dispatch(
                                                      getTotalSearchDiamond({
                                                        ...searchDiamondSavedData,
                                                        ColorType:
                                                          values.ColorType,
                                                        whiteColor: [
                                                          ...values.whiteColor,
                                                          item.MasterTypeValue_Code,
                                                        ].toString(),
                                                        UserID: userData.UserID,
                                                      }),
                                                    );
                                                  }
                                                } else {
                                                  setFieldValue(
                                                    'whiteColor',
                                                    values.whiteColor.filter(
                                                      v =>
                                                        v !==
                                                        item.MasterTypeValue_Code,
                                                    ),
                                                  );
                                                  dispatch(
                                                    setSearchDiamondSavedData({
                                                      ...searchDiamondSavedData,
                                                      ColorType:
                                                        values.ColorType,
                                                      whiteColor:
                                                        values.whiteColor
                                                          .filter(
                                                            v =>
                                                              v !==
                                                              item.MasterTypeValue_Code,
                                                          )
                                                          .toString(),
                                                    }),
                                                  );
                                                  dispatch(
                                                    getTotalSearchDiamond({
                                                      ...searchDiamondSavedData,
                                                      ColorType:
                                                        values.ColorType,
                                                      whiteColor:
                                                        values.whiteColor
                                                          .filter(
                                                            v =>
                                                              v !==
                                                              item.MasterTypeValue_Code,
                                                          )
                                                          .toString(),
                                                      UserID: userData.UserID,
                                                    }),
                                                  );
                                                }
                                              }}
                                            />
                                          </div>
                                        </li>
                                      );
                                    },
                                  )}
                                </ul>
                              </div>
                            </Tab>
                            <Tab eventKey="2" title="Fancy" name="colorType">
                              <div className="check_input_wraper">
                                <div className="row">
                                  <div className="col-md-6 mb-2">
                                    <Select
                                      placeholder="Fancy Color"
                                      value={values.fancyColor}
                                      onChange={(e, index) => {
                                        let selectedObj = {
                                          target: {
                                            name: 'fancyColor',
                                            value: e,
                                          },
                                        };
                                        // setSelectedFancyColorval(e);
                                        handleChange('fancyColor')(selectedObj);
                                        let finalFancyColor =
                                          selectedObj.target.value.map(
                                            (item, index) => {
                                              return item.value;
                                            },
                                          );

                                        dispatch(
                                          setSearchDiamondSavedData({
                                            ...searchDiamondSavedData,
                                            ColorType: values.ColorType,
                                            fancyColor:
                                              finalFancyColor.toString(),
                                          }),
                                        );

                                        dispatch(
                                          getTotalSearchDiamond({
                                            ...searchDiamondSavedData,
                                            ColorType: values.ColorType,
                                            fancyColor:
                                              finalFancyColor.toString(),
                                            UserID: userData.UserID,
                                          }),
                                        );
                                      }}
                                      isMulti
                                      options={
                                        diamondFilterData?.fancycolorList
                                      }
                                    />
                                  </div>
                                  <div className="col-md-6 mb-2">
                                    <Select
                                      placeholder="Fancy Intensity"
                                      value={values.fancyIntensity}
                                      onChange={(e, index) => {
                                        let selectedObj = {
                                          target: {
                                            name: 'fancyIntensity',
                                            value: e,
                                          },
                                        };
                                        // setSelectedFancyIntensityval(e);
                                        handleChange('fancyIntensity')(
                                          selectedObj,
                                        );
                                        let finalFancyIntensity =
                                          selectedObj.target.value.map(
                                            (item, index) => {
                                              return item.value;
                                            },
                                          );

                                        dispatch(
                                          setSearchDiamondSavedData({
                                            ...searchDiamondSavedData,
                                            ColorType: values.ColorType,
                                            fancyIntensity:
                                              finalFancyIntensity.toString(),
                                          }),
                                        );

                                        dispatch(
                                          getTotalSearchDiamond({
                                            ...searchDiamondSavedData,
                                            ColorType: values.ColorType,
                                            fancyIntensity:
                                              finalFancyIntensity.toString(),
                                            UserID: userData.UserID,
                                          }),
                                        );
                                      }}
                                      isMulti
                                      options={
                                        diamondFilterData?.fancyintensityList
                                      }
                                    />
                                  </div>
                                  <div className="col-md-6 mb-2">
                                    <Select
                                      placeholder="Fancy overtone"
                                      value={values.fancyOvertone}
                                      onChange={(e, index) => {
                                        let selectedObj = {
                                          target: {
                                            name: 'fancyOvertone',
                                            value: e,
                                          },
                                        };
                                        handleChange('fancyOvertone')(
                                          selectedObj,
                                        );
                                        // setSelectedFancyOvertoneval(e);
                                        let finalFancyOvertone =
                                          selectedObj.target.value.map(
                                            (item, index) => {
                                              return item.value;
                                            },
                                          );

                                        dispatch(
                                          setSearchDiamondSavedData({
                                            ...searchDiamondSavedData,
                                            ColorType: values.ColorType,
                                            fancyOvertone:
                                              finalFancyOvertone.toString(),
                                          }),
                                        );

                                        dispatch(
                                          getTotalSearchDiamond({
                                            ...searchDiamondSavedData,
                                            ColorType: values.ColorType,
                                            fancyOvertone:
                                              finalFancyOvertone.toString(),
                                            UserID: userData.UserID,
                                          }),
                                        );
                                      }}
                                      isMulti
                                      options={
                                        diamondFilterData?.fancyovertonList
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            </Tab>
                          </Tabs>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="search_inner_wrap">
                    <div className="search_label">
                      <h6>Clarity</h6>
                    </div>
                    <div className="search_content">
                      <div className="check_input_wraper">
                        <ul>
                          {diamondFilterData?.clarityList?.map(
                            (item, index) => {
                              return (
                                <li key={index}>
                                  <div className="checkbox_wrapper">
                                    <Form.Check
                                      type="checkbox"
                                      id={item.MasterTypeValue_Code}
                                      label={item.MasterTypeValue_Code}
                                      checked={item.classToggle}
                                      onChange={e => {
                                        handleCarityToggle(item.Display_Order);
                                        const { checked } = e.target;
                                        if (checked) {
                                          if (
                                            values.clarity.includes(
                                              item.MasterTypeValue_Code,
                                            )
                                          ) {
                                            const newarr =
                                              values.clarity.filter(
                                                item2 =>
                                                  item2 !==
                                                  item.MasterTypeValue_Code,
                                              );

                                            setFieldValue('clarity', newarr);
                                            dispatch(
                                              setSearchDiamondSavedData({
                                                ...searchDiamondSavedData,
                                                clarity: newarr.toString(),
                                              }),
                                            );

                                            dispatch(
                                              getTotalSearchDiamond({
                                                ...searchDiamondSavedData,
                                                clarity: newarr.toString(),
                                                UserID: userData.UserID,
                                              }),
                                            );
                                          } else {
                                            setFieldValue('clarity', [
                                              ...values.clarity,
                                              item.MasterTypeValue_Code,
                                            ]);
                                            dispatch(
                                              setSearchDiamondSavedData({
                                                ...searchDiamondSavedData,
                                                clarity: [
                                                  ...values.clarity,
                                                  item.MasterTypeValue_Code,
                                                ].toString(),
                                              }),
                                            );

                                            dispatch(
                                              getTotalSearchDiamond({
                                                ...searchDiamondSavedData,
                                                clarity: [
                                                  ...values.clarity,
                                                  item.MasterTypeValue_Code,
                                                ].toString(),
                                                UserID: userData.UserID,
                                              }),
                                            );
                                          }
                                        } else {
                                          setFieldValue(
                                            'clarity',
                                            values.clarity.filter(
                                              v =>
                                                v !== item.MasterTypeValue_Code,
                                            ),
                                          );
                                          dispatch(
                                            setSearchDiamondSavedData({
                                              ...searchDiamondSavedData,
                                              clarity: values.clarity
                                                .filter(
                                                  v =>
                                                    v !==
                                                    item.MasterTypeValue_Code,
                                                )
                                                .toString(),
                                            }),
                                          );

                                          dispatch(
                                            getTotalSearchDiamond({
                                              ...searchDiamondSavedData,
                                              clarity: values.clarity
                                                .filter(
                                                  v =>
                                                    v !==
                                                    item.MasterTypeValue_Code,
                                                )
                                                .toString(),
                                              UserID: userData.UserID,
                                            }),
                                          );
                                        }
                                      }}
                                    />
                                  </div>
                                </li>
                              );
                            },
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="search_inner_wrap">
                    <div className="search_label">
                      <h6>Certificate</h6>
                    </div>
                    <div className="search_content">
                      <div className="check_input_wraper">
                        <ul>
                          {diamondFilterData?.labList?.map((item, index) => {
                            return (
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id={item.MasterTypeValue_Code}
                                    label={item.MasterTypeValue_Code}
                                    checked={item.classToggle}
                                    onChange={e => {
                                      handleLabToggle(item.Display_Order);
                                      const { checked } = e.target;
                                      if (checked) {
                                        if (
                                          values.lab.includes(
                                            item.MasterTypeValue_Code,
                                          )
                                        ) {
                                          const newarr = values.lab.filter(
                                            item2 =>
                                              item2 !==
                                              item.MasterTypeValue_Code,
                                          );

                                          setFieldValue('lab', newarr);
                                          dispatch(
                                            setSearchDiamondSavedData({
                                              ...searchDiamondSavedData,
                                              lab: newarr?.toString(),
                                            }),
                                          );
                                          dispatch(
                                            getTotalSearchDiamond({
                                              ...searchDiamondSavedData,
                                              lab: newarr?.toString(),
                                              UserID: userData.UserID,
                                            }),
                                          );
                                        } else {
                                          setFieldValue('lab', [
                                            ...values.lab,
                                            item.MasterTypeValue_Code,
                                          ]);
                                          dispatch(
                                            setSearchDiamondSavedData({
                                              ...searchDiamondSavedData,
                                              lab: [
                                                ...values.lab,
                                                item.MasterTypeValue_Code,
                                              ].toString(),
                                            }),
                                          );
                                          dispatch(
                                            getTotalSearchDiamond({
                                              ...searchDiamondSavedData,
                                              lab: [
                                                ...values.lab,
                                                item.MasterTypeValue_Code,
                                              ].toString(),
                                              UserID: userData.UserID,
                                            }),
                                          );
                                        }
                                      } else {
                                        setFieldValue(
                                          'lab',
                                          values.lab.filter(
                                            v =>
                                              v !== item.MasterTypeValue_Code,
                                          ),
                                        );
                                        dispatch(
                                          setSearchDiamondSavedData({
                                            ...searchDiamondSavedData,
                                            lab: values.lab
                                              .filter(
                                                v =>
                                                  v !==
                                                  item.MasterTypeValue_Code,
                                              )
                                              .toString(),
                                          }),
                                        );
                                        dispatch(
                                          getTotalSearchDiamond({
                                            ...searchDiamondSavedData,
                                            lab: values.lab
                                              .filter(
                                                v =>
                                                  v !==
                                                  item.MasterTypeValue_Code,
                                              )
                                              .toString(),
                                            UserID: userData.UserID,
                                          }),
                                        );
                                      }
                                    }}
                                  />
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="search_inner_wrap">
                    <div className="search_label">
                      <h6>Fluorescence</h6>
                    </div>
                    <div className="search_content">
                      <div className="check_input_wraper">
                        <ul>
                          {diamondFilterData?.fluorescenceList?.map(
                            (item, index) => {
                              return (
                                <li>
                                  <div className="checkbox_wrapper">
                                    <Form.Check
                                      type="checkbox"
                                      id={item.MasterTypeValue_Code}
                                      label={item.MasterTypeValue_Code}
                                      checked={item.classToggle}
                                      onChange={e => {
                                        handleFluorescenceToggle(
                                          item.Display_Order,
                                        );
                                        const { checked } = e.target;
                                        if (checked) {
                                          if (
                                            values.fluorescence.includes(
                                              item.MasterTypeValue_Code,
                                            )
                                          ) {
                                            const newarr =
                                              values.fluorescence.filter(
                                                item2 =>
                                                  item2 !==
                                                  item.MasterTypeValue_Code,
                                              );

                                            setFieldValue(
                                              'fluorescence',
                                              newarr,
                                            );
                                            dispatch(
                                              setSearchDiamondSavedData({
                                                ...searchDiamondSavedData,
                                                fluorescence:
                                                  newarr?.toString(),
                                              }),
                                            );
                                            dispatch(
                                              getTotalSearchDiamond({
                                                ...searchDiamondSavedData,
                                                fluorescence:
                                                  newarr?.toString(),
                                                UserID: userData.UserID,
                                              }),
                                            );
                                          } else {
                                            setFieldValue('fluorescence', [
                                              ...values.fluorescence,
                                              item.MasterTypeValue_Code,
                                            ]);
                                            dispatch(
                                              setSearchDiamondSavedData({
                                                ...searchDiamondSavedData,
                                                fluorescence: [
                                                  ...values.fluorescence,
                                                  item.MasterTypeValue_Code,
                                                ].toString(),
                                              }),
                                            );
                                            dispatch(
                                              getTotalSearchDiamond({
                                                ...searchDiamondSavedData,
                                                fluorescence: [
                                                  ...values.fluorescence,
                                                  item.MasterTypeValue_Code,
                                                ].toString(),
                                                UserID: userData.UserID,
                                              }),
                                            );
                                          }
                                        } else {
                                          setFieldValue(
                                            'fluorescence',
                                            values.fluorescence.filter(
                                              v =>
                                                v !== item.MasterTypeValue_Code,
                                            ),
                                          );
                                          dispatch(
                                            setSearchDiamondSavedData({
                                              ...searchDiamondSavedData,
                                              fluorescence: values.fluorescence
                                                .filter(
                                                  v =>
                                                    v !==
                                                    item.MasterTypeValue_Code,
                                                )
                                                .toString(),
                                            }),
                                          );
                                          dispatch(
                                            getTotalSearchDiamond({
                                              ...searchDiamondSavedData,
                                              fluorescence: values.fluorescence
                                                .filter(
                                                  v =>
                                                    v !==
                                                    item.MasterTypeValue_Code,
                                                )
                                                .toString(),
                                              UserID: userData.UserID,
                                            }),
                                          );
                                        }
                                      }}
                                    />
                                  </div>
                                </li>
                              );
                            },
                          )}
                          {/*<li>
                          <div className="checkbox_wrapper">
                            <Form.Check
                              type="checkbox"
                              id="None"
                              label="None"
                            />
                          </div>
                        </li>
                        <li>
                          <div className="checkbox_wrapper">
                            <Form.Check
                              type="checkbox"
                              id="Faint"
                              label="Faint"
                            />
                          </div>
                        </li>
                        <li>
                          <div className="checkbox_wrapper">
                            <Form.Check
                              type="checkbox"
                              id="Medium"
                              label="Medium"
                            />
                          </div>
                        </li>
                        <li>
                          <div className="checkbox_wrapper">
                            <Form.Check
                              type="checkbox"
                              id="Strong"
                              label="Strong"
                            />
                          </div>
                        </li>
                        <li>
                          <div className="checkbox_wrapper">
                            <Form.Check
                              type="checkbox"
                              id="V-Strong"
                              label="V-Strong"
                            />
                          </div>
                        </li>*/}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="search_inner_wrap">
                    <div className="search_label">
                      <h6>Make</h6>
                    </div>
                    <div className="search_content">
                      <div className="check_input_wraper">
                        <ul>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="a_3EX"
                                name="myCheckbox"
                                label="3EX"
                                checked={values.checkboxId === 'a_3EX'}
                                onClick={() => {
                                  if (values.checkboxId === 'a_3EX') {
                                    setFieldValue('checkboxId', '');
                                    setFieldValue('cut', '');
                                    setFieldValue('polish', '');
                                    setFieldValue('symmetry', '');

                                    dispatch(
                                      setSearchDiamondSavedData({
                                        ...searchDiamondSavedData,
                                        cut: '',
                                        polish: '',
                                        symmetry: '',
                                      }),
                                    );
                                    dispatch(
                                      getTotalSearchDiamond({
                                        ...searchDiamondSavedData,
                                        cut: '',
                                        polish: '',
                                        symmetry: '',
                                        UserID: userData.UserID,
                                      }),
                                    );
                                  } else {
                                    setFieldValue('checkboxId', 'a_3EX');

                                    setFieldValue('cut', ['EX', 'ID']);
                                    setFieldValue('polish', ['EX', 'ID']);
                                    setFieldValue('symmetry', ['EX', 'ID']);
                                    dispatch(
                                      setSearchDiamondSavedData({
                                        ...searchDiamondSavedData,
                                        cut: ['EX', 'ID'].toString(),
                                        polish: ['EX', 'ID'].toString(),
                                        symmetry: ['EX', 'ID'].toString(),
                                      }),
                                    );
                                    dispatch(
                                      getTotalSearchDiamond({
                                        ...searchDiamondSavedData,
                                        cut: ['EX', 'ID'].toString(),
                                        polish: ['EX', 'ID'].toString(),
                                        UserID: userData.UserID,
                                        symmetry: ['EX', 'ID'].toString(),
                                      }),
                                    );
                                  }
                                }}
                                onChange={() => {
                                  setDiamondFilterData({
                                    ...diamondFilterData,
                                    cutList: diamondFilterData.cutList.map(
                                      (item, index2) => {
                                        if (
                                          item.DisplayName === 'EX' ||
                                          item.DisplayName === 'ID'
                                        ) {
                                          if (item.DisplayName === 'EX') {
                                            if (
                                              values.checkboxId === 'a_3VG_Plus'
                                            ) {
                                              return {
                                                ...item,
                                                classToggle: item.classToggle,
                                              };
                                            } else {
                                              return {
                                                ...item,
                                                classToggle: !item.classToggle,
                                              };
                                            }
                                          } else {
                                            if (
                                              values.checkboxId === 'a_3VG_Plus'
                                            ) {
                                              return {
                                                ...item,
                                                classToggle: item.classToggle,
                                              };
                                            } else {
                                              return {
                                                ...item,
                                                classToggle: !item.classToggle,
                                              };
                                            }
                                          }
                                        } else {
                                          return {
                                            ...item,
                                            classToggle: false,
                                          };
                                        }
                                      },
                                    ),
                                    symmetryList:
                                      diamondFilterData.symmetryList.map(
                                        (item, index2) => {
                                          if (
                                            item.DisplayName === 'EX' ||
                                            item.DisplayName === 'ID'
                                          ) {
                                            if (item.DisplayName === 'EX') {
                                              if (
                                                values.checkboxId ===
                                                'a_3VG_Plus'
                                              ) {
                                                return {
                                                  ...item,
                                                  classToggle: item.classToggle,
                                                };
                                              } else {
                                                return {
                                                  ...item,
                                                  classToggle:
                                                    !item.classToggle,
                                                };
                                              }
                                            } else {
                                              if (
                                                values.checkboxId ===
                                                'a_3VG_Plus'
                                              ) {
                                                return {
                                                  ...item,
                                                  classToggle: item.classToggle,
                                                };
                                              } else {
                                                return {
                                                  ...item,
                                                  classToggle:
                                                    !item.classToggle,
                                                };
                                              }
                                            }
                                          } else {
                                            return {
                                              ...item,
                                              classToggle: false,
                                            };
                                          }
                                        },
                                      ),
                                    polishList:
                                      diamondFilterData.polishList.map(
                                        (item, index2) => {
                                          if (
                                            item.DisplayName === 'EX' ||
                                            item.DisplayName === 'ID'
                                          ) {
                                            if (item.DisplayName === 'EX') {
                                              if (
                                                values.checkboxId ===
                                                'a_3VG_Plus'
                                              ) {
                                                return {
                                                  ...item,
                                                  classToggle: item.classToggle,
                                                };
                                              } else {
                                                return {
                                                  ...item,
                                                  classToggle:
                                                    !item.classToggle,
                                                };
                                              }
                                            } else {
                                              if (
                                                values.checkboxId ===
                                                'a_3VG_Plus'
                                              ) {
                                                return {
                                                  ...item,
                                                  classToggle: item.classToggle,
                                                };
                                              } else {
                                                return {
                                                  ...item,
                                                  classToggle:
                                                    !item.classToggle,
                                                };
                                              }
                                            }
                                          } else {
                                            return {
                                              ...item,
                                              classToggle: false,
                                            };
                                          }
                                        },
                                      ),
                                  });
                                }}
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                label="3VG
"
                                id="a_3VG"
                                name="myCheckbox"
                                checked={values.checkboxId === 'a_3VG'}
                                onClick={() => {
                                  if (values.checkboxId === 'a_3VG') {
                                    setFieldValue('checkboxId', '');
                                    setFieldValue('cut', '');
                                    setFieldValue('polish', '');
                                    setFieldValue('symmetry', '');

                                    dispatch(
                                      setSearchDiamondSavedData({
                                        ...searchDiamondSavedData,
                                        cut: '',
                                        polish: '',
                                        symmetry: '',
                                      }),
                                    );
                                    dispatch(
                                      getTotalSearchDiamond({
                                        ...searchDiamondSavedData,
                                        cut: '',
                                        polish: '',
                                        symmetry: '',
                                        UserID: userData.UserID,
                                      }),
                                    );
                                  } else {
                                    setFieldValue('checkboxId', 'a_3VG');
                                    if (
                                      values.cut.includes('VG') ||
                                      values.polish.includes('VG') ||
                                      values.symmetry.includes('VG')
                                    ) {
                                      const newarrCut = values.cut.filter(
                                        item2 => item2 == 'VG',
                                      );
                                      const newarrPolish = values.polish.filter(
                                        item2 => item2 == 'VG',
                                      );
                                      const newarrSymmetry =
                                        values.symmetry.filter(
                                          item2 => item2 == 'VG',
                                        );

                                      setFieldValue('symmetry', newarrSymmetry);
                                      setFieldValue('polish', newarrPolish);
                                      setFieldValue('cut', newarrCut);
                                      dispatch(
                                        setSearchDiamondSavedData({
                                          ...searchDiamondSavedData,
                                          cut: newarrCut?.toString(),
                                          polish: newarrPolish?.toString(),
                                          symmetry: newarrSymmetry?.toString(),
                                        }),
                                      );
                                      dispatch(
                                        getTotalSearchDiamond({
                                          ...searchDiamondSavedData,
                                          cut: newarrCut?.toString(),
                                          polish: newarrPolish?.toString(),
                                          symmetry: newarrSymmetry?.toString(),
                                          UserID: userData.UserID,
                                        }),
                                      );
                                    } else {
                                      setFieldValue('cut', ['VG']);
                                      setFieldValue('polish', ['VG']);
                                      setFieldValue('symmetry', ['VG']);
                                      dispatch(
                                        setSearchDiamondSavedData({
                                          ...searchDiamondSavedData,
                                          cut: ['VG'].toString(),
                                          polish: ['VG'].toString(),
                                          symmetry: ['VG'].toString(),
                                        }),
                                      );
                                      dispatch(
                                        getTotalSearchDiamond({
                                          ...searchDiamondSavedData,
                                          cut: ['VG'].toString(),
                                          polish: ['VG'].toString(),
                                          UserID: userData.UserID,
                                          symmetry: ['VG'].toString(),
                                        }),
                                      );
                                    }
                                  }
                                }}
                                onChange={() => {
                                  setDiamondFilterData({
                                    ...diamondFilterData,
                                    cutList: diamondFilterData.cutList.map(
                                      (item, index2) => {
                                        if (item.DisplayName === 'VG') {
                                          if (
                                            values.checkboxId === 'a_3VG_Plus'
                                          ) {
                                            return {
                                              ...item,
                                              classToggle: item.classToggle,
                                            };
                                          } else {
                                            return {
                                              ...item,
                                              classToggle: !item.classToggle,
                                            };
                                          }
                                        } else {
                                          return {
                                            ...item,
                                            classToggle: false,
                                          };
                                        }
                                      },
                                    ),
                                    symmetryList:
                                      diamondFilterData.symmetryList.map(
                                        (item, index2) => {
                                          if (item.DisplayName === 'VG') {
                                            if (
                                              values.checkboxId === 'a_3VG_Plus'
                                            ) {
                                              return {
                                                ...item,
                                                classToggle: item.classToggle,
                                              };
                                            } else {
                                              return {
                                                ...item,
                                                classToggle: !item.classToggle,
                                              };
                                            }
                                          } else {
                                            return {
                                              ...item,
                                              classToggle: false,
                                            };
                                          }
                                        },
                                      ),
                                    polishList:
                                      diamondFilterData.polishList.map(
                                        (item, index2) => {
                                          if (item.DisplayName === 'VG') {
                                            if (
                                              values.checkboxId === 'a_3VG_Plus'
                                            ) {
                                              return {
                                                ...item,
                                                classToggle: item.classToggle,
                                              };
                                            } else {
                                              return {
                                                ...item,
                                                classToggle: !item.classToggle,
                                              };
                                            }
                                          } else {
                                            return {
                                              ...item,
                                              classToggle: false,
                                            };
                                          }
                                        },
                                      ),
                                  });
                                }}
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                label="3VG+"
                                id="a_3VG_Plus"
                                name="myCheckbox"
                                checked={values.checkboxId === 'a_3VG_Plus'}
                                onClick={() => {
                                  if (values.checkboxId === 'a_3VG_Plus') {
                                    setFieldValue('checkboxId', '');
                                    setFieldValue('cut', '');
                                    setFieldValue('polish', '');
                                    setFieldValue('symmetry', '');

                                    dispatch(
                                      setSearchDiamondSavedData({
                                        ...searchDiamondSavedData,
                                        cut: '',
                                        polish: '',
                                        symmetry: '',
                                      }),
                                    );
                                    dispatch(
                                      getTotalSearchDiamond({
                                        ...searchDiamondSavedData,
                                        cut: '',
                                        polish: '',
                                        symmetry: '',
                                        UserID: userData.UserID,
                                      }),
                                    );
                                  } else {
                                    setFieldValue('checkboxId', 'a_3VG_Plus');

                                    setFieldValue('cut', ['EX', 'VG', 'ID']);
                                    setFieldValue('polish', ['EX', 'VG', 'ID']);
                                    setFieldValue('symmetry', [
                                      'EX',
                                      'VG',
                                      'ID',
                                    ]);
                                    dispatch(
                                      setSearchDiamondSavedData({
                                        ...searchDiamondSavedData,
                                        cut: ['EX', 'VG', 'ID'].toString(),
                                        polish: ['EX', 'VG', 'ID'].toString(),
                                        symmetry: ['EX', 'VG', 'ID'].toString(),
                                      }),
                                    );
                                    dispatch(
                                      getTotalSearchDiamond({
                                        ...searchDiamondSavedData,
                                        cut: ['EX', 'VG', 'ID'].toString(),
                                        polish: ['EX', 'VG', 'ID'].toString(),
                                        UserID: userData.UserID,
                                        symmetry: ['EX', 'VG', 'ID'].toString(),
                                      }),
                                    );
                                  }
                                }}
                                onChange={() => {
                                  setDiamondFilterData({
                                    ...diamondFilterData,
                                    cutList: diamondFilterData.cutList.map(
                                      (item, index2) => {
                                        if (
                                          item.DisplayName === 'EX' ||
                                          item.DisplayName === 'VG' ||
                                          item.DisplayName === 'ID'
                                        ) {
                                          if (item.DisplayName === 'EX') {
                                            if (values.checkboxId === 'a_3EX') {
                                              return {
                                                ...item,
                                                classToggle: item.classToggle,
                                              };
                                            } else {
                                              return {
                                                ...item,
                                                classToggle: !item.classToggle,
                                              };
                                            }
                                          } else if (
                                            item.DisplayName === 'ID'
                                          ) {
                                            if (values.checkboxId === 'a_3EX') {
                                              return {
                                                ...item,
                                                classToggle: item.classToggle,
                                              };
                                            } else {
                                              return {
                                                ...item,
                                                classToggle: !item.classToggle,
                                              };
                                            }
                                          } else {
                                            if (values.checkboxId === 'a_3VG') {
                                              return {
                                                ...item,
                                                classToggle: item.classToggle,
                                              };
                                            } else {
                                              return {
                                                ...item,
                                                classToggle: !item.classToggle,
                                              };
                                            }
                                          }
                                        } else {
                                          return {
                                            ...item,
                                            classToggle: false,
                                          };
                                        }
                                      },
                                    ),
                                    symmetryList:
                                      diamondFilterData.symmetryList.map(
                                        (item, index2) => {
                                          if (
                                            item.DisplayName === 'EX' ||
                                            item.DisplayName === 'VG' ||
                                            item.DisplayName === 'ID'
                                          ) {
                                            if (item.DisplayName === 'EX') {
                                              if (
                                                values.checkboxId === 'a_3EX'
                                              ) {
                                                return {
                                                  ...item,
                                                  classToggle: item.classToggle,
                                                };
                                              } else {
                                                return {
                                                  ...item,
                                                  classToggle:
                                                    !item.classToggle,
                                                };
                                              }
                                            } else if (
                                              item.DisplayName === 'ID'
                                            ) {
                                              if (
                                                values.checkboxId === 'a_3EX'
                                              ) {
                                                return {
                                                  ...item,
                                                  classToggle: item.classToggle,
                                                };
                                              } else {
                                                return {
                                                  ...item,
                                                  classToggle:
                                                    !item.classToggle,
                                                };
                                              }
                                            } else {
                                              if (
                                                values.checkboxId === 'a_3VG'
                                              ) {
                                                return {
                                                  ...item,
                                                  classToggle: item.classToggle,
                                                };
                                              } else {
                                                return {
                                                  ...item,
                                                  classToggle:
                                                    !item.classToggle,
                                                };
                                              }
                                            }
                                          } else {
                                            return {
                                              ...item,
                                              classToggle: false,
                                            };
                                          }
                                        },
                                      ),
                                    polishList:
                                      diamondFilterData.polishList.map(
                                        (item, index2) => {
                                          if (
                                            item.DisplayName === 'EX' ||
                                            item.DisplayName === 'VG' ||
                                            item.DisplayName === 'ID'
                                          ) {
                                            if (item.DisplayName === 'EX') {
                                              if (
                                                values.checkboxId === 'a_3EX'
                                              ) {
                                                return {
                                                  ...item,
                                                  classToggle: item.classToggle,
                                                };
                                              } else {
                                                return {
                                                  ...item,
                                                  classToggle:
                                                    !item.classToggle,
                                                };
                                              }
                                            } else if (
                                              item.DisplayName === 'ID'
                                            ) {
                                              if (
                                                values.checkboxId === 'a_3EX'
                                              ) {
                                                return {
                                                  ...item,
                                                  classToggle: item.classToggle,
                                                };
                                              } else {
                                                return {
                                                  ...item,
                                                  classToggle:
                                                    !item.classToggle,
                                                };
                                              }
                                            } else {
                                              if (
                                                values.checkboxId === 'a_3VG'
                                              ) {
                                                return {
                                                  ...item,
                                                  classToggle: item.classToggle,
                                                };
                                              } else {
                                                return {
                                                  ...item,
                                                  classToggle:
                                                    !item.classToggle,
                                                };
                                              }
                                            }
                                          } else {
                                            return {
                                              ...item,
                                              classToggle: false,
                                            };
                                          }
                                        },
                                      ),
                                  });
                                }}
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="search_inner_wrap">
                    <div className="search_label">
                      <h6>Cut</h6>
                    </div>
                    <div className="search_content">
                      <div className="check_input_wraper">
                        <ul>
                          {diamondFilterData?.cutList?.map((item, index) => {
                            return (
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id={item.MasterTypeValue_Code}
                                    label={item.MasterTypeValue_Code}
                                    checked={item.classToggle}
                                    name="cut"
                                    onChange={e => {
                                      handleCutToggle(item.Display_Order);
                                      const { checked } = e.target;
                                      if (checked) {
                                        if (
                                          values.cut.includes(
                                            item.MasterTypeValue_Code,
                                          )
                                        ) {
                                          const newarr = values.cut.filter(
                                            item2 =>
                                              item2 !==
                                              item.MasterTypeValue_Code,
                                          );

                                          setFieldValue('cut', newarr);
                                          dispatch(
                                            setSearchDiamondSavedData({
                                              ...searchDiamondSavedData,
                                              cut: newarr?.toString(),
                                            }),
                                          );
                                          dispatch(
                                            getTotalSearchDiamond({
                                              ...searchDiamondSavedData,
                                              cut: newarr?.toString(),
                                              UserID: userData.UserID,
                                            }),
                                          );
                                        } else {
                                          setFieldValue('cut', [
                                            ...values.cut,
                                            item.MasterTypeValue_Code,
                                          ]);
                                          dispatch(
                                            setSearchDiamondSavedData({
                                              ...searchDiamondSavedData,
                                              cut: [
                                                ...values.cut,
                                                item.MasterTypeValue_Code,
                                              ].toString(),
                                            }),
                                          );
                                          dispatch(
                                            getTotalSearchDiamond({
                                              ...searchDiamondSavedData,
                                              cut: [
                                                ...values.cut,
                                                item.MasterTypeValue_Code,
                                              ].toString(),
                                              UserID: userData.UserID,
                                            }),
                                          );
                                        }
                                      } else {
                                        setFieldValue(
                                          'cut',
                                          values.cut.filter(
                                            v =>
                                              v !== item.MasterTypeValue_Code,
                                          ),
                                        );
                                        dispatch(
                                          setSearchDiamondSavedData({
                                            ...searchDiamondSavedData,
                                            cut: values.cut
                                              .filter(
                                                v =>
                                                  v !==
                                                  item.MasterTypeValue_Code,
                                              )
                                              .toString(),
                                          }),
                                        );
                                        dispatch(
                                          getTotalSearchDiamond({
                                            ...searchDiamondSavedData,
                                            cut: values.cut
                                              .filter(
                                                v =>
                                                  v !==
                                                  item.MasterTypeValue_Code,
                                              )
                                              .toString(),
                                            UserID: userData.UserID,
                                          }),
                                        );
                                      }
                                    }}
                                  />
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="search_inner_wrap">
                    <div className="search_label">
                      <h6>Polish</h6>
                    </div>
                    <div className="search_content">
                      <div className="check_input_wraper">
                        <ul>
                          {diamondFilterData?.polishList?.map((item, index) => {
                            return (
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id={item.MasterTypeValue_Code}
                                    label={item.MasterTypeValue_Code}
                                    checked={item.classToggle}
                                    name="polish"
                                    onChange={e => {
                                      handlePolishToggle(item.Display_Order);
                                      const { checked } = e.target;
                                      if (checked) {
                                        if (
                                          values.polish.includes(
                                            item.MasterTypeValue_Code,
                                          )
                                        ) {
                                          const newarr = values.polish.filter(
                                            item2 =>
                                              item2 !==
                                              item.MasterTypeValue_Code,
                                          );

                                          setFieldValue('polish', newarr);
                                          dispatch(
                                            setSearchDiamondSavedData({
                                              ...searchDiamondSavedData,
                                              polish: newarr?.toString(),
                                            }),
                                          );
                                          dispatch(
                                            getTotalSearchDiamond({
                                              ...searchDiamondSavedData,
                                              polish: newarr?.toString(),
                                              UserID: userData.UserID,
                                            }),
                                          );
                                        } else {
                                          setFieldValue('polish', [
                                            ...values.polish,
                                            item.MasterTypeValue_Code,
                                          ]);
                                          dispatch(
                                            setSearchDiamondSavedData({
                                              ...searchDiamondSavedData,
                                              polish: [
                                                ...values.polish,
                                                item.MasterTypeValue_Code,
                                              ].toString(),
                                            }),
                                          );
                                          dispatch(
                                            getTotalSearchDiamond({
                                              ...searchDiamondSavedData,
                                              polish: [
                                                ...values.polish,
                                                item.MasterTypeValue_Code,
                                              ].toString(),
                                              UserID: userData.UserID,
                                            }),
                                          );
                                        }
                                      } else {
                                        setFieldValue(
                                          'polish',
                                          values.polish.filter(
                                            v =>
                                              v !== item.MasterTypeValue_Code,
                                          ),
                                        );
                                        dispatch(
                                          setSearchDiamondSavedData({
                                            ...searchDiamondSavedData,
                                            polish: values.polish
                                              .filter(
                                                v =>
                                                  v !==
                                                  item.MasterTypeValue_Code,
                                              )
                                              .toString(),
                                          }),
                                        );
                                        dispatch(
                                          getTotalSearchDiamond({
                                            ...searchDiamondSavedData,
                                            polish: values.polish
                                              .filter(
                                                v =>
                                                  v !==
                                                  item.MasterTypeValue_Code,
                                              )
                                              .toString(),
                                            UserID: userData.UserID,
                                          }),
                                        );
                                      }
                                    }}
                                  />
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="search_inner_wrap">
                    <div className="search_label">
                      <h6>Symmetry</h6>
                    </div>
                    <div className="search_content">
                      <div className="check_input_wraper">
                        <ul>
                          {diamondFilterData?.symmetryList?.map(
                            (item, index) => {
                              return (
                                <li>
                                  <div className="checkbox_wrapper">
                                    <Form.Check
                                      type="checkbox"
                                      id={item.MasterTypeValue_Code}
                                      label={item.MasterTypeValue_Code}
                                      name="symmetry"
                                      checked={item.classToggle}
                                      onChange={e => {
                                        handleSymmetryToggle(
                                          item.Display_Order,
                                        );
                                        const { checked } = e.target;
                                        if (checked) {
                                          if (
                                            values.symmetry.includes(
                                              item.MasterTypeValue_Code,
                                            )
                                          ) {
                                            const newarr =
                                              values.symmetry.filter(
                                                item2 =>
                                                  item2 !==
                                                  item.MasterTypeValue_Code,
                                              );

                                            setFieldValue('symmetry', newarr);
                                            dispatch(
                                              setSearchDiamondSavedData({
                                                ...searchDiamondSavedData,
                                                symmetry: newarr?.toString(),
                                              }),
                                            );
                                            dispatch(
                                              getTotalSearchDiamond({
                                                ...searchDiamondSavedData,
                                                symmetry: newarr?.toString(),
                                                UserID: userData.UserID,
                                              }),
                                            );
                                          } else {
                                            setFieldValue('symmetry', [
                                              ...values.symmetry,
                                              item.MasterTypeValue_Code,
                                            ]);
                                          }
                                          dispatch(
                                            setSearchDiamondSavedData({
                                              ...searchDiamondSavedData,
                                              symmetry: [
                                                ...values.symmetry,
                                                item.MasterTypeValue_Code,
                                              ].toString(),
                                            }),
                                          );
                                          dispatch(
                                            getTotalSearchDiamond({
                                              ...searchDiamondSavedData,
                                              symmetry: [
                                                ...values.symmetry,
                                                item.MasterTypeValue_Code,
                                              ].toString(),
                                              UserID: userData.UserID,
                                            }),
                                          );
                                        } else {
                                          setFieldValue(
                                            'symmetry',
                                            values.symmetry.filter(
                                              v =>
                                                v !== item.MasterTypeValue_Code,
                                            ),
                                          );
                                          dispatch(
                                            setSearchDiamondSavedData({
                                              ...searchDiamondSavedData,
                                              symmetry: values.symmetry
                                                .filter(
                                                  v =>
                                                    v !==
                                                    item.MasterTypeValue_Code,
                                                )
                                                .toString(),
                                            }),
                                          );
                                          dispatch(
                                            getTotalSearchDiamond({
                                              ...searchDiamondSavedData,
                                              UserID: userData.UserID,
                                              symmetry: values.symmetry
                                                .filter(
                                                  v =>
                                                    v !==
                                                    item.MasterTypeValue_Code,
                                                )
                                                .toString(),
                                            }),
                                          );
                                        }
                                      }}
                                    />
                                  </div>
                                </li>
                              );
                            },
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="search_inner_wrap align-items-start">
                    <div className="search_label mt10">
                      <h6>Type</h6>
                    </div>
                    <div className="search_content">
                      <div className="check_input_wraper">
                        <ul>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Sapphire"
                                label="Sapphire"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Emerald"
                                label="Emerald"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Ruby"
                                label="Ruby"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Alexandrite"
                                label="Alexandrite"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Garnet"
                                label="Garnet"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Zircon"
                                label="Zircon"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Tourmaline"
                                label="Tourmaline"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Peridot"
                                label="Peridot"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Spinel"
                                label="Spinel"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Aquamarine"
                                label="Aquamarine"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Tanzanite"
                                label="Tanzanite"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Grandidierite"
                                label="Grandidierite"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Amethyst"
                                label="Amethyst"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Opal"
                                label="Opal"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Kunzite"
                                label="Kunzite"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Topaz"
                                label="Topaz"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Morganite"
                                label="Morganite"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Citrine"
                                label="Citrine"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Ametrine"
                                label="Ametrine"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Chrysoberyl"
                                label="Chrysoberyl"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Moonstone"
                                label="Moonstone"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Prehnite"
                                label="Prehnite"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Beryl"
                                label="Beryl"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Apatite"
                                label="Apatite"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Heliodor"
                                label="Heliodor"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Jade"
                                label="Jade"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Quartz"
                                label="Quartz"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Sodalite"
                                label="Sodalite"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Spectrolite"
                                label="Spectrolite"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Sphene"
                                label="Sphene"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Spine"
                                label="Spine"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Other"
                                label="Other"
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="search_inner_wrap">
                    <div className="search_label">
                      <h6>Lab</h6>
                    </div>
                    <div className="search_content">
                      <div className="check_input_wraper">
                        <ul>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="ICL"
                                label="ICL"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="GIA"
                                label="GIA"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="AGL"
                                label="AGL"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="GRS"
                                label="GRS"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="CDC"
                                label="CDC"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="AGS"
                                label="AGS"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="DSEF"
                                label="DSEF"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="EGL"
                                label="EGL"
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="search_inner_wrap align-items-start">
                    <div className="search_label mt10">
                      <h6>Treatment</h6>
                    </div>
                    <div className="search_content">
                      <div className="check_input_wraper">
                        <ul>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="None1"
                                label="None2"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Heating & Pressure"
                                label="Heating & Pressure"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Oiling"
                                label="Oiling"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Enhancement"
                                label="Enhancement"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Heating"
                                label="Heating"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Composite"
                                label="Composite"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Bleaching"
                                label="Bleaching"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Coating"
                                label="Coating"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Dyeing"
                                label="Dyeing"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Filling"
                                label="Filling"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Tanzanite1"
                                label="Tanzanite"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Irradiation"
                                label="Irradiation"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Impregnated"
                                label="Impregnated"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Diffusion"
                                label="Diffusion"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Lasering"
                                label="Lasering"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Imitation"
                                label="Imitation"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Morganite1"
                                label="Morganite"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Citrine1"
                                label="Citrine"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Ametrine1"
                                label="Ametrine"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Chrysoberyl1"
                                label="Chrysoberyl"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Moonstone1"
                                label="Moonstone"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Prehnite1"
                                label="Prehnite"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Waxing"
                                label="Waxing"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Other1"
                                label="Other"
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="search_inner_wrap align-items-start">
                    <div className="search_label mt10">
                      <h6>Origin</h6>
                    </div>
                    <div className="search_content">
                      <div className="check_input_wraper">
                        <ul>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Zambia"
                                label="Zambia"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Madagascar"
                                label="Madagascar"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Thailand"
                                label="Thailand"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Mozambique"
                                label="Mozambique"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Myanmar"
                                label="Myanmar"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="SriLanka"
                                label="Sri Lanka"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Brazil"
                                label="Brazil"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Australia"
                                label="Australia"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Ethiopia"
                                label="Ethiopia"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Tanzenia"
                                label="Tanzenia"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Greenland"
                                label="Greenland"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="India"
                                label="India"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Iran"
                                label="Iran"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Kenya"
                                label="Kenya"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Pakistan"
                                label="Pakistan"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Tajakistan"
                                label="Tajakistan"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Vietnam"
                                label="Vietnam"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Other"
                                label="Other"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Unknown"
                                label="Unknown"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="RestofAfrica"
                                label="Rest of Africa"
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}
              <div className="search_button_wrap pt30">
                <Button variant="outline-primary" className="rounded-pill mr20">
                  <img src={ResetIcon} alt="Reset" /> Reset Filter
                </Button>
                <Button variant="primary" className="rounded-pill">
                  Search
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
