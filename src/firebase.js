import firebase from 'firebase';	

const firebaseConfig = {	
    apiKey: "AIzaSyBaodIM6UPuNXnssQjJdYiUMp8EsNbMZhM",
    authDomain: "treinazap-5663f.firebaseapp.com",
    projectId: "treinazap-5663f",
    storageBucket: "treinazap-5663f.appspot.com",
    messagingSenderId: "546326236419",
    appId: "1:546326236419:web:31ac3d7cbacb9b4fa5ed36"
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  
