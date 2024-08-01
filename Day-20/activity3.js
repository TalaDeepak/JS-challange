document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("mail");

  let n = name.value;
  let em = email.value;

  let details = { name: n, email: em };
  sessionStorage.setItem("details", JSON.stringify(details));
  name.value = "";
  email.value = "";
});

function set() {
  sessionStorage.setItem("ke", "this is value");
  console.log(sessionStorage.getItem("ke"));
}

set();

function get(key = "details") {
  let isObject = typeof sessionStorage.getItem(key) === "object";
  return isObject
    ? JSON.parse(sessionStorage.getItem(key))
    : sessionStorage.getItem(key);
}
get();

function getAllItems() {
  const keys = Object.keys(sessionStorage);
  let res = keys.map((el) => get(el));
  console.log(res);
}

document.getElementById("remove").addEventListener("click", function () {
  console.log("Session storage before");
  getAllItems();
  sessionStorage.removeItem("ke");
  console.log("Session storage After");
  getAllItems();
});
