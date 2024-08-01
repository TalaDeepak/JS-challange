const key = "Tala";
function addTolocal(str) {
  localStorage.setItem(key, str);
}

function getFromlocal() {
  return localStorage.getItem(key);
}

function addObject(name, goal) {
  let life = { name, goal };
  localStorage.setItem("Life", JSON.stringify(life));
}

function getObject() {
  let res = localStorage.getItem("Life");
  console.log(JSON.parse(res));
}

console.log(getFromlocal());

addTolocal("this is the best");

addObject(
  "deepak tala",
  "get high paying job soon and make parents free for rest of there life"
);

getObject();
