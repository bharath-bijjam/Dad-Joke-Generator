

const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "dN+fu6fK0tIZk+sbE1LMjg==MSgbbsBVypuIZk9X";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
    try {
        jokeEl.innerText="please Wait ...";
        btnEl.disabled=true;
        btnEl.innerText="Loading ....";
        const response = await fetch(apiURL, options);
        const data = await response.json();
        jokeEl.innerText=data[0].joke;
        btnEl.disabled=false;
        btnEl.innerText="Tell Me a Joke";
    } catch (error) {
        jokeEl.innerText="An Error Happens try again later";
        btnEl.disabled=false;
        btnEl.innerText="Tell Me a Joke";
        console.log(error);
    }

}

btnEl.addEventListener("click", getJoke);