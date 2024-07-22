let button = document.querySelector(".btn");
let para = document.querySelector(".para");
let image = document.querySelector(".img");
let centerContainer = document.querySelector(".center");
let centerPara = document.querySelector(".center-para");
let input = document.querySelector(".inp");
let form = document.querySelector(".signup-form");
let carSelect = document.querySelector("#cars");
let end = document.querySelector(".end");
let list = document.querySelector("#myList");
let parent = document.querySelector(".parent");

button.addEventListener("click", function () {
  para.textContent = "See this changed by clicking the button";
});

image.addEventListener("dblclick", function () {
  if (image.style.display == "none") {
    image.style.display = "block";
  } else {
    image.style.display = "none";
  }
  console.log("cli");
});

centerContainer.addEventListener("mouseover", function () {
  centerPara.style.color = "white";
  centerContainer.style.backgroundColor = "brown";
});

centerContainer.addEventListener("mouseout", function () {
  centerPara.style.color = "black";
  centerContainer.style.backgroundColor = "white";
});

input.addEventListener("keydown", function (e) {
  console.log(e.key);
});

input.addEventListener("keyup", function (e) {
  console.log(e.target.value);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let email = document.querySelector("#email").value;
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  let confPassword = document.querySelector("#confirm-password").value;

  console.log("Username:", username);
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("Confirm Password:", confPassword);
});

let p = document.createElement("p");
carSelect.addEventListener("change", function (e) {
  p.textContent = e.target.value;
  end.appendChild(p);
});

list.addEventListener("click", function (e) {
  if (list.contains(e.target)) {
    console.log(e.target.textContent);
  }
});

parent.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("child")) {
    console.log("text is : ", e.target.textContent);
  }
});

document
  .getElementById("addChildButton")
  .addEventListener("click", function () {
    let child = document.createElement("div");
    child.classList.add("child");
    child.textContent = "Newely added child";
    parent.appendChild(child);
  });
