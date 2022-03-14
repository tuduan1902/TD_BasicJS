// Callback là hàm (function) 
//Truyền qua đối số 
// Được gọi lại (trong hàm khác nhận đối số)
function myFunction(param){
  param('Học lập trình');  
};

function myCallback(value){
    console.log('Value:', value);
};
myFunction(myCallback);
// dòng 10 chạy myFunction truyền function myCallback vào
// đối số param nhận được function myCallback 
// dòng 4 thực thi việc truyền đối số cho value và thực thi hàm myCallback

// code lại logic của phương thức map()
//Dùng để thay đổi element của 1 array,lặp qua từng phần tử call lại 1 cái function thực thi
//return lại cái gì thì mảng mới sẽ nhận được element là cái đó 
var courses = [
  'Javascript',
  'PHP',
  'Ruby'
];
Array.prototype.map2 = function(callback){
  var output = [], arrayLength = this.length;
  for(var i = 0; i< arrayLength; i++){
    var result = callback(this[i],i);
    output.push(result);
  }
  return output;
};
var htmls = courses.map2(function(course){
  return `<h2>${course}</h2>`;
});
console.log(htmls.join(''));

// code lại logic của phương thức forEach() : duyệt qua từng phần tử của mảng
// không return 
// nhận vào 1 callback function
Array.prototype.forEach2 = function(callback){
  for(var index in this){
    if (this.hasOwnProperty(index)){
      callback(this[index], index, this);
    }; // this.hasOwnProperty để loại bỏ element thuộc prototype 
  };
};
var courses = [
  'Javascript',
  'PHP',
  'Ruby'
];
courses.forEach2(function(course, index, array){
  console.log(course, index, array)
});

// code lại logic của phương thức filter()
// dùng để tìm kiếm và trả về tất cả đối tượng thỏa mãn đk cho trước 
// trả về mảng :>
Array.prototype.filter2(function(callback){
  var output = [];
  for(var index in this){
    if(this.hasOwnProperty(index)){
      var result = callback(this[index], index, this);
      if(result){
        output.push(this[index]); 
      };
    };
  };
  return output;
});
var courses = [
  {
    name: 'Javascript',
    coin: 680
  },
  {
    name: 'PHP',
    coin: 860
  },
  {
    name: 'Ruby',
    coin: 980
  }
];

var filterCourses =  course.filter2(function (course, index, array) {
  return course.coin > 700;
});

// code logic của phương thức some()
// kiểm tra tối thiếu 1 phần tử trong mảng có thỏa mãn đk hay không
//  trả về true or false
Array.prototype.some2(function(callback) {
  for(var index in this){
    if(this.hasOwnProperty(index)){
      if(callback(this[index], index, this)){
        return true;
      };
    }
    return false;
  }
});
var courses = [
  {
    name: 'Javascript',
    coin: 680,
    isFinish: true
  },
  {
    name: 'PHP',
    coin: 860,
    isFinish: false
  },
  {
    name: 'Ruby',
    coin: 980,
    isFinish: false
  }
];
var result = courses.some2(function (course, index, array) {
  return course.isFinish;
});
console.log(result);

// code lại logic của phương thức every()
// trả về true or false , kiểm tra tất cả element phải thỏa đk mới return là true
Array.prototype.every2(function(callback) {
  var output = true; 
  for(var index in this){
    if(this.hasOwnProperty(index)){
      var result = callback(this[index], index, this);
      if(!result){
        output = false;
        break;
      }
    }
  }
  return output;
});
var courses = [
  {
    name: 'Javascript',
    coin: 680,
    isFinish: true
  },
  {
    name: 'PHP',
    coin: 860,
    isFinish: false
  },
  {
    name: 'Ruby',
    coin: 980,
    isFinish: false
  }
];
var result = courses.every2(function (course, index, array) {
  return course.isFinish;
});
console.log(result);