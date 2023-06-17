import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

import { db, auth } from "../../firebase/config";
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

      //   const { uid, displayName } = auth.currentUser;
      //   console.log("uid, displayname", uid, displayName);
      dispatch(
        authSlice.actions.updateUserProfile({
          userId: uid,
          login: displayName,
        })
      );
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
    console.log("user change", user);
    setUser(user);
    // if (user) {
    //   // User is signed in, see docs for a list of available properties
    //   // https://firebase.google.com/docs/reference/js/auth.user
    //   const uid = user.uid;
    //   // ...
    // } else {
    //   // User is signed out
    //   // ...
    // }
  });
};
