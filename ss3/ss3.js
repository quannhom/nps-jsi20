/*
Lập trình hướng đối tượng OOP
- Khái niệm: là mô hình lập trình dựa trên khái niệm của các "đối tượng", 
có thể chứa dữ liệu, dưới dạng trường(thuộc tính, phương thức). Giúp tổ 
chức mã theo mô phỏng thế giới thực.

- Ứng dụng OOP trong JS:
+ Tạo ra các chương trình có cấu trúc rõ ràng, dễ mở rộng và bảo trì.a
+ Sử dụng để tạo ra các cấu trúc dữ liệu phức tạp.
+ Xây dựng thư viện và framework.
*/

// Khởi tạo đối tượng Nguoi
// class Nguoi {
//     // Hàm khởi tạo thuộc tính trong class
//     constructor(id, name, age, address, hobbies, gender) {
//         // Tiến hành lưu trữ giá trị truyền vào class
//         this._id = id;
//         this._name = name;
//         this._age = age;
//         this._address = address;
//         this._hobbies = hobbies;
//         this._gender = gender;
//     }

//     // Khai báo phương thức cho class này
//     introduction() {
//         return (`My name is ${this._name} and I am ${this._age} years old`);
//     }

//     cry() {
//         alert('I am crying');
//     }
// }

// // Khởi tạo đối tượng có kiểu dữ liệu Nguoi
// // let Quan = new Nguoi(
// //     "0123456789",
// //     "Ngô Hoàng Quan",
// //     14,
// //     "Hà Nội",
// //     "thức",
// //     "nam"
// // );

// // console.log(Quan._address);

// //////// Tính kế thừa trong lập trình OOP
// class GiaoVien extends Nguoi {
//     constructor(id, name, age, address, hobbies, gender, idTeacher, classs, RateTeacher) {
//         super(id, name, age, address, hobbies, gender);
//         // Từ khóa super giúp kế thừa hết các thuộc tính từ class cha
//         this._idTeacher = idTeacher;
//         this._classs = classs;
//         this._RateTeacher = RateTeacher;
//     }

//     ////// Kế thừa phương thức
//     ///// Kế thừa hoàn toàn mà không thay đổi gì(không cần viết lại các phương thức từ người cha)


//     ///// Kế thừa và ghi đè hoặc phát triển tiếp từ người cha
//     introduction() {
//         return super.introduction() + `. And now I am teaching at ${this._classs} with teacher id is ${this._idTeacher}. Finally my rate is ${5}`;
//     }
// }

// ///// Khởi tạo 1 giáo viên
// let Quan = new GiaoVien(
//     "0123456789",
//     "Ngô Hoàng Quan",
//     14,
//     "Hà Nội",
//     "thức",
//     "nam",
//     "quannh",
//     "NPS-JSI20",
//     5
// );

// console.log(Quan);
// alert(
//     Quan.introduction()
// );

class RectangularArea{
    constructor(width, height){
        this._width = width;
        this._height = height;
    }

    method(){
        return `S = ${this._width} * ${this._height}`;
    }
}

let rectangle = new RectangularArea(
    2,
    3
);

console.log(rectangle);
alert(
    rectangle.method()
)