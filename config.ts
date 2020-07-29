import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAIE3UpAnUoOqJOGW3lo1zE7phIXxv_l-8",
  authDomain: "medshare-hack-project.firebaseapp.com",
  databaseURL: "https://medshare-hack-project.firebaseio.com",
  projectId: "medshare-hack-project",
  storageBucket: "medshare-hack-project.appspot.com",
  messagingSenderId: "408699697428",
  appId: "1:408699697428:web:6833035c683568fc9e2a01",
  measurementId: "G-LTPT707HG3",
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
