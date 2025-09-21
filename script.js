let quotes = [
  "The best way to predict the future is to invent it.",
  "Do what you can, with what you have, where you are.",
  "Happiness depends upon ourselves.",
  "Turn your wounds into wisdom.",
  "You only have today, make it count",
  "All the strength you need is inside of you",
  "Take care of your mind and body, it is the only place where you can live",
];

function getRandomQuote() {
  let index = Math.floor(Math.random() * quotes.length);
  return quotes[index]; // returns a random string
}

function showRandomQuote() {
  document.getElementById("quoteBox").textContent = getRandomQuote();
}
