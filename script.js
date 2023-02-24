const jokeElement = document.getElementById("joke");
const get_joke = document.getElementById("get_joke");

generateJoke();

get_joke.addEventListener("click", generateJoke);

async function generateJoke() {
  const jokeRes = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  const joke = await jokeRes.json();

  jokeElement.innerHTML = joke.joke;
}
