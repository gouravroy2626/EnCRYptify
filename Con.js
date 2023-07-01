function encrypt(input) {
  let encrypted = "";
  for (let i = 0; i < input.length; i++) {
    let c = input.charAt(i);
    let encryptedChar = String.fromCharCode(c.charCodeAt(0) ^ (i + 1));
    encrypted += encryptedChar;
  }
  return encrypted;
}

function decrypt(encrypted) {
  let decrypted = "";
  for (let i = 0; i < encrypted.length; i++) {
    let c = encrypted.charAt(i);
    let decryptedChar = String.fromCharCode(c.charCodeAt(0) ^ (i + 1));
    decrypted += decryptedChar;
  }
  return decrypted;
}

document.addEventListener("DOMContentLoaded", function() {
  let encryptionInput = document.getElementById("encryption-text");
  let decryptionInput = document.getElementById("decryption-text");
  let encryptButton = document.getElementById("encrypt-button");
  let decryptButton = document.getElementById("decrypt-button");
  let encryptionResult = document.getElementById("encryption-result-text");
  let decryptionResult = document.getElementById("decryption-result-text");

  encryptButton.addEventListener("click", function() {
    let input = encryptionInput.value;
    let encrypted = encrypt(input);
    encryptionResult.value = encrypted;
  });

  decryptButton.addEventListener("click", function() {
    let input = decryptionInput.value;
    let decrypted = decrypt(input);
    decryptionResult.value = decrypted;
  });
});
