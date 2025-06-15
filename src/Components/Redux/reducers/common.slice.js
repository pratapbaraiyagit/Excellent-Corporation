import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  message: '',
  showMessage: false,
  varient: 'success',
  diamondDetailListLoading: false,
  diamondDetailList: [],
};

export const getDiamondDetailList = createAsyncThunk(
  'searchDiamondList',
  () => {
    return new Promise((resolve, reject) => {
      const obj = {
        UserID: 0,
      };
      axios
        .post('stock-search-diamond', obj)
        .then(({ data }) => {
          resolve({ data: data.Result });
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },
);

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    showMessage: (state, action) => {
      state.message = action.payload.message;
      state.varient = action.payload.varient;
      state.showMessage = true;
    },
    hideMessage: (state, action) => {
      state.showMessage = false;
    },
  },
  extraReducers: {
    [getDiamondDetailList.pending]: (state, action) => {
      state.diamondDetailListLoading = true;
    },
    [getDiamondDetailList.rejected]: (state, action) => {
      state.diamondDetailList = [];
      state.diamondDetailListLoading = false;
    },
    [getDiamondDetailList.fulfilled]: (state, action) => {
      let finalShapeList = action.payload.data.shape.map(item => {
        let finalObj = {};
        finalObj = { ...item, classToggle: false };
        return finalObj;
      });
      let finalCaratSizeList = action.payload.data.caretSizeList.map(item => {
        let finalObj = {};
        finalObj = { ...item, classToggle: false };
        return finalObj;
      });
      let finalClarityList = action.payload.data.clarity.map(item => {
        let finalObj = {};
        finalObj = { ...item, classToggle: false };
        return finalObj;
      });
      let finalTingeList = action.payload.data.tinge.map(item => {
        let finalObj = {};
        finalObj = { ...item, classToggle: false };
        return finalObj;
      });
      let finalCutList = action.payload.data.cut.map(item => {
        let finalObj = {};
        finalObj = { ...item, classToggle: false };
        return finalObj;
      });
      let finalcolorWhiteList = action.payload.data.color.map(item => {
        let finalObj = {};
        finalObj = { ...item, classToggle: false };
        return finalObj;
      });
      let finalPolishList = action.payload.data.polish.map(item => {
        let finalObj = {};
        finalObj = { ...item, classToggle: false };
        return finalObj;
      });
      let finaSymmetryList = action.payload.data.symmetry.map(item => {
        let finalObj = {};
        finalObj = { ...item, classToggle: false };
        return finalObj;
      });
      let finaLabList = action.payload.data.lab.map(item => {
        let finalObj = {};
        finalObj = { ...item, classToggle: false };
        return finalObj;
      });
      let finaFluorescenceList = action.payload.data.fluroint.map(item => {
        let finalObj = {};
        finalObj = { ...item, classToggle: false };
        return finalObj;
      });
      let finaHnaList = action.payload.data.hna.map(item => {
        let finalObj = {
          value: item.MasterTypeValue_Code,
          label: item.MasterTypeValue_Code,
        };

        return finalObj;
      });
      let finaLocationList = action.payload.data.location.map(item => {
        let finalObj = {
          value: item.MasterTypeValue_Code,
          label: item.MasterTypeValue_Code,
        };

        return finalObj;
      });
      let finaFancyColorList = action.payload.data.fc.map(item => {
        let finalObj = {
          value: item.MasterTypeValue_Code,
          label: item.MasterTypeValue_Code,
        };

        return finalObj;
      });
      let finaFancyIntensityList = action.payload.data.fcintese.map(item => {
        let finalObj = {
          value: item.MasterTypeValue_Code,
          label: item.MasterTypeValue_Code,
        };

        return finalObj;
      });
      let finaFancyOvertoneList = action.payload.data.fcoverton.map(item => {
        let finalObj = {
          value: item.MasterTypeValue_Code,
          label: item.MasterTypeValue_Code,
        };

        return finalObj;
      });
      let finaGirdleConditionList = action.payload.data.girdlecon.map(item => {
        let finalObj = {};
        finalObj = { ...item, classToggle: false };
        return finalObj;
      });
      let finaGirdleList = action.payload.data.girdle.map(item => {
        let finalObj = {};
        finalObj = { ...item, classToggle: false };
        return finalObj;
      });
      let finaGirdleThickList = action.payload.data.girdle.map(item => {
        let finalObj = {};
        finalObj = { ...item, classToggle: false };
        return finalObj;
      });
      let finaCuletConditionList = action.payload.data.culcondi.map(item => {
        let finalObj = {};
        finalObj = { ...item, classToggle: false };
        return finalObj;
      });
      let finaCuletSizeList = action.payload.data.culsize.map(item => {
        let finalObj = {};
        finalObj = { ...item, classToggle: false };
        return finalObj;
      });
      let finaMilkyList = action.payload.data.milky.map(item => {
        let finalObj = {};
        finalObj = { ...item, classToggle: false };
        return finalObj;
      });
      let finalShadeList = action.payload.data.shade.map(item => {
        let finalObj = {};
        finalObj = { ...item, classToggle: false };
        return finalObj;
      });
      let finalEyeCleanList = action.payload.data.eyeclean.map(item => {
        let finalObj = {};
        finalObj = { ...item, classToggle: false };
        return finalObj;
      });
      // let finalTreatmentList = action.payload.data.treatment.map(
      //   (item) => {
      //     let finalObj = {};
      //     finalObj = { ...item, classToggle: false };
      //     return finalObj;
      //   }
      // );
      let finalGrowthTypeList = action.payload.data.treatment.map(item => {
        let finalObj = {};
        finalObj = { ...item, classToggle: false };
        return finalObj;
      });
      // state.eyecleanList = finalEyeCleanList;
      state.diamondDetailList = action.payload.data;
      state.diamondFilterDetail = {
        shapeList: finalShapeList,
        caratSizeList: finalCaratSizeList,
        clarityList: finalClarityList,
        tingeList: finalTingeList,
        cutList: finalCutList,
        colorWhiteList: finalcolorWhiteList,
        polishList: finalPolishList,
        symmetryList: finaSymmetryList,
        labList: finaLabList,
        fluorescenceList: finaFluorescenceList,
        hnaList: finaHnaList,
        locationList: finaLocationList,
        fancycolorList: finaFancyColorList,
        fancyintensityList: finaFancyIntensityList,
        fancyovertonList: finaFancyOvertoneList,
        gridleConditionList: finaGirdleConditionList,
        gridleList: finaGirdleList,
        gridleThickList: finaGirdleThickList,
        culetConditionList: finaCuletConditionList,
        culetSizeList: finaCuletSizeList,
        milkyList: finaMilkyList,
        shadeList: finalShadeList,
        eyecleanList: finalEyeCleanList,
        // treatmentList: finalTreatmentList,
        growthTypeList: finalGrowthTypeList,
      };
      state.diamondDetailListLoading = false;
    },
  },
});

export const { showMessage, hideMessage } = commonSlice.actions;
export default commonSlice.reducer;
