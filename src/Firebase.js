import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCxFsMxQCTDuT0kblC0I4ROA7I68M9DELo",
    authDomain: "clone-a523b.firebaseapp.com",
    projectId: "clone-a523b",
    storageBucket: "clone-a523b.appspot.com",
    messagingSenderId: "457368650025",
    appId: "1:457368650025:web:a32ec56fc3c2bc995e7738"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig)

  const db=firebaseApp.firestore();
  const auth=firebase.auth()
  
  export {db,auth};