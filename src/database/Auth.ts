import { auth } from "../firebase/firebaseconfig";

export const LoginWithEmail = async (eMail: string, password: string) => {
  return await auth.signInWithEmailAndPassword(eMail, password);
};
