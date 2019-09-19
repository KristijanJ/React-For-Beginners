import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD9R9xnHIRUnSORj6Edndln0Sx1K0Ab6Yk",
  authDomain: "catch-of-the-day-790ca.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-790ca.firebaseio.com",
  projectId: "catch-of-the-day-790ca",
  storageBucket: "",
  messagingSenderId: "407346297313",
  appId: "1:407346297313:web:84698a92c532e906803aa0"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;

// // These are your firebase security rules - put them in the "Security & Rules" tab of your database
// {
//   "rules": {
//     // won't let people delete an existing room
//     ".write": "!data.exists()",
//     ".read": true,
//     "$room": {
//       // only the store owner can edit the data
//       ".write":
//         "auth != null && (!data.exists() || data.child('owner').val() === auth.uid)",
//       ".read": true
//     }
//   }
// }
