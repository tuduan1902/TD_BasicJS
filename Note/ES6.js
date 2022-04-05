// 1. Let, const
    // 1. Var / Let, Const: Scope: Phạm vi truy cập, không hỗ trợ Hosting
    // 2. Const / Var, Let: Assignment

// 2. Template Literals
    // Viết thông thường
    //const courseName = 'Javascript';
    //const description = 'Course name:' + courseName;
    // ES6
    // const courseName = 'Javascript';
    // const courseName2 = 'PHP'
    // const description = `Course name: ${courseName} ${courseName2}`;
    // console.log(description);

// 3. Multi-line String
    // Thông thường
    //const lines = 'Line 1\nLine 2';
    //console.log(lines);
    // ES6
    // const lines = `Line 1
    // Line 2`;
    // console.log(lines);

// 4. Arrow function : Hàm mũi tên
    // const logger = (log) => {
    //     console.log(log);
    // }
    // logger('Message...');
    // Thông thường
    // const sum = function (a,b) {
    //     return a+b;
    // }
    // console.log(sum(2,2));
    //ES6
    // const sum = (a,b) => a+b; // return luôn 
    // const sum2 = (a,b) => ({a: a, b: b}); // return object
    // console.log(sum(2,2));

// 5. Classes: contructor function
    // Thông thường
    // function Course(name, price){
    //     this.name = name;
    //     this.price = price;
    // }
    // ES6
    // class Course{
    //     constructor(name, price) {
    //         this.name = name;
    //         this.price = price;
    //     }
    // }
    // const phpCourse = new Course('PHP', 1000);
    // const jsCourse = new Course('Javascript', 1200);
    
    // console.log(phpCourse);
    // console.log(jsCourse);

// 6. Default parameter values
    // function logger(log = 'Gia tri mac dinh'){
    //     console.log(log);
    // }
    // logger();
    // Dùng cho những hàm có chứa tham số không bắt buộc phải nhập 
// 7. Destructuring : Phân rã
    // Dùng cho object và array
    // Array
    // var array = ['Javascript', 'PHP', 'Ruby'];
    // var [a,...rest] = array;

    // console.log(a);
    // console.log(rest);
    // Object 
    // var course = {
    //     name: 'Javascript',
    //     price: 1000,
    //     image: 'image-address',
    // }
    // var {name, ...rest} = course;
    // console.log(rest);
// 8. Rest parameters: user destructuring and define tham số 
// 9. Spread: khi truyền đối số, rải trong 1 array or object other 
    // var array = ['Javascript', 'Ruby', 'PHP'];
    // var array2 = ['ReactJS', 'Dart'];
    // var array3 = [...array2, ...array];
    // console.log(array3);
    var array = ['Javascript', 'PHP', 'Ruby'];

    function logger(...rest) {
        for(var i = 0; i<rest.length; i++){
            console.log(rest[i]);
        }
    }
    logger(...array);
// 10. Enhanced object literals
    // 1. Định nghĩa key: value cho object
    // 2. Định nghĩa method cho object 
    // 3. Định nghĩa key cho object dưới dạng biến
    // var tuduan = 'Javascript';
    // var price = 1000;
    // var course = {
    //     tuduan,
    //     price,
    //     getName(){
    //         return tuduan;
    //     }
    // }
    // console.log(course);
// 11. Tagged template literal
    
// 12. Modules: Import / Export 

