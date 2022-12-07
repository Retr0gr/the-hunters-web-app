import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/auth/login", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

export const logoffCall = async (dispatch) => {
  dispatch({ type: "LOGOFF_START" });
  try {
    const res = await axios.post("/auth/logoff");
    dispatch({ type: "LOGOFF_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGOFF_FAILURE", payload: err });
  }
};

