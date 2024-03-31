/*
Spread cho phép bạn "mở rộng" một interable object(arr, string, object) thành các phần tử riêng lẻ trong một biểu thức,nó được biểu thị bằng dấu
chấm (...)

Ứng dụng:
- Kết hợp các Array
- Nối các String
- Sao chép object
- GỬi các phần tử interabel làm tham số cho hàm
- truy cập các phần tử interabel trong 1 loop
*/
// Cú pháp spread syntax
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// // Sử dụng SS để kết hợp 2 array
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// // Mở rộng string
// const str1 = "Hello";
// const str2 = "World";
// const str3 = [...str1, "", ...str2];
// console.log(str3);

// // Mở rộng Object
// const obj1 = {name: "Hieu", age: 26}
// const obj2 = {adress: "Tay Ho"}
// const obj3 = {...obj1, ...obj2}

// console.log(obj3);

///// Bài toán
// let arr = [1,2,3,4,5,6,7,8];

// // Yêu cầu: In ra 1 mảng arr2 với các phần tử của arr được bình phương
// // C1
// let arr2 = []
// for(let i=0; i<arr.length; i++){
//     arr2[i] = arr[i] * arr[i]
// };

// console.log(arr2);

// //C2: Sử dụng map
// let arr3 = arr.map(item => item*item);
// console.log("arr3: ", arr3);

// // in ra từng phần tử mảng arr nhưng bị giảm 1 đơn vị
// let arr4 = arr.map(item => item - 1);
// console.log("arr4 ", arr4);

/*
Cú pháp của map gồm:
let <tên biến> = <array>.map(<tên tham số> => ... thực hiện hành động sau mỗi lần lặp)
- map(); trả về kết quả là 1 array mới đã thực thi hành động với ô chứa mới không trùng lặp với cũ
*/

//// Tìm hiểu về filter
// let arr = [1,2,3, 'Hello', 4,5,6, "hi", null, 0];

// //// lọc ra và trả về mảng chỉ chứa theo kiểu dữ liệu số
// let arr1 = arr.filter(item => typeof item == 'number');
// console.log("arr1: ", arr1);

// //// lọc ra và trả về mảng các số chẵn tử mảng arr
// let arr2 = arr1.filter(item => item %2==0);
// console.log(arr2);

// //// lọc ra và trả về số < 4
// let arr3 = arr1.filter(item => item < 4);
// console.log(arr3);

//// Thực hành bài tập

// let NPS_JSI20 = [
//     {
//         name: "Lê Anh",
//         age: 15,
//         job: "student"
//     },
//     {
//         name: "Trung Hiếu",
//         age: 14,
//         job: "Dev"
//     },
//     {
//         name: "Vũ Dũng",
//         age: 16,
//         job: "student"
//     },
//     {
//         name: "Hoàng Quân",
//         age: 14,
//         job: "student"
//     }
// ];

// let nhapTuoi = Number(prompt("Mời người dùng nhập tuổi"));
// let arrAgeStudent = NPS_JSI20.filter(item => item.age == nhapTuoi);
// arrAgeStudent.forEach(element => {
//     console.log(element.name + " với số tuổi là " + element.age);
// });

// let arrJobStudent = NPS_JSI20.filter(item => item.job === "student" && item.age >= 15)
// console.log("arrJobStudent: ", arrJobStudent);
// arrJobStudent.forEach(element => {
//     console.log(elemnt.name);
// });

let arr = ["abcde", "abc", "qwertyuiop"];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i].length > arr[j].length) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

console.log(arr);