

let randomButton = document.querySelector(".randomButton")
const randomCatImage = document.querySelector(".randomCatImage")
const randomCat = document.querySelector(".randomCatImage")
const categoryCatImage = document.querySelector(".categoryCatImage")
const categoryCat = document.querySelector(".categoryCat")


function randomKittyImage() {
    fetch("https://api.thecatapi.com/v1/images/search", {
      headers: {
        "x-api-key": "b525013a-ea72-4495-b900-1b8426b95469",
      },
    })
      .then((res) => res.json())
      .then((res) => (randomCatImage.src = res[0].url))
      .catch((err) => console.error(err));
    }
    
    randomButton.addEventListener("click", randomKittyImage);

// gimeCat()

// async function gimeCat() {
//     clearComplaints()

//     let response = await fetch('https://api.thecatapi.com/v1/images/search', {
//         headers: {
//             'x-api-key': 'b525013a-ea72-4495-b900-1b8426b95469'
//         }
//     })



//     response = await response.json()
//     let catUrl = response[0].url
//     // return(response[0].url)
// function clearComplaints() {
//     while (document.body.querySelector("div") !=null) document.body.querySelector("div").remove()
// }
//     let catImg = document.createElement('img')

//     randomButton.addEventListener('click', (e) => {
//         catImg.src = catUrl

//         randomButton.parentNode.insertBefore(catImg, randomButton)

//         // gimeCat()
//     })
// }

    
// let catImg = document.createElement("img")

// console.log(gimeCat())

// randomButton.addEventListener('click', (e) => {
    
    //     randomButton.appendChild(catImg)
    // })
    
    // for(let i=0; i < randomCatImage; i++) {
        // div.randomCat = data[i].randomCatImage
        // let divClone = div.cloneNode(true)
        // divClone.id = i
        //     document.body.appendChild(divClone)
        //     console.log(data[i].randomCatImage);
        //     randomCatImage.appendChild(randomCat)
    // }