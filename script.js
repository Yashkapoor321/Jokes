console.log("hello");
const btn = document.getElementById("btn");
const joke = document.getElementById("joke");

const apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";
const information = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
    },
  };
  

async function tell_me_joke(){
try{
    joke.innerText = "updating...";
    btn.disabled = true;
    btn.innerText = "Loading...";
    const response = await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1", information);
    const data = await response.json();
    btn.disabled = false;
    btn.innerText = "Tell me a joke";
    joke.innerText = data[0].joke;
}catch(error){
    joke.innerText = "try again later";
    btn.disabled = false;
    btn.innerText = "Tell me a joke";
    console.log(error);
}
}

btn.addEventListener("click", tell_me_joke);