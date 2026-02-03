import { sendMessage as apiSendMessage, sendEmail as apiSendEmail } from '../../services/api';

// Theme action - now uses context's setTheme directly
export const setTheme = ({ theme, dispatch }: { theme: string; dispatch: Function }) => {
  dispatch({ type: 'SET_THEME', theme });
};

// Message action - now calls API directly
export const saveMessage = async ({ message, dispatch }: {
  message: { username: string; userMail: string; message: string };
  dispatch: Function;
}): Promise<boolean> => {
  try {
    const success = await apiSendMessage(message);
    if (success) {
      dispatch({ type: 'SAVE_MESSAGE' });
    } else {
      dispatch({ type: 'SET_ERROR', error: 'Failed to send message' });
    }
    return success;
  } catch (error) {
    dispatch({ type: 'SET_ERROR', error });
    return false;
  }
};

// Email action - now calls API directly
export const saveEmail = async ({ email, dispatch }: {
  email: string;
  dispatch: Function;
}): Promise<boolean> => {
  try {
    const success = await apiSendEmail(email);
    if (success) {
      dispatch({ type: 'SAVE_EMAIL' });
    } else {
      dispatch({ type: 'SET_ERROR', error: 'Failed to save email' });
    }
    return success;
  } catch (error) {
    dispatch({ type: 'SET_ERROR', error });
    return false;
  }
};

export default setTheme;
