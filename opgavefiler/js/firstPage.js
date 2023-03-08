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

fetch(myDataFileUrl).then(
    (response) => {
        return response.json();
    }
).then(
    (data) => {
        storyData = data;
        storySetUp("DK");
    }
).catch(
    (error) =>{
        console.log("****   HER ER FEJLEN    ****", error);
    }
);

function storySetUp(sprog){
    let myStory = null;
console.log(sprog);
    switch(sprog){
        case "DK":
            myStory = storyData.DK;
        break;

        case "SE":
            myStory = storyData.SE;
        break;

        case "FI":
            myStory = storyData.FI;
        break;

        case "UK":
            myStory = storyData.UK
        break;

        default:
            myStory = storyData.DK;
        break;
        
    }
    storyBuild(myStory);
}

function storyBuild(myStory){
    myStoryElement.innerHTML = '';
    buildButtons();
    

    myStoryElement.innerHTML +=     `<h2>${myStory.headline}</h2> 
                                     <img src="../../opgavefiler/img/felix.jpg" alt="Felix" /> 
                                     <p>${myStory.text}</p>`
    // console.log( myStoryElement.innerHTML);
}

function buildButtons(){
    
    let DKbutton = document.createElement("button");
    DKbutton.innerHTML = "DANSK";
    DKbutton.addEventListener("click", () => {
        storySetUp("DK");
    });

    // console.log(DKbutton);

    let SEbutton = document.createElement("button");
    SEbutton.innerHTML = "SVENSKA";
    SEbutton.addEventListener("click", () => {
        storySetUp("SE");
    });

    let FIbutton = document.createElement("button");
    FIbutton.innerHTML = "FINSKA";
    FIbutton.addEventListener("click", () => {
        storySetUp("FI");
    });

    let UKbutton = document.createElement("button");
    UKbutton.innerHTML = "ENGLISH";
    UKbutton.addEventListener("click", () => {
        storySetUp("UK");
    });

    myStoryElement.appendChild(DKbutton);
    myStoryElement.appendChild(SEbutton);
    myStoryElement.appendChild(FIbutton);
    myStoryElement.appendChild(UKbutton);
}

//
/* Opgave 3*/
// din kode her

const myListElement = document.getElementById("userSelect");
const myPostElement = document.getElementById("userPosts");

//entry point
// getUsers("https://jsonplaceholder.typicode.com/users");
