//promises pending, fulfilled, rejected

/* const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if(!error) {
        resolve("Yes! resolved the promise!");
    } else {
        reject("No! rejected the promise.");
    }
}); */

/* console.log(myPromise);

myPromise
.then((value) => {
    return value + 1;
})
.then((newValue) => {
    console.log(newValue);
})
.catch(err => {
    console.error(err);
}) */


/* const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("MyNext promise resolved!");
    }, 3000);
});

myNextPromise.then(value => {
    console.log(value);
});


myPromise.then(value => {
    console.log(value);
}); */

/* const users = fetch("https://jsonplaceholder.typicode.com/users");

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
    //console.log(response);
    return response.json();
    return jsonUserData;
})
.then(data => {
    //console.log(data);
    data.forEach(user => {
        console.log(user);
    })
})

console.log(users); */

/* const myUsers = {
    userList : []
}

const myCoolFunction = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    return jsonUserData;
}

const anotherFunc = async () => {
    const data = await myCoolFunction();
    myUsers.userList = data;
    console.log(myUsers.userList);
}

anotherFunc();
console.log(myUsers.userList); */

/* const getAllUserEmails  = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();

    const userEmailArray = jsonUserData.map(user => {
        return user.email;
    })

    postToWebPage(userEmailArray);
}

const postToWebPage = (data) => {
    console.log(data);
}

getAllUserEmails(); */

const getDataFromForm = () => {
    const requestObj = {
        firstName : "Zoro",
        lastname : "Roronoa",
        categories : ["nerdy"]
    };
    return requestObj;
}

const buildRequestUrl = (requestData) => {
    return `https://api.chucknorris.io/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
}

/* const jokeObject = {id: 'NRfxXvkbFtc', 
joke: "As I get older, I think of all the people I lost a…a career as a tour guide wasn't such a good idea."} */

const requestJoke = async(url) => {
    const response = await fetch(url); 
    const jsonResponse = await response.json();
    const joke = jsonResponse.value;
    postJokeToPage(joke);
}

const postJokeToPage = (joke) => {
    console.log(joke);
}

const processJokeRequest = async () => {
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke(requestUrl);
    console.log("finished");
}

processJokeRequest();
