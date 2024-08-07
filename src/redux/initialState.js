import { defaultStyles, defaultTitle } from '../constants';
import { clone } from '../core/utils';

const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {}, // {'0:1': 'text'}
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyles,
  openedDate: new Date().toJSON(),
};

const normalyze = (state) => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: '',
})

export function normalyzeInitialState(state) {
  return state ? normalyze(state) : clone(defaultState);
}
