// Toán tử 3 ngôi
var course = {
    name: 'Javascript',
    coin: 250
}
var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí';
console.log(result);
/*
 Vòng lặp - Loop 
1. for - Lặp với điều kiện đúng 
2. for/in - Lặp qua key của đối tượng ( object, array)
3. for/of - Lặp qua value của đối tượng
while - Lặp khi điều kiện đúng
5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
*/

// for/in loop
// thường sử dụng để lấy ra key của đối tượng
var myInfo = {
    name: 'Tú Duẫn',
    age: 20,
    address: 'Phú Yên, Việt Nam'
};
// vòng lặp for/in chạy số lần tương ứng với số key và in ra dưới dạng chuỗi
for (var key in myInfo) {
    console.log(myInfo[key]);
}
var myString = 'Javascript';
var languages = 'Javascript';
for (var key in languages){
    console.log(languages[key]); // ra các kí hiệu vì thông qua chuỗi languages lấy kí tự ra
    console.log(key); // ra số từ 0 vì vòng for/in sẽ dưới dạng chuỗi
}

// for/of loop
// chạy với chuỗi, mảng nhưng không dùng cho object theo kiểu thông thường được
// cách lấy key khi dùng for of cho object sẽ trả về 1 mảng các key
var myInfo ={
    name: 'Tu Duan',
    age: 20
};
for (var value of Object.keys(myInfo)){
    console.log(value); // in ra value của chuỗi myInfo

}

// do while loop
// sự khác biệt là kiểm tra điều kiện từ lần thứ 2 trở đi
var i = 0;
do{
    i++;
    console.log(i);

} while(i<10);

// break & continue in loop
// in các số từ 1 tới 5
for (var i = 0; i<10; i++){
    console.log(i);
    if (i>=5){
        break;
    }
}
// in ra các số chẵn
for (var i = 0; i<10; i++){
    if(i%2 !== 0){
        continue;
    }
    console.log(i);
}
// Đệ Quy
// Định nghĩa: function gọi lại chính nó
// Các lưu ý 1. điểm dừng, 2. logic handle => Tạo ra điểm dừng
// Ví dụ tạo ra ứng dụng đếm ngược
function countDown(num){
    if(num>0){
        console.log(num);
        return countDown(num-1);
    }
    return num;
}
coutDown(3);
// Ví dụ duyệt mảng
