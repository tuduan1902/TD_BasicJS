// Object constructor
function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}
var author = new User('Tú','Duẫn','Moriaty');
var user = new User('Tuấn','Dũ','anime');
author.title = 'Đánh mất chính mình';
user.comment = 'Đần độn';
console.log(user);
// prototype dùng để tạo 1 thuộc tính bên ngoài object với cú pháp 
// User.prototype.tên thuộc tính = 'giá trị';

// Đối tượng Date
// tạo đối tượng Date
var date = new Date();
var year = date.getFullYear(); // trả về Năm
var month = date.getMonth() + 1; // trả về tháng
var day = date.getDate(); // trả về ngày

// Math object
    Math.PI 
    Math.round() // làm tròn
    Math.abs() // giá trị tuyệt đối
    Math.ceil() // làm tròn trên
    Math.floor() // làm tròn dưới
    Math.random() // ngẫu nhiên
    Math.min() // giá trị nhỏ nhất
    Math.max() // giá trị lớn nhất  