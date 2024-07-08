import firebase from './Config/firebase';

export const create = async (data) => {
   const responseUser = await firebase
   .auth()
   .createUserWithEmailAndPassword(data.email,data.password)
   if(responseUser){
 await  firebase.firestore().collection("usuarios").add({
   name: data.name,
   lastname: data.lastname,
   userId: responseUser.user.uid,
  });
   } 
   //insertar el resto de los datos en base de datos//
return responseUser.user.uid
};

export const autenticate = async (email,password) => {
   return firebase
   .auth()
   .signInWithEmailAndPassword(email, password)

};
