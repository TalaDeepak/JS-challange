function passwordValidate(password) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const isValid = regex.test(password);

  console.log(isValid);
}

function validateURL(str) {
  const regex =
    /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})(\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]*)?$/;

  const isValid = regex.test(str);

  console.log(isValid);
}

passwordValidate("Passw0rd!");
passwordValidate("password");
validateURL("https://www.example.com");
validateURL("invalid-url");
