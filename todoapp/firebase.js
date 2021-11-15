import firebase from "firebase/app";
import "firebase/firestore";

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
const ref = db.collection("/todo");

class todolistService {
  getAll() {
    return db;
  }

  create(todo) {
    return ref.push(todo);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new todolistService();