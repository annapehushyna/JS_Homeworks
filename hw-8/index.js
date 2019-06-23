// PART 1

var p = document.createElement("p");
document.body.appendChild(p);
var counter = 100;
function clock() {
  if (counter--) {
    p.textContent = new Date().toLocaleTimeString();
  } else {
    p.textContent = "The End";
    return;
  }
  setTimeout(clock, 1000);
}
clock();

// PART 2

var typeMessage = (function(velocity) {
  let container =
    document.getElementById("demo") ||
    document.body.appendChild(document.createElement("h3"));
  container.style = `color: magenta;`;

  return function printCharacter(message) {
    if (message.length === 0) return;
    container.textContent += message[0];
    setTimeout(
      () => printCharacter(message.slice(1)),
      message[0] === " " ? 0 : velocity * 1000
    );
  };
})(1);

typeMessage(`Welcome to the hell`);

// PART 3
var currentCount = 0;
function User(name) {
  currentCount++;
  this.name = name;
  this.id = this.counter();
}

User.prototype.counter = function() {
  return this.id || currentCount;
};

var users = [
  new User("Семен"),
  new User("Антон"),
  new User("Демьян"),
  new User("Василий")
];
