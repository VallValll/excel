import { defaultStyles, defaultTitle } from '../constants';
import { storage } from '../core/utils';

const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {}, // {'0:1': 'text'}
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyles,
};

// const normalyze = (state) => ({
//   ...state,
//   currentStyles: defaultStyles,
//   currentText: '',
// })

export const initialState = storage('excel-state')
  ? storage('excel-state')
  : defaultState;
