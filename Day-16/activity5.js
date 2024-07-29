function inOrder(root) {
  if (root == null) {
    return;
  }
  inOrder(root.left);
  console.log(root.data);
  inOrder(root.right);
}

function depth(root) {
  if (root == null) {
    return 0;
  }

  let left = depth(root.left);
  let right = depth(root.right);

  return Math.max(left, right) + 1;
}
