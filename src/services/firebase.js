import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { doc, setDoc, getDoc } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCGzTY8gQkZ6UX8aZX7ri2dytpSzS3Sw_c",
    authDomain: "todolist-cd289.firebaseapp.com",
    projectId: "todolist-cd289",
    storageBucket: "todolist-cd289.appspot.com",
    messagingSenderId: "730305256740",
    appId: "1:730305256740:web:9f65b783d8d52f8a2427b1"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

class todolistService {
  async getAll() {
    const docRef = doc(db, "todolist", "todos");
    const docValue = await getDoc(docRef).then(docSnap => {
      return docSnap.data().task;
    })
    return docValue;
  }

  setDoc(todo) {
    setDoc(doc(db, "todolist", "todos"), {
        task: todo
    });
  }
}

export default new todolistService();