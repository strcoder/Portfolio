import axios from 'axios';

export const setTheme = async ({ theme, dispatch }: any) => {
  try {
    document.cookie = `theme=${theme}`;
    dispatch({ type: 'SET_THEME', theme });
  } catch (error) {
    dispatch({ type: 'SET_ERROR', error });
  }
};

export const saveMessage = async ({ message, dispatch }: any) => {
  try {
    const response = await axios({
      url: '/api/message',
      method: 'post',
      data: message,
    }).then(({ data }) => {
      dispatch({ type: 'SAVE_MESSAGE' });
      return true;
    }).catch((error) => {
      dispatch({ type: 'SET_ERROR', error });
      return false;
    });
    return response;
  } catch (error) {
    dispatch({ type: 'SET_ERROR', error });
    return false;
  }
};

export const saveEmail = async ({ email, dispatch }: any) => {
  try {
    const response = await axios({
      url: '/api/mail',
      method: 'post',
      data: {
        email,
      },
    }).then(({ data }) => {
      dispatch({ type: 'SAVE_EMAIL' });
      return true;
    }).catch((error) => {
      dispatch({ type: 'SET_ERROR', error });
      return false;
    });
    return response;
  } catch (error) {
    dispatch({ type: 'SET_ERROR', error });
    return false;
  }
};

export default setTheme;
