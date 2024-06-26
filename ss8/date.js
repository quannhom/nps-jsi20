// // //// 4 cách khởi tạo đối tượng Date
// // /// C1:
// // let date = new Date();
// // console.log(date);

// // /// C2: Khởi tạo ngày giờ từ giá trị time milisecond:
// // let date2 = new Date(1000);
// // console.log("date2: ", date2);

// // /// C3: Khởi tạo ngày giờ từ 1 dateString
// // // VD: May 19, 2024 16:22:00
// // let date3 = new Date("May 19, 2024 16:22:00");
// // console.log("date3: ", date3);

// // /// C4: Khởi tạo ngày giờ từ một dateString dạng attribute:
// // // let date4 = new Data(year, month, day, hours, minutes, seconds, miliseconds);
// // let date4 = new Date("2024,05,19,16,26,00,00");
// // console.log("date4: ", date4); 

// // ////// Các phương thức của Date:
// // //// Các phương thức get dữ liệu
// // /*
// // getDate(): trả về ngày trong tháng (1-31)
// // getDay(): trả về ngày trong tuần(0-6) với chủ nhật là 0, thứ 2 là 1
// // getMonth(): Trả về tháng trong năm (0-11)
// // getFullYear(): Trả về năm dạng đầy đủ (yyyy)
// // getHours(): Trả về số giờ dạng 24h (0-23)
// // getMinutes(): Trả về số phút trong giờ (0-59)
// // getSeconds(): Trả về số giây trong phút (0-59)
// // getMilliseconds(): Trả về tíc tắc trong giây (0-999)
// // getTime(): Trả về thời gian dạng mili giây.

// // Ví dụ:
// // */      
// // function get(){
// //     let date = new Date();
// //     let data = "Ngày trong tháng: " + date.getDate() + "<br />";
// //     data += "Ngày trong tuần: " + date.getDay() + "<br />";
// //     data += "Tháng trong năm: " + date.getMonth() + "<br />";
// //     data += "Giờ: " + date.getHours() + "<br />";
// //     data += "Phút: " + date.getMinutes() + "<br />";
// //     data += "Giây: " + date.getMilliseconds() + "<br />";

// //     document.getElementById("result").innerHTML = data;
// // }

// // get();

// // /*
// // Set: thiết lập(đặt)
// // VD: cụ thể
// // */

// // function set(){
// //     let date = new Date();
// //     date.setDate(19);
// //     date.setMonth(4);
// //     date.setFullYear(2024);
// //     date.setHours(16);
// //     date.setMinutes(47);
// //     date.setMilliseconds(999);

// //     console.log(date);
// // }

// // set();

// /*
// Các phương thức khác:
// toDateString(): Chuyển đổi thời gian về dạng date string
// toISOString(): Chuyển đổi thời gian về dạng ISO (YYYY-MM-ĐTHH:mm:ss.sssZ).
// toJSON(): Chuyển đổi thời gian về dạng JSON (YYYY-MM-ĐTHH:mm:ss.sssZ).
// toLocaleDateString(): Chuyển đổi về ngày theo chuyển địa phương.
// toLocaleTimeString(): Chuyển đổi về giờ theo chuyển địa phương.
// toString(): Chuyển đổi thời gian về dạng String.
// valueOf(): Chuyển đổi thời gian về dạng nguyên thủy.

// Ví dụ minh họa
// */

// function get(){
//     let date = new Date();
//     let data = 'toDateString(): ' + date.toDateString() + "<br />";
//     data += "toISOString(): " + date.toISOString() + "<br />"
//     data += "toJSON(): " + date.toJSON() + "<br />"
//     data += "toLocaleDateString(): " + date.toLocaleDateString() + "<br />"
//     data += "toLocaleTimeString(): " + date.toLocaleTimeString() + "<br />"
//     data += "toString(): " + date.toString() + "<br />"
//     data += "valueOf(): " + date.valueOf() + "<br />"

//     document.getElementById("result").innerHTML = data;
// }

// get();

/// 1.
const date = new Date("2020,1,20,3,12");
console.log(date);
/// 2.
function getDateago(date, days){
    const dayOfWeek = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    const targetDate = new Date(date);

    targetDate.setDate(targetDate.getDate() - days);

    return dayOfWeek[targetDate.getDay()];
};

const today = new Date();
console.log(getDateago(today, 1)); // In ra ngày hôm qua SA
console.log(getDateago(today, 2));

