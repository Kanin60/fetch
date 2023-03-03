const MyuserURI = 'https://jsonplaceholder.typicode.com/users';

fetch(MyuserURI).then(
        (response)=> {
            // console.log("responce'et vi kan se i console: ", response);
            return response.json();
        }
    ).then(
        (data) => {
            // console.log("Her er data: ", data); 
            //send data til en function og kald functionen. 
        }
    ).catch( //finder fejl tidligt
        (error) => {
            console.error(error);
        }
    );

