document.addEventListener('DOMContentLoaded', function() {
  const memeRoll = document.getElementById('meme-roll');

  const formBlock = document.querySelector("form");
  formBlock.addEventListener("submit", function(event) {
    event.preventDefault();

    const imageURL = document.querySelector('#image-url');
    const topText = document.querySelector('#top-text');
    const bottomText = document.querySelector('#bottom-text');

    if (!imageURL.value) {
      const randomCats = [
        'https://images.unsplash.com/photo-1597237154674-1a0d2274cef4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
        'https://images.unsplash.com/photo-1641378588520-f30c0c36ef84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80',
        'https://images.unsplash.com/photo-1555008872-f03b347ffb53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
        'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      ]
      imageURL.value = randomCats[Math.floor(Math.random() * randomCats.length)];
    }

    if (!topText.value && !bottomText.value) {
      const randomTopText = [
        "I don't think that memes",
        "I am silently",
        "Free shipping",
        "Drop",
        "What if I told you"
      ]
      const randomBottomText = [
        "What you think it memes",
        "Correcting your grammar",
        "Except in Hawaii and Alaska",
        "The bass",
        "'The Cloud' is just someone else's computer"
      ]
      const rand = Math.floor(Math.random() * randomTopText.length)
      topText.value = randomTopText[rand];
      bottomText.value = randomBottomText[rand];
    }

    addMeme(imageURL, topText, bottomText);

    imageURL.value = "";
    topText.value = "";
    bottomText.value = "";
  });

  function addMeme(imageURL, topText, bottomText) {
    const memeContainer = document.createElement('div');
    memeContainer.classList.add('meme-item');

    const memeImage = document.createElement('img');
    memeImage.src = imageURL.value;

    const topLine = document.createElement('div');
    const bottomLine = document.createElement('div');

    memeContainer.appendChild(memeImage);
    memeContainer.appendChild(topLine);
    memeContainer.appendChild(bottomLine);


    topLine.classList.add('top-line');
    topLine.innerText = topText.value.toUpperCase();

    bottomLine.classList.add('bottom-line');
    bottomLine.innerText = bottomText.value.toUpperCase();
    memeRoll.appendChild(memeContainer);

  }
});
