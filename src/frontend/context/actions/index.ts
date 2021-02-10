export const setTheme = async ({ theme, dispatch }: any) => {
  try {
    document.cookie = `theme=${theme}`;
    dispatch({ type: 'SET_THEME', theme });
  } catch (error) {
    dispatch({ type: 'SET_ERROR', error });
  }
};

export default setTheme;
