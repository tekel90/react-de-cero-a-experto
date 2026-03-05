import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = "IB9YaTzF0XQrabfpetjdY3NelSgdRYQq";
const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

// myRequest
//   .then((response) => response.json())
//   .then((data) => console.log(data))

//   // .then((response) => {
//   // response.json().then((data) => {
//   //     console.log(data)
//   // })

//   // console.log(response);

//   // })
//   .catch((err) => {
//     console.log(err);
//   });

// myRequest
//     .then((response) => response.json())
//     .then((data) =>{
//         const imageURL = data.data.images.original.url;
//         console.log(imageURL);

//         const imgElement = document.createElement('img');
//         imgElement.src = imageURL;

//         document.body.append(imgElement);
//     })
//     .catch((err) =>{
//         console.log(err)
//     })

const createImageInsideDOM = (url: string) =>{
    const imgElement = document.createElement("img");
    imgElement.src = url;

    document.body.append(imgElement);
}

myRequest
  .then((response) => response.json())
  .then(({data}: GiphyRandomResponse) => {
    const imageURL = data.images.original.url;
    createImageInsideDOM(imageURL);    
  })
  .catch((err) => {
    console.log(err);
  });