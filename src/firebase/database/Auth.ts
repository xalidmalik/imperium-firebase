import { db } from './../firebaseconfig';
import { auth } from "../firebaseconfig";

export const LoginWithEmail = async (eMail: string, password: string) => {
  const result = await auth.signInWithEmailAndPassword(eMail, password);
  return result.user;
  // const result = auth.onAuthStateChanged(async user => {
  //   if (user) {
  //     const userRef = await createUserProfileDocument(user)
  //     if (userRef) {
  //       const data = await userRef.onSnapshot(snap => { snap.data() })
  //       console.log("wadawdawdawdd", data);
  //       return data
  //     }
  //   }
  // })

};

const createUserProfileDocument = async (userAuth, someData?) => {
  if (!userAuth) return;

  const userRef = await db.doc(`User/${userAuth.uid}`)

  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...someData
      })
    } catch (error) {
      console.log(error)
    }
  }
  console.log("dadawd", userRef)
  return userRef;
}
