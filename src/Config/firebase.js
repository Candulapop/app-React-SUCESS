import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCf-XorFQFe2tWedVan0B_XkV2L5-xiTvY",
    authDomain: "fir-cande-utn-m03.firebaseapp.com",
    projectId: "fir-cande-utn-m03",
    storageBucket: "fir-cande-utn-m03.appspot.com",
    messagingSenderId: "296653498953",
    appId: "1:296653498953:web:83238347b69fd8b3f86d98",
    measurementId: "G-B4QHPBH5DJ"
  };

//ARRIBA info para que el cliente se conecte, setea configuración


  firebase.initializeApp(firebaseConfig);

export default firebase

//exportamnos modulo