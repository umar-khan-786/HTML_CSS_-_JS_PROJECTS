const quote = document.querySelector(".quote");
const author = document.querySelector(".author p");
const getQuoteBtn = document.querySelector(".get_quote");
const loading = document.querySelector(".loading");
const quoteContent = document.querySelector(".quote_content");
const tweetBtn = document.querySelector(".tweet");
async function getRandomQuote() {
  loading.style.display = "block";
  quoteContent.style.display = "none";
  const api = "https://api.quotable.io/random";
  const response = await fetch(api);
  const data = await response.json();
  loading.style.display = "none";
  quoteContent.style.display = "block";
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=Hello%20world" +
      quote.innerHTML +
      " ---- by " +
      author.innerHTML,
    "Tweeter Window",
    "width=600",
    "height=300"
  );
}

getQuoteBtn.addEventListener("click", getRandomQuote);
tweetBtn.addEventListener("click", tweet);
getRandomQuote();
