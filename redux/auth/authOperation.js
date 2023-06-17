import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { db, auth } from "../../firebase/config";

export const authSignUpUser =
  ({ email, password, login }) =>
  async (dispatch, getState) => {
    console.log("it is auth sign up");
    console.log("email, password, login", email, password, login);
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log("user", user);
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
