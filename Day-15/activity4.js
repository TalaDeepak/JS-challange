const itemManager = (function () {
  let items = [];

  function add(item) {
    items.push(item);
  }

  function remove(item) {
    let index = items.indexOf(item);
    if (index !== -1) {
      items.splice(index, 1);
    }
  }

  function getItems() {
    return items.slice();
  }

  return {
    add,
    remove,
    getItems,
  };
})();

itemManager.add("Rice");
itemManager.add("Apple");
itemManager.add("Wheat");
console.log(itemManager.getItems());
itemManager.remove("Apple");
console.log(itemManager.getItems());
