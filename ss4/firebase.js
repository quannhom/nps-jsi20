/*
Khái niệm: 
- Server, hay máy chủ là một hệ thống bao gồm phần mềm và phần cứng máy tính có khả năng 
lưu trữ dữ liệu và cung cấp các dịch vụ hoặc tài nguyên cho các máy tính khác (client)
trong mạng máy tính hoặc Internet.

- Server có địa chỉ IP tĩnh và thường có cấu hình phần cứng cao để xử lý nhiều yêu cầu từ
client.

- MQH giữa client và server - server là mô hình cơ bản của mạng máy tính, nơi client chủ
yếu gửi yêu cầu đến server và server phản hồi lại bằng cách cung cấp thông tin hoặc dịch
vụ cần thiết.
*/


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);