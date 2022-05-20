import { getApp, initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from "firebase/auth";
import { getDoc, getFirestore } from "firebase/firestore";
import {
  collection,
  doc,
  addDoc,
  Timestamp,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { UserInfo } from "../recoil/users/types";

const firebaseConfig = {
  apiKey: "AIzaSyB1PN-4xMhQAMeFO4ByCEE2L9mUfqJFJkI",
  authDomain: "news-project-b43fd.firebaseapp.com",
  projectId: "news-project-b43fd",
  storageBucket: "news-project-b43fd.appspot.com",
  messagingSenderId: "796968690859",
  appId: "1:796968690859:web:fa90e54e6a2d6269f9c3ee",
  measurementId: "G-BS7WNJ5V74",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async (): Promise<UserInfo> => {
  let userInform: UserInfo = {
    uid: "",
    displayName: "",
    email: "",
    phoneNumber: "",
    photoURL: "",
    favorites: [],
  };

  await signInWithPopup(auth, provider)
    .then(async (result) => {
      const userRef = await doc(db, "users", result.user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        const userRef = await setDoc(doc(db, "users", result.user.uid), {
          uid: result.user.uid,
          displayName: result.user.displayName,
          email: result.user.email,
          phoneNumber: result.user.phoneNumber,
          photoURL: result.user.photoURL,
          favorites: JSON.stringify([]),
        });

        userInform = {
          ...userInform,
          uid: result.user.uid,
          displayName: result.user.displayName!,
          email: result.user.email!,
          phoneNumber: result.user.phoneNumber!,
          photoURL: result.user.photoURL!,
        };
      } else {
        const data = userSnap.data();
        userInform = {
          uid: data.uid,
          displayName: data.displayName,
          email: data.email,
          phoneNumber: data.phoneNumber,
          photoURL: data.photoURL,
          favorites: JSON.parse(data.favorites),
        };
      }
    })
    .catch((error) => {
      console.log(error);
    });

  return userInform!;
};
