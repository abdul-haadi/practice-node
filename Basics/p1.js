fetch('https://quotes.toscrape.com/random')
    .then((response) => response.text())
    .then((body) => {
        console.log(body);
    }); 

// const url = 'https://httpbin.org/get';
// fetch(url, {
//     headers: {
//         "User-Agent": "My User Agent",
//     },
// })
//     .then((response) => response.json())
//     .then(data => {
//         console.log(data);
//     })

// fetch('https://invalid_url')
//     .then((response) => response.text())
//     .then((body) => {
//         console.log(body);
//     }).catch((error) => {
//         console.error('error in execution', error);
//     }); 