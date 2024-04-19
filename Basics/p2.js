//Fetch


// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((json) =>console.log(json))

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PUT',
//   body: JSON.stringify({
//     title: 'PROF',
//     body: 'XYZ',
//     userId: 1
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


// fetch('https://jsonplaceholder.typicode.com/posts?userId=3')

//     .then((response) => response.json())
//     .then((json) => console.log(json)); 

fetch('https://jsonplaceholder.typicode.com/posts/1')

.then((response) => response.json())
.then((json) => console.log(json));

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'Java',
        body: 'javascript',
        userId: 5,
    }),
    headers:{
        'Content-type': 'application.json; charset=UTF-8',
    },
})

.then((response) => response.json())
.then((json) => console.log(json))  ;

fetch('https://jsonplaceholder.typicode.com/posts', {
    method:'PUT',
    body: JSON.stringify({
        title:'Javascript',
        body:'NOdeJS',
        userId: 6,
    }),
    headers:{
        'Content-type': 'application.json; charset=UTF-8',
    },
})

.then((response) => response.json())
.then((json) => console.log(json))