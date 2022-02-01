const form = document.querySelector("form");
const imageInput = document.querySelector('input[name="image"]');
const oldMemes = document.getElementById("meme");
const toptextInput = document.querySelector('input[name="topText"]');
const bottomtextInput = document.querySelector('input[name="bottomText"]');
//const memeList = document.querySelector("#meme");

form.addEventListener('submit', function(e) {
	e.preventDefault();
	const newMeme = makeMeme(
		imageInput.value,
        toptextInput.value,
        bottomtextInput.value
	);
   
	oldMemes.appendChild(newMeme);
    form.reset();
});


function makeMeme(image, topT, topB) {
	const meme = document.createElement('div');
    const images = document.createElement('img');
    const topTex = document.createElement('div');
    meme.classList.add("meme");
    topTex.classList.add("top");
    //images.classList.add("image")
    images.src = imageInput.value;
    topTex.innerText = toptextInput.value;
    meme.appendChild(topTex);
    meme.appendChild(images);
    const bottomTex = document.createElement('div');
    bottomTex.classList.add("bottom");
    bottomTex.innerText = bottomtextInput.value;
    meme.appendChild(bottomTex);
    const newButton = document.createElement("button");
    newButton.innerText = "Remove";
    meme.append(newButton);
    
    //image.style.width = '100px';
	return meme;
}

oldMemes.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
      event.target.parentElement.remove();
    }
  }); 