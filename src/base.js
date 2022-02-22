import Rebase from "re-base";
import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB5RQkSUOZfPBYFdU4pCc5w2eZxuwSl3io",
    authDomain: "very-hot-burgers-94b42.firebaseapp.com",
    databaseURL: "https://very-hot-burgers-94b42-default-rtdb.firebaseio.com",
    projectId: "very-hot-burgers-94b42",
    storageBucket: "very-hot-burgers-94b42.appspot.com",
    messagingSenderId: "69290480222",
    appId: "1:69290480222:web:1fe62741a138d61794dacf"
})

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};
export default base;