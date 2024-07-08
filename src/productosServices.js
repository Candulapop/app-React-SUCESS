
// import { response } from "express";//
//import firebase from "./Config/firebase";//



export const getProductos = async (data) => {
   return await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?q=celulares"
      , {
         methood: "GET",
         headers: {
            'Authorization': 'Bearer TU_ACCESS_TOKEN',
            "content-type" : "application/json",
         },
        body: JSON.stringify(data),
        } ).then((response)=>response.json());}
   
    //return firebase.firestore().collection("productos").get()


export const getProductosbyId = async (id) => {
return await fetch(
   `https://api.mercadolibre.com/sites/MLA/${id}`
   ,{
      methood: "GET",
      headers: {
         'Authorization': 'Bearer TU_ACCESS_TOKEN',
         "content-type" : "application/json",
      },
   }

   .then((response)=>response.json())
)
  // return firebase.firestore().doc(`productos/${id}`).get()
};



/*export const create = async (data) => {
   return firebase.firestore().collection("productos").add(data)
}*/

export const create= async(data) => {
   return await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=celulares"
, {
 methood: "POST",
 headers: {
    "content-type" : "application/json",
 },
body: JSON.stringify(data),
} ).then((response)=>response.json());}



