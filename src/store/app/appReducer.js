import {
  CHANGE_THEME,
  SWITCH_MODAL,
  CHANGE_LANGUAGE
} from './actions';

import { LOCALES } from '../../i18n/locales';

const initialData = {
  theme: 'light',
  switchModal: false,
  language: LOCALES.ENGLISH
};

export const appReducer = (state = initialData, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.theme
      };
      case SWITCH_MODAL:
        return {
          ...state,
          switchModal: action.switchValue
        };
      case CHANGE_LANGUAGE:
        return {
          ...state,
          language: action.language
        };
  default:
    return state;
  }
};
