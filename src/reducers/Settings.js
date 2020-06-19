import {
  SWITCH_LANGUAGE,
} from 'constants/ActionTypes';

const initialSettings = {
  navCollapsed: false,
  locale: {
    languageId: 'english',
    locale: 'en',
    name: 'English',
    icon: 'us'
  }
};

const settings = (state = initialSettings, action) => {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
      return {
        ...state,
        navCollapsed: false
      };
    
    case SWITCH_LANGUAGE:
      return {
        ...state,
        locale: action.payload
      };
    
    default:
      return state;
  }
};

export default settings;
