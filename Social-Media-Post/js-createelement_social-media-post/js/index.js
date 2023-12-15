console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPost = document.createElement("section");
newPost.classList.add("post");
document.body.append(newPost);

const text = document.createElement("p");
text.classList.add("post__content");
newPost.append(text);
text.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.';

const footer = document.createElement("footer");
text.classList.add("post__footer");
newPost.append(footer);

const span = document.createElement("span");
span.classList.add("post__username");
footer.append(span);
span.innerHTML = "@username2";

const button = document.createElement("button");
button.classList.add("post__button");
footer.append(button);
button.innerHTML = "♥ Like";

button.addEventListener("click", handleLikeButtonClick);


//console.log(foot);
