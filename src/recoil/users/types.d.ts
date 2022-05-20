import { Article } from "../../hooks/news/types";

interface UserInfo {
  uid: string;
  displayName: string;
  email: string;
  phoneNumber: string;
  photoURL: string;
  favorites?: Article[];
}
