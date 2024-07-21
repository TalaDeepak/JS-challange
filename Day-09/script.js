let head = document.getElementById("head");
head.textContent = "New content is being displayed";

document.getElementsByClassName("text")[0].style.backgroundColor = "lightblue";

let div = document.createElement("div");
div.textContent = "This div is created usign js";

document.body.appendChild(div);

let list = document.createElement("li");
list.textContent = "Second item";

document.getElementById("list").appendChild(list);

document.getElementById("article").remove();

let container = document.querySelector(".container");
if (container.lastChild) {
  container.removeChild(container.lastElementChild);
}

document
  .querySelector("img")
  .setAttribute("src", "https://via.placeholder.com/300");

head.classList.add("seven");

let button = document.getElementById("button");

button.addEventListener("click", function () {
  head.style.color = "red";
});

let myElement = document.getElementById("myElement");

// Add an event listener for the mouseover event
myElement.addEventListener("mouseover", function () {
  // Change the border color on mouseover
  myElement.style.borderColor = "red";
});

// Add an event listener for the mouseout event
myElement.addEventListener("mouseout", function () {
  // Reset the border color on mouseout
  myElement.style.borderColor = "black";
});
