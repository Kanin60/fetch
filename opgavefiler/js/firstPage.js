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

/* Opgave 3 - skriv videre på koden her: */
const myDataFileUrl = "../../opgavefiler/data/story.json";
const myStoryElement = document.getElementById("theStory");



/* Opgave 3*/
// din kode her

const myListElement = document.getElementById("userSelect");
const myPostElement = document.getElementById("userPosts");

//entry point
// getUsers("https://jsonplaceholder.typicode.com/users");
