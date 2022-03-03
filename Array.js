/*
    Array methods: đều truyền vào 1 function và lặp qua mảng
        forEach() 
        every()
        some()
        find()
        filter()
        map()
        reduce()

*/
var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'Ruby',
        coin: 400
    },
    {
        id: 3,
        name: 'PHP',
        coin: 500
    },
    {
        id: 4,
        name: 'ReactJS',
        coin: 0
    }
];
// duyệt qua từng phần tử của mảng
courses.forEach(function(course, index){
    console.log(index, course);
});
// kiểm tra tất cả các phần tử của mảng thỏa 1 đk nào đó
// trả về kiểu dữ liệu boonlean
var isFree = courses.every(function(course, index){
    return course.coin === 0;
}); 
console.log(isFree);
// trả về ngay khi gặp kết quả đk đúng trong mảng (some)
// find dùng để tìm kiếm phần tử trong mảng ( chỉ một đối tượng)
var isFree = courses.find(function (course, index){
    return course.name === 'Ruby';
}); 
console.log(course);
// filter giống find nhưng trả về tất cả các phần tử thỏa mãn
var listcourses = courses.filter(function (course, index){
    return course.name === 'Ruby';
}); 
console.log(listcourses);

// map():Dùng để thay đổi element của 1 array,lặp qua từng phần tử call lại 1 cái function thực thi
// return lại cái gì thì mảng mới sẽ nhận được element là cái đó 
var newCourses = courses.map(function(course, index){
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index
    };
});
// reduce(): nhận về giá trị duy nhất sau khi tính toán ,xử lý mỗi phần tử trong một aray
// return cái gì thì lưu trữ cái đó 
function coinHandler(accumulator, currentValue, currentIndex){
    return accumulator + currentValue.coin;
}; // accumulator: biến lưu trữ = giá trị của đối số thứ 2 của phương thức 
var totalCoin = courses.reduce(coinHandler, 0); // tham số thứ 2 là biến lưu trữ của reduce
// includes method
// có sẵn trong array và string,
//với string: kiểm tra xem trong chuỗi có chuỗi cần kiểm tra không
var title = 'Responsive web design';
console.log(title.includes('web',1)); // 1 là vị trí bắt đầu tìm kiếm
// với array: kiểm tra trong mảng xem có element đó không
var courses = ['Javascript', 'PHP', 'Dart'];
console.log(course.includes('Ruby'))



