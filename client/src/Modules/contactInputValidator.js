import * as emailValidator from "email-validator";
import { ACTION_TYPES } from "../Components/Contact/Contact";
const inputValidator = (inputState, dispatch) => {
  const { name, email, subject, message } = inputState;

  if (!name.trim()) {
    dispatch({
      type: ACTION_TYPES.errorInName,
      payload: "Please enter a name",
    });
    return false;
  }
  if (!email.trim() || !emailValidator.validate(email)) {
    dispatch({
      type: ACTION_TYPES.errorInEmail,
      payload: "Please verify your email address",
    });
    return false;
  }
  if (!subject.trim()) {
    dispatch({
      type: ACTION_TYPES.errorInSubject,
      payload: "Please enter a subject",
    });
    return false;
  }
  if (!message.trim() || message.length < 5) {
    dispatch({
      type: ACTION_TYPES.errorInMessage,
      payload: "Message too short",
    });
    return false;
  }
  return true;
};

export default inputValidator;
