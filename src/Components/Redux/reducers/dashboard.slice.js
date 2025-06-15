import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Domain } from '../../../Helper/CommonHelper';

const initialState = {
  countryList: [],
  locationLoader: false,
  stateList: [],
  seavedSearchLoading: false,
  searchDiamondSavedData: [],
  SeavedSearchList: [],
  isColorType: 1,
  totalCountSearchDiamond: 0,
  totalSearchDiamondLoading: false,
  isRemoveFromSearchTemplateList: false,
  isClearSelection: false,
};

export const getCountryList = createAsyncThunk('countryList', data => {
  return new Promise((resolve, reject) => {
    axios
      .post('get-country-list')
      .then(({ data }) => {
        resolve({ data: data.Result });
      })
      .catch(errors => {
        reject(errors);
      });
  });
});
export const getStateList = createAsyncThunk('stateList', data => {
  return new Promise((resolve, reject) => {
    const obj = {
      CountryID: data.CountryID,
    };
    axios
      .post(
        `get-state-list?${obj.CountryID ? `CountryID=${obj.CountryID}` : ''}`,
      )
      .then(({ data }) => {
        resolve({ data: data.Result });
      })
      .catch(errors => {
        reject(errors);
      });
  });
});
export const getCityList = createAsyncThunk('cityList', data => {
  return new Promise((resolve, reject) => {
    const obj = {
      CountryID: data.CountryID,
      StateID: data.StateID,
    };
    axios
      .post(
        `get-city-list?${
          obj.CountryID
            ? `CountryID=${obj.CountryID}&StateID=${obj.StateID}`
            : ''
        }`,
      )
      .then(({ data }) => {
        resolve({ data: data.Result });
      })
      .catch(errors => {
        reject(errors);
      });
  });
});
export const getSeavedSearchList = createAsyncThunk(
  'seavedsearchlist',
  data => {
    return new Promise((resolve, reject) => {
      const obj = {
        UserID: data.UserID,
      };
      axios
        .post('get-saved-search-template-list', obj)
        .then(({ data }) => {
          resolve({ data: data.Result });
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },
);
export const getTotalSearchDiamond = createAsyncThunk(
  'getTotalSearchDiamondList',
  data => {
    return new Promise((resolve, reject) => {
      let newFinalObject = {};
      newFinalObject.SaveSearchID = data.saveSearchId ? data.saveSearchId : 0;
      newFinalObject.IsQuickSearch = data.IsQuickSearch
        ? data.IsQuickSearch
        : false;
      newFinalObject.DomainName = data.domainName ? data.domainName : Domain;
      newFinalObject.Shape = data.shape ? data.shape : '';
      newFinalObject.SearchName = data.SearchName ? data.SearchName : '';
      newFinalObject.IsFancyShape = data.IsFancyShape
        ? data.IsFancyShape
        : false;
      newFinalObject.CaratsizeIds = data.caratSizeIds
        ? data.caratSizeIds
        : '0-500';
      newFinalObject.Culetsize = data.culetSize ? data.culetSize : '';
      newFinalObject.Culetcondition = data.culetCondition
        ? data.culetCondition
        : '';
      newFinalObject.Clarity = data.clarity ? data.clarity : '';
      newFinalObject.CrAngelF = data.crownAngleFrom ? data.crownAngleFrom : '';
      newFinalObject.CrAngelT = data.crownAngleTo ? data.crownAngleTo : '';

      newFinalObject.CustomerId = data.UserID ? data.UserID : 0;
      newFinalObject.CaretFilterType = data.caretFilterType
        ? data.caretFilterType
        : 0;
      newFinalObject.ColorType = data.colorType ? data.colorType : 1;
      newFinalObject.Color = data.whiteColor ? data.whiteColor : '';
      newFinalObject.FCColor = data.fancyColor ? data.fancyColor : '';
      newFinalObject.FCItens = data.fancyIntensity ? data.fancyIntensity : '';
      newFinalObject.FCOverton = data.fancyOvertone ? data.fancyOvertone : '';

      newFinalObject.Cut = data.cut ? data.cut : '';
      newFinalObject.Polish = data.polish ? data.polish : '';
      newFinalObject.Symm = data.symmetry ? data.symmetry : '';
      newFinalObject.FluroIntent = data.fluorescence ? data.fluorescence : '';
      newFinalObject.Tinge = data.tinge ? data.tinge : '';
      newFinalObject.Lab = data.lab ? data.lab : '';
      newFinalObject.FluroColor = data.fluroColor ? data.fluroColor : '';
      newFinalObject.Location = data.location ? data.location : '';
      newFinalObject.PriceFrom = data.priceFrom ? data.priceFrom : 0;
      newFinalObject.PriceTo = data.priceTo ? data.priceTo : 0;
      newFinalObject.DiscFrom = data.discountFrom ? data.discountFrom : 0;
      newFinalObject.DiscTo = data.discountTo ? data.discountTo : 0;
      newFinalObject.TableFrom = data.tableFrom ? data.tableFrom : '';
      newFinalObject.TableTo = data.tableTo ? data.tableTo : '';
      newFinalObject.TableDepthF = data.tableDepthF ? data.tableDepthF : '';
      newFinalObject.TableDepthT = data.tableDepthT ? data.tableDepthT : '';
      newFinalObject.PavAngelF = data.pavilionAngleFrom
        ? data.pavilionAngleFrom
        : '';
      newFinalObject.PavAngelT = data.pavilionAngleTo
        ? data.pavilionAngleTo
        : '';
      newFinalObject.PavHeightF = data.pavilionDepthFrom
        ? data.pavilionDepthFrom
        : '';
      newFinalObject.PavHeightT = data.pavilionDepthTo
        ? data.pavilionDepthTo
        : '';
      newFinalObject.StarLenF = data.starLengthFrom ? data.starLengthFrom : '';
      newFinalObject.StarLenT = data.starLengthTo ? data.starLengthTo : '';
      newFinalObject.LowerHalveF = data.lowerHalfFrom ? data.lowerHalfFrom : '';
      newFinalObject.LowerHalveT = data.lowerHalfTo ? data.lowerHalfTo : '';
      newFinalObject.GirdlePerFrom = data.girdlePerFrom
        ? data.girdlePerFrom
        : '';
      newFinalObject.GirdlePerTo = data.girdlePerTo ? data.girdlePerTo : '';
      newFinalObject.CentralInclusion = '';
      newFinalObject.Milkey = data.milky ? data.milky : '';
      newFinalObject.EyeClean = data.eyeClean ? data.eyeClean : '';
      newFinalObject.HNA = data.hna ? data.hna : '';
      newFinalObject.SortingFilter = data.sortingFilter
        ? data.sortingFilter
        : '';
      newFinalObject.BIS = '';
      newFinalObject.BIC = '';
      newFinalObject.WIS = '';
      newFinalObject.WIC = '';
      newFinalObject.LengthFrom = data.lengthFrom ? data.lengthFrom : '';
      newFinalObject.LengthTo = data.lengthTo ? data.lengthTo : '';
      newFinalObject.WidthFrom = data.widthFrom ? data.widthFrom : '';
      newFinalObject.WidthT = data.widthTo ? data.widthTo : '';
      newFinalObject.DepthFrom = data.depthFrom ? data.depthFrom : '';
      newFinalObject.DepthTo = data.depthTo ? data.depthTo : '';
      newFinalObject.Keytosymbol = data.keytoSymbols ? data.keytoSymbols : '';
      // newFinalObject.Treatment = data.treatment ? data.treatment : "";
      newFinalObject.Growth_Type = data.growthType ? data.growthType : '';
      newFinalObject.Girdlecondition = data.girdleCondition
        ? data.girdleCondition
        : '';
      newFinalObject.Shade = data.shade ? data.shade : '';
      newFinalObject.GirdleFrom = data.girdleFrom ? data.girdleFrom : '';
      newFinalObject.GirdleTo = data.girdleTo ? data.girdleTo : '';
      newFinalObject.GirdleThin = data.girdleThin ? data.girdleThin : '';
      newFinalObject.GirdleThick = data.girdleThick ? data.girdleThick : '';
      newFinalObject.IsNewArrival = data.IsNewArrival
        ? data.IsNewArrival
        : false;
      newFinalObject.IsPriceReviced = data.IsPriceReviced
        ? data.IsPriceReviced
        : false;
      newFinalObject.inStartIndex = data.inStartIndex ? data.inStartIndex : 0;
      newFinalObject.inEndIndex = data.inEndIndex ? data.inEndIndex : 0;
      newFinalObject.TabID = data.tabID ? data.tabID : 0;
      newFinalObject.PageSize = data.pageSize ? data.pageSize : 100;
      newFinalObject.PageNum = data.pagenum ? data.pagenum : 0;
      newFinalObject.SellerId = data.sellerId ? data.sellerId : 0;
      newFinalObject.Luster = data.luster ? data.luster : '';
      newFinalObject.RatioF = data.ratioFrom ? data.ratioFrom : '';
      newFinalObject.RatioT = data.ratioTo ? data.ratioTo : '';
      newFinalObject.BlackInclusion = data.blackInclusion
        ? data.blackInclusion
        : '';
      newFinalObject.CrownHeightF = data.crownHeightFrom
        ? data.crownHeightFrom
        : '';
      newFinalObject.CrownHeightT = data.crownHeightTo
        ? data.crownHeightTo
        : '';
      newFinalObject.BackEndClientId = data.backEndClientId
        ? data.backEndClientId
        : 0;

      newFinalObject.OrderByType = data.orderByType ? data.orderByType : '';
      newFinalObject.StoneNos = data.stoneNos ? data.stoneNos : '';
      newFinalObject.StockStatus = data.StockStatus ? data.StockStatus : '';
      newFinalObject.RatioF = data.ratioFrom ? data.ratioFrom : '';
      newFinalObject.RatioT = data.ratioTo ? data.ratioTo : '';
      axios
        .post('get-search-stock-count', newFinalObject)
        .then(({ data }) => {
          resolve({ data: data.Result });
          // if (data.Result === 0) {
          //   dispatch(showMessage({ message: "Data Not Found" }));
          //   reject(data);
          // } else {
          // }
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },
);
export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setIsFancyColor: (state, action) => {
      state.isColorType = action.payload;
    },
    setIsRemoveFromSearchTemplateList: (state, action) => {
      state.isRemoveFromSearchTemplateList = action.payload;
    },
    setIsClearSelection: (state, action) => {
      state.isClearSelection = action.payload;
    },
    setSearchDiamondSavedData: (state, action) => {
      state.searchDiamondSavedData = action.payload;
    },
  },
  extraReducers: {
    [getCountryList.pending]: (state, action) => {
      state.countryList = [];
      state.locationLoader = true;
    },
    [getCountryList.rejected]: (state, action) => {
      state.countryList = [];
      state.locationLoader = false;
    },
    [getCountryList.fulfilled]: (state, action) => {
      state.countryList = action.payload.data;
      state.locationLoader = false;
    },
    [getStateList.pending]: (state, action) => {
      state.stateList = [];
      state.locationLoader = true;
    },
    [getStateList.rejected]: (state, action) => {
      state.stateList = [];
      state.locationLoader = false;
    },
    [getStateList.fulfilled]: (state, action) => {
      state.stateList = action.payload.data;
      state.locationLoader = false;
    },
    [getCityList.pending]: (state, action) => {
      state.cityList = [];
      state.locationLoader = true;
    },
    [getCityList.rejected]: (state, action) => {
      state.cityList = [];
      state.locationLoader = false;
    },
    [getCityList.fulfilled]: (state, action) => {
      state.cityList = action.payload.data;
      state.locationLoader = false;
    },
    [getSeavedSearchList.pending]: (state, action) => {
      state.seavedSearchLoading = true;
      state.SeavedSearchList = [];
    },
    [getSeavedSearchList.fulfilled]: (state, action) => {
      state.seavedSearchLoading = false;
      state.SeavedSearchList = action.payload.data;
    },
    [getSeavedSearchList.rejected]: (state, action) => {
      state.seavedSearchLoading = false;
      state.SeavedSearchList = [];
    },
    [getTotalSearchDiamond.pending]: (state, action) => {
      state.totalSearchDiamondLoading = true;
    },
    [getTotalSearchDiamond.fulfilled]: (state, action) => {
      state.totalSearchDiamondLoading = false;
      state.totalCountSearchDiamond = action.payload.data;
    },
    [getTotalSearchDiamond.rejected]: (state, action) => {
      state.totalSearchDiamondLoading = false;
      state.totalCountSearchDiamond = 0;
    },
  },
});
export const {
  setIsRemoveFromSearchTemplateList,
  setIsClearSelection,
  setIsFancyColor,
  setSearchDiamondSavedData,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
