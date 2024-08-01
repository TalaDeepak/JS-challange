function add(key, val) {
  localStorage.setItem(key, val);
  sessionStorage.setItem(key, val);
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault();
  add("Tala", "I am working to make my parents enjoy there rest of life");
});

document.getElementById("remove").addEventListener("click", function () {
  sessionStorage.clear();
  localStorage.clear();
  console.log(sessionStorage.length === 0 && localStorage.length === 0);
});
