import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAbuNzA_9u2-NR5Nc0A2fli7tuG-XZNPE0",
  authDomain: "very-hot-burgers-78d61.firebaseapp.com",
  databaseURL: "https://very-hot-burgers-78d61-default-rtdb.firebaseio.com",
});
const base = Rebase.createClass(firebaseApp.database());

export { firebase };
export default base;
