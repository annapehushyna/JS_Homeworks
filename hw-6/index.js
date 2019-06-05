// Part 1

var tags = ["div", "span", "h3", "p", "h1"];
var classes = ["demo", "nemo", "emo", "remo", "lemo"];

var style = document.createElement("style");
style.textContent = `
    .demo { color:red;}
    .nemo { font-size: 32px;}
    .emo { background-color: black; color: pink;}
    .remo { color:blue;}
    .lemo { letter-spacing:5px;}
`;

document.head.appendChild(style);

tags.forEach((tagName, index) => {
  var elem = document.createElement(tagName);
  elem.classList.add(classes[index]);
  elem.innerText = tagName;
  document.body.appendChild(elem);
});

// Part 2

var tags = [
  {
    tagName: "div",
    class: "demo",
    id: "elem1",
    text: "First element",
    handler: () => console.log("Hello from div")
  },
  {
    tagName: "span",
    class: "nemo",
    id: "elem2",
    text: "Second element",
    handler: () => console.log("Hello from  span")
  },
  {
    tagName: "h3",
    class: "emo",
    id: "elem3",
    text: "Third element",
    handler: () => console.log("Hello from  h3")
  },
  {
    tagName: "p",
    class: "remo",
    id: "elem4",
    text: "Fourth element",
    handler: () => console.log("Hello from  p")
  },
  {
    tagName: "h1",
    class: "lemo",
    id: "elem5",
    text: "Fifth element",
    handler: () => console.log("Hello from  h1")
  }
];

tags.forEach(config => {
  var elem = document.createElement(config.tagName);
  elem.classList.add(config.class);
  elem.innerText = config.text;
  elem.setAttribute("id", config.id);
  elem.addEventListener("click", config.handler);
  document.body.appendChild(elem);
});

// Part 3

var tags = ["header", "footer", "main", "div", "p"];

var style = document.createElement("style");
style.textContent = `
    .redBack {
        background-color: red!important;
    }
`;
document.head.appendChild(style);

tags.forEach(tagName => {
  var elements = document.body.getElementsByTagName(tagName);
  for (var elem of elements) {
    elem.classList.add("redBack");
  }
});
