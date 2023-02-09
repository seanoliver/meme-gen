document.addEventListener('DOMContentLoaded', function() {
  const memeRoll = document.getElementById('meme-roll');

  const formBlock = document.querySelector("form");

  /* -------------------------------------------------------------------------- */
  /*                         Submit form Event Listener                         */
  /* -------------------------------------------------------------------------- */

  formBlock.addEventListener("submit", function(event) {
    event.preventDefault();

    const imageURL = document.querySelector('#image-url');
    const topText = document.querySelector('#top-text');
    const bottomText = document.querySelector('#bottom-text');

    /* -------------------------------------------------------------------------- */
    /*                  Add Random Cat Image if Image Field Blank                 */
    /* -------------------------------------------------------------------------- */

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

    /* -------------------------------------------------------------------------- */
    /*                        Add Random Text if Text Blank                       */
    /* -------------------------------------------------------------------------- */

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

    const newMeme = addMeme(imageURL, topText, bottomText);
    addOverlay(newMeme);
    clearForm(imageURL, topText, bottomText);
  });


  /* -------------------------------------------------------------------------- */
  /*                        Add Meme to Meme Roll Section                       */
  /* -------------------------------------------------------------------------- */

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

    return memeContainer;

  }

  /* -------------------------------------------------------------------------- */
  /*                              Add Close Overlay                             */
  /* -------------------------------------------------------------------------- */

  function addOverlay(meme) {
    const overlayDiv = document.createElement("div");
    overlayDiv.style.backgroundColor = "rgba(0, 148, 180, 0.3)";
    overlayDiv.style.position = "absolute";
    overlayDiv.style.top = "0";
    overlayDiv.style.left = "0";
    overlayDiv.style.width = "100%";
    overlayDiv.style.height = "100%";
    overlayDiv.style.display = "none";
    overlayDiv.style.borderRadius = "5px";
    overlayDiv.style.justifyContent = "space-around";
    overlayDiv.style.alignItems = "center";
    overlayDiv.classList.add = "remove-meme"

    const closeIcon = document.createElement('img');
    closeIcon.src = 'assets/close.png';
    closeIcon.style.width = '50px';
    closeIcon.style.height = '50px';
    overlayDiv.appendChild(closeIcon);

    meme.appendChild(overlayDiv);
    meme.addEventListener("mouseenter", function(event) {
      event.target.lastElementChild.style.display = "flex";
    });

    meme.addEventListener("mouseleave", function(event) {
      event.target.lastElementChild.style.display = "none";
    });

    const memeRemovalDiv = meme.lastElementChild;

    memeRemovalDiv.addEventListener("click", function(event) {

        if (event.target.parentElement.classList.contains("meme-item")) {
          event.target.parentElement.remove();
        } else {
          event.target.parentElement.parentElement.remove();
        }
    })

  }

  /* -------------------------------------------------------------------------- */
  /*                         Clear the form after submit                        */
  /* -------------------------------------------------------------------------- */

  function clearForm(imageURL, topText, bottomText) {
    imageURL.value = "";
    topText.value = "";
    bottomText.value = "";
  }
});
