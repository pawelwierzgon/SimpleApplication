function sayHello(hour) {
  let output = "";

  if (hour >= 6 && hour < 12) {
    output = "Good morning!";
  }

  if (hour >= 12 && hour < 17) {
    output = "Good afternoon!";
  }

  if (hour >= 17 && hour < 21) {
    output = "Good evening!";
  }

  if ((hour >= 21 && hour < 24) || (hour >= 0 && hour < 6)) {
    output = "Good night!";
  }

  return output;
}

module.exports = { sayHello };
