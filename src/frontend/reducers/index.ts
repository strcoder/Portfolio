import axios from 'axios';

const setStorage = (key: string, value: string) => {
  axios({
    url: `/${key}`,
    method: 'post',
    data: {
      theme: value,
    },
  }).then((result) => {
  }).catch((error) => {
    console.log(error);
  });
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
    case 'REGISTER_REQUEST':
    case 'SET_THEME':
      setStorage('theme', action.theme);
      return {
        ...state,
        theme: action.theme,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
