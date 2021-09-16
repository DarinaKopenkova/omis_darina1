let loops = document.getElementById("loopsTotal");
let btn = document.querySelector('button[type="button"]');
let result = document.getElementById("result");

let colors = ["red", "blue", "pink", "yellow", "green", "black"];

btn = addEventListener("click", (event) => {
  result.innerHTML = "";
  if (loops.value > 0) {
    loop(0, loops.value);
  }
});

function loop(start, end) {
  if (start >= end) {
    console.log("loop end");
    return;
  } else {
    console.log("index ", start);

    let div = createDiv();
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    div.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    // div.style.backgroundColor =
    //   colors[Math.floor(Math.random() * colors.length)];
    div.style.margin = "5px";
    div.classList.add("box");
    result.innerHTML += div.outerHTML;

    loop(++start, end);
  }
}

function createDiv() {
  return document.createElement("div");
}
