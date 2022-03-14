// Promise  
// Sync and Async
// Sync : chạy theo tuần tự 
// Async :  setTimeout, setInterval, fetch, XMLHttpRequest
// file reading 


// Callback hell
// Pyramid of doom
// Định  nghĩa:
// 1.new Promise
// 2.Executor
// Promise có 3 trạng thái
// 1. Pendding : chờ 
// 2. Fulfilled
// 3. Reject 
var promise = new Promise(
    // Executor
    // call function after run new Promise
    // xảy ra trước khi promise return
    function(resolve, reject) { 
        // Write logic 
        // Thành công: call resolve()
        // Thất bại: call reject()
    }
);
promise
    .then(function(){
        console.log('Successully!');
    })// call resolve() thì call .then()
    .catch(function(){
        console.log('Failure!');
    }) // call reject() thì call .catch()
    .finally(function(){
        console.log('Done!');
    }) // call 1 trong 2 resolve or reject thì đều gọi
// Xử lý các thao tác bất đồng bộ, giải quyết vấn đề callback hell 
// Write code read easy and understand 

// Promise example
var users = [
    { 
        id:1,
        name: 'Tú Duẫn',
    },

    { 
        id:2,
        name: 'Moriaty',
    },
    { 
        id:3,
        name: 'Qi',
    },
];
var comments = [
    { 
        id:1,
        user_id: 1,
        content: 'Ảo thật đấy'
    },
       { 
        id:2,
        user_id: 2,
        content: 'Đần độn'
    },
];
// 1. Lấy comments
// 2. Từ comments lấy ra user_id
// 3. Từ user_id lấy ra user

// Fake API 
function getComments() {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(comments);
        }, 1000);
    });
}
function getUsersByIds(){
    return new Promise(function(resolve){
        var result = users.filter(function(user){
            return userIds.includes(user.id);
        });
        resolve(result);
    });
}
getComments()
    .then(function(comments){
        var userIds = comments.map(function(comment){
            return comment.user_id;
        });
        getUsersByIds(userIds)
            .then(function(users){
                return users;
            });
    })
    .then(function(users){
        console.log(users);
    });
       
    