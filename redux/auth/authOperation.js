import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

import { auth } from "../../firebase/config";
import { authSlice } from "./authReducer";

export const authSignUpUser =
  ({ email, password, login }) =>
  async (dispatch, getState) => {
    try {
      console.log(" it is authSignUpUser operation");
      await createUserWithEmailAndPassword(auth, email, password);

      const user = auth.currentUser;
      console.log(" user", user);

      // user.updateProfile({ displayName: login });

      if (user) {
        // оновлюємо його профайл
        try {
          await updateProfile(user, { displayName: login });
        } catch (error) {
          console.log("error in update", error.message);
          //  throw error;
        }
      }
      const { uid, displayName } = auth.currentUser;

      const userUpdateProfile = {
        userId: uid,
        login: displayName,
      };

      dispatch(authSlice.actions.updateUserProfile(userUpdateProfile));
    } catch (error) {
      console.log("error", error);
      console.lof("error.message", error.message);
    }
  };

export const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    console.log("it is auth sign in");
    console.log("email, password, nickname", { email, password });
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log("user", user);
    } catch (error) {
      console.log("error", error);
      console.lof("error.message", error.message);
    }
  };

export const authSignOutUser = () => async (dispatch, getState) => {};

export const authStateChangeUser = () => async (dispatch, getState) => {
  await onAuthStateChanged(auth, (user) => {
    if (user) {
      const userUpdateProfile = {
        userId: user.uid,
        login: user.displayName,
      };

      dispatch(authSlice.actions.updateUserProfile(userUpdateProfile));
      dispatch(authSlice.actions.authStateChange(true));
    } else {
      // User is signed out
      // ...
    }
  });
};
