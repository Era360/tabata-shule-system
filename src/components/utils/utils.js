import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";

export const userIsAdmin = (currentUser) => {
    const { uid } = currentUser;
    const userRef = doc(db, `users/${uid}`);
    const snapshot = getDoc(userRef)

  // if (!currentUser) return false;
  if (snapshot.exists()) {
    let roles = snapshot.get("userRoles");
    // console.log(roles);
    if (roles[0] === "admin") {
      return true;
    } else {
      return false;
    }
    // console.log("Document data:", snapshot.data());
  } else {
    // doc.data() will be undefined in this case
    return false;
  }
  // if (userRoles.includes("admin")) return true;
};

// export const userIsAdmin = async (currentUser) => {
//   if (!currentUser) return false;

//   const { uid } = currentUser;
//   const userRef = doc(db, `users/${uid}`);
//   const snapshot = await getDoc(userRef);

//   if (snapshot.exists()) {
//     let roles = snapshot.get("userRoles");
//     // console.log(roles);
//     if (roles[0] === "admin") {
//       return true;
//     } else {
//       return false;
//     }
//     // console.log("Document data:", snapshot.data());
//   } else {
//     // doc.data() will be undefined in this case
//     return false;
//   }
//   // if (userRoles.includes("admin")) return true;
// };

// export const getCurrentUser = () => {
//   const user = auth.currentUser;
//   return user;
// };
