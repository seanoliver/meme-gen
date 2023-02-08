document.addEventListener('DOMContentLoaded', function() {
  const memeRoll = document.getElementById('meme-roll');

  const formBlock = document.querySelector("form");
  formBlock.addEventListener("submit", function(event) {
    event.preventDefault();

    const imageURL = document.querySelector('#image-url');
    const topText = document.querySelector('#top-text');
    const bottomText = document.querySelector('#bottom-text');

    addMeme(imageURL, topText, bottomText);
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
    topLine.innerText = topText.value;

    bottomLine.classList.add('bottom-line');
    bottomLine.innerText = bottomText.value;




    memeRoll.appendChild(memeContainer);

  }
});
