import { atom } from "recoil";
import { SEARCH_KEY } from "./constants";

export const searchKeyState = atom<SearchState>({
  key: SEARCH_KEY, // unique ID (with respect to other atoms/selectors)
  default: {
    keyword: "",
  }, // default value (aka initial value)
});
