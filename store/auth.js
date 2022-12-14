import React from "react";

export const authReducer = (prevState, action) => {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...prevState,
        userToken: action.token,
        isLogged: true,
        isLoading: false,
      };
    case "SIGN_IN":
      return {
        ...prevState,
        isLogged: true,
        isLoading: false,
        userToken: action.token,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        isLogged: false,
        isLoading: false,
        userToken: null,
      };
  }
};

export const authActions = (dispatch) => ({
  signIn: (token) => {
    dispatch({ type: "SIGN_IN", token });
  },
  signOut: () => dispatch({ type: "SIGN_OUT" }),
  signUp: (token) => {
    dispatch({ type: "SIGN_IN", token });
  },
});

export const AuthContext = React.createContext();
