import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
export const AuthContext = createContext(null);
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider 
} from "firebase/auth";
import app from "../Firebase";

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const GoogleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider()

  const [user, setUser] = useState("");
  console.log(user);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    signOut(auth);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, GoogleProvider);
  };
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    setUser,
    googleLogin,
    githubLogin
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
