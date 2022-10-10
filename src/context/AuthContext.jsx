import { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import { doc, setDoc } from 'firebase/firestore';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
    const data = doc(db, 'users', email);
    return setDoc(
      data,
      {
        watchList: [],
      },
      { merge: true }
    );
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const response = await signInWithPopup(auth, provider);
    const email = response.user.email;
    const data = doc(db, 'users', email);
    return setDoc(
      data,
      {
        watchList: [],
      },
      { merge: true }
    );
  };
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{ signUp, signIn, logOut, user, googleSignIn }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
