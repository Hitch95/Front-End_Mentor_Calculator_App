const buttons = document.querySelectorAll(".button");
const result = document.getElementById("result");
const delBtn = document.getElementById("delete");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    result.innerText += e.target.dataset.symbol

    if (result.innerText.length > 1 && result.innerText[0] === "0") {
        result.innerText = result.innerText.slice(1)
    }
  });
});

equal.addEventListener("click", () => {
  result.innerText = eval(result.innerText);
});

reset.addEventListener("click", () => {
  result.innerText = "";
});

delBtn.addEventListener("click", (e) => {
    if (result.innerText.length === 1 && result.innerText === "0") {
        return
    }

    result.innerText = result.innerText.slice(0, -1)

    if (result.innerText <= 0) {
        result.innerText = "0"
    }
});

const switchTheme = document.getElementById("switch-theme");

/*
switchTheme.addEventListener('click', () => {

});
*/

