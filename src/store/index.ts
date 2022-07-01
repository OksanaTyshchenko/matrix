import { legacy_createStore as createStore, AnyAction } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { X } from '../types';

const UPDATE_XARR = 'UPDATE_XARR';
const ADD_XARR = 'ADD_XARR';
const DELETE_ROW = 'DELETE_ROW';
const ADD_ROW = 'ADD_ROW';

export const actions = {
  addXArr: (xArr: X[][]) => ({
    type: ADD_XARR,
    xArr,
  }),
  updateXArr: (rowIndex: number, colIndex: number) => ({
    type: UPDATE_XARR,
    rowIndex,
    colIndex,
  }),
  deleteRow: (rowIndex: number) => ({
    type: DELETE_ROW,
    rowIndex,
  }),
  addRow: (row: X[]) => ({
    type: ADD_ROW,
    row,
  }),
};

export const selectors = {
  getXArr: (state: RootState) => state.xArr,
};

type RootState = {
  xArr: X[][];
};

const initialState: RootState = {
  xArr: [],
};

const rootReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_XARR: {
      return {
        ...state,
        xArr: action.xArr,
      };
    }

    case UPDATE_XARR: {
      const obj = { ...state.xArr[action.rowIndex][action.colIndex] };

      obj.amount += 1;
      const xArr = [...state.xArr];

      xArr[action.rowIndex][action.colIndex] = obj;

      return {
        ...state,
        xArr,
      };
    }

    case DELETE_ROW: {
      return {
        ...state,
        xArr: state.xArr.filter((arr, index) => index !== action.rowIndex),
      };
    }

    case ADD_ROW: {
      return {
        ...state,
        xArr: [...state.xArr, action.row],
      };
    }

    default:
      return state;
  }
};

const store = createStore(rootReducer, composeWithDevTools());

export default store;
