/* Opgave 1*/
// din kode her

const userURI = "https://jsonplaceholder.typicode.com/users";
const myUserlistElement = document.getElementById("userList");

fetch(userURI).then(
    (dataModtaget) => {
        return dataModtaget.json();
    }
).then(
    (data) => {
        buildUserCard(data);
    }
).catch( //er det kun tastefejl/stavefejl i uri'en?
    (error) => {
        console.error("****  Her er fejlen!  ****", error);
    }
);

function buildUserCard(data){
    data.map((userCard)=>{
        myUserlistElement.innerHTML +=` <h2>Navn: ${userCard.name}</h2> 
                                        <p>Adresse: ${userCard.address.street}, ${userCard.address.suite}. 
                                        <br> PostNummer: ${userCard.address.zipcode} 
                                        <br> By: ${userCard.address.city}`;
    });
};

/* Opgave 2*/

// din kode her

const myDataFileUrl = "../../opgavefiler/data/story.json";
const myStoryElement = document.getElementById("theStory");
let myStorydata = null;


fetch(myDataFileUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        myStorydata = data;
        setUpStory("DK");
    })
    .catch((error) => {
        console.log("****   HER ER FEJLEN    ****", error);
    });

function setUpStory(myLanguage) {
    let myStory = null;

    switch(myLanguage){
        case "DK":
            myStory = myStorydata.DK;
        break;

        case "SE":
            myStory = myStorydata.SE;
        break;

        case "FI":
            myStory = myStorydata.FI;
        break;

        case "UK":
            myStory = myStorydata.UK
        break;

        default:
            myStory = myStorydata.DK;
        break;
    }
    createStory(myStory);
}

function createStory(myStory) {
    myStoryElement.innerHTML = '';
    //functionen createButtons() skal kaldet i bunden af functionen fordi jeg bruger string literals...
    myStoryElement.innerHTML +=     `<h2>${myStory.headline}</h2> 
                                     <img src="../../opgavefiler/img/felix.jpg" alt="Felix"> 
                                     <p>${myStory.text}</p>`
    console.log( myStoryElement);
    createButtons();
}

function createButtons() {
    let buttonContainer = document.createElement("div");

    let myDkbutton = document.createElement("button");
    myDkbutton.innerText = "DANSK";
    myDkbutton.addEventListener("click", (e) => {
        setUpStory("DK");
    });

    let mySebutton = document.createElement("button");
    mySebutton.innerText = "SVENSKA";
    mySebutton.addEventListener("click", (e) => {
        setUpStory("SE");
    });

    let myFibutton = document.createElement("button");
    myFibutton.innerText = "FINSKA";
    myFibutton.addEventListener("click", (e) => {
        setUpStory("FI");
    });

    let myUkbutton = document.createElement("button");
    myUkbutton.innerText = "ENGLISH";
    myUkbutton.addEventListener("click", (e) => {
        setUpStory("UK");
    });

    buttonContainer.appendChild(myDkbutton);
    buttonContainer.appendChild(mySebutton);
    buttonContainer.appendChild(myFibutton);
    buttonContainer.appendChild(myUkbutton);
    myStoryElement.appendChild(buttonContainer);
};

//
/* Opgave 3*/
// din kode her

// const myListElement = document.getElementById("userSelect");
// const myPostElement = document.getElementById("userPosts");

//entry point
// getUsers("https://jsonplaceholder.typicode.com/users");
