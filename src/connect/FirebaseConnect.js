import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCDSqOGuaXdGlmyN_q4B0T2AYeLM-LTUG0",
  authDomain: "inmaps.firebaseapp.com",
  projectId: "inmaps",
  databaseURL: "https://inmaps.firebaseio.com",
};

export const fireApp = firebase.initializeApp(config);
export const fireStore = firebase.firestore();