import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { toast } from "./toast";

const config = {
  apiKey: "AIzaSyDNWzoNy57VV96SaoGwsf-Is0dBGD7THDM",
  authDomain: "last-project-b7c86.firebaseapp.com",
  projectId: "last-project-b7c86",
  storageBucket: "last-project-b7c86.appspot.com",
  messagingSenderId: "910838654015",
  appId: "1:910838654015:web:96c2c4e805ddb762f6848a",
  measurementId: "G-TEFVDEHYWC",
};

firebase.initializeApp(config);

export function getCurrentUser(){
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(function(user) {
      if(user){
        resolve(user)
      } else{
        resolve(null)
      }
      unsubscribe()
    })
  })
}
export function logoutUser(){
  return firebase.auth().signOut()
}

export async function loginUser(email: string, password: string) {
  try {
    const result = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function registerUser(email : string, password : string) {
  try{
    const result = await firebase.auth().createUserWithEmailAndPassword(email, password)
    console.log(result)
    return true
  } catch (error){
    console.log(error)
    toast (error.message, 1000)
    return false
  }
  
  
}

