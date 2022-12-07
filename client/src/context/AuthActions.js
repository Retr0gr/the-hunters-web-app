export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const Follow = (userId) => ({
  type: "FOLLOW",
  payload: userId,
});

export const Unfollow = (userId) => ({
  type: "UNFOLLOW",
  payload: userId,
});

//LOGOFF
export const LogoffStart = (userCredentials) => ({
  type: "LOGOFF_START",
});

export const LogoffSuccess = (user) => ({
  type: "LOGOFF_SUCCESS",
  payload: user,
});

export const LogoffFailure = () => ({
  type: "LOGOFF_FAILURE",
});



