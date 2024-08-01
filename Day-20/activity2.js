document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("mail");

  let n = name.value;
  let em = email.value;

  let details = { name: n, email: em };
  localStorage.setItem("details", JSON.stringify(details));
  name.value = "";
  email.value = "";
});

function getDetils(key = "details") {
  let isObject = typeof localStorage.getItem(key) === "object";
  return isObject
    ? JSON.parse(localStorage.getItem(key))
    : localStorage.getItem(key);
}

function getAllItems() {
  const keys = Object.keys(localStorage);
  let res = keys.map((el) => getDetils(el));
  console.log(res);
}

document.getElementById("remove").addEventListener("click", function () {
  console.log("Local storage before");
  getAllItems();
  localStorage.removeItem("details");
  console.log("Local storage After");
  getAllItems();
});
// console.log(getDetils());
