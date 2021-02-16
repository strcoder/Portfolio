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
    await axios({
      url: '/api/message',
      method: 'post',
      data: message,
    }).then(({ data }) => {
      dispatch({ type: 'SAVE_MESSAGE' });
    }).catch((error) => {
      dispatch({ type: 'SET_ERROR', error });
    });
  } catch (error) {
    dispatch({ type: 'SET_ERROR', error });
  }
};

export const saveEmail = async ({ email, dispatch }: any) => {
  try {
    await axios({
      url: '/api/mail',
      method: 'post',
      data: {
        email,
      },
    }).then(({ data }) => {
      dispatch({ type: 'SAVE_EMAIL' });
    }).catch((error) => {
      dispatch({ type: 'SET_ERROR', error });
    });
  } catch (error) {
    dispatch({ type: 'SET_ERROR', error });
  }
};

export default setTheme;
