import { atom } from "recoil";
import { USER_INFO_KEY } from "./constants";
import { UserInfo } from "./types";

export const userState = atom<UserInfo>({
  key: USER_INFO_KEY, // unique ID (with respect to other atoms/selectors)
  default: {
    uid: "",
    displayName: "",
    email: "",
    phoneNumber: "",
    photoURL: "",
    favorites: [],
  }, // default value (aka initial value)
});
