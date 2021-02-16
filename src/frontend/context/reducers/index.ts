const reducer = (state: any, payload: any) => {
  switch (payload.type) {
    case 'SAVE_MESSAGE': return state;
    case 'SAVE_EMAIL': return state;
    case 'SET_THEME':
      return {
        ...state,
        theme: payload.theme,
      };
    default: return state;
  }
};

export default reducer;
