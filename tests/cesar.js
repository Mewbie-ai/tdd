function cesar(str, amount) {
  
  if (amount < 0)
    return cesar(str, amount + 26);
  
  // variable to store the result
  var res = '';
  // iterate over the string
  for (var i = 0; i < str.length; i++) {
    // Get the character that we are going to add
    var c = str[i];
    // Check if it's a letter
    if (c.match(/[a-z]/i)) {
      // Get the letter's code
      var code = str.charCodeAt(i);
      // Capital letters
      if ((code >= 65) && (code <= 90))
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      // Lowercase letters
      else if ((code >= 97) && (code <= 122))
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
    }
    // Add the character
    res += c;
  }
  // Result
  return res;
};

module.exports = cesar;
