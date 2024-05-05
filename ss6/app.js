import{
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    getFireStore
} from "https://www.gstatic.com/firebasejs/10.11.1/firestore.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCotDTT2mfAxoa0LgvoJPbwnjd8dgsaz5w",
  authDomain: "nps-jsi201.firebaseapp.com",
  projectId: "nps-jsi201",
  storageBucket: "nps-jsi201.appspot.com",
  messagingSenderId: "841252716259",
  appId: "1:841252716259:web:1179c7450965f6b19c8fd6",
  measurementId: "G-E29KZK82XY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFireStore(app);

// Lấy ra 3 thẻ bên html và lưu trữ vào biến để dễ dàng gọi
const taskInput = document.getElementById("taskInput"); // input
const addTaskBtn = document.getElementById("addTaskBtn"); // button
const taskList = document.getElementById("tasklist"); // ul

//////////// Liệt kê các hàm cần sử dụng để hoàn thành todolist

//// Hiển thị toàn bộ task mới nhát từ firestore ra UI

//// Cập nhật dữ liệu mới nhất từ firestore


//// Thêm 1 task vào trong firebase firestore
const addTask = async (description)=>{
    await addDoc(collection(db, "tasks"), {description});
    
    getTasks();
}

//// Xóa 1 task trong firebase firestore


//// Lắng nghe sự kiện người dùng click nút "thêm"
addTaskBtn.addEventListener("click", ()=>{
    const description = taskInput.value.trim();
    console.log("description", description);
    if(description !== ""){
        addTask(description);
    }
    else{
        alert("task rỗng!");
    }
});