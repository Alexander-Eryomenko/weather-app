export const CHANGE_THEME = 'CHANGE_THEME';
export const SWITCH_MODAL = 'OPEN_MODAL';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export const changeTheme = (theme) => {
  return {
    type: CHANGE_THEME,
    theme
  };
};

export const switchModal = (switchValue) => {
  return {
    type: SWITCH_MODAL,
    switchValue
  };
};

export const changeLanguage = (language) => {
  return {
    type: CHANGE_LANGUAGE,
    language
  };
};
