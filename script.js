const buttons = document.querySelectorAll(".button");
const result = document.getElementById("result");
const delBtn = document.querySelector(`[data-symbol="delete"]`);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    result.innerText += e.target.dataset.symbol;
  });
});

equal.addEventListener("click", () => {
  result.innerText = eval(result.innerText);
});

reset.addEventListener("click", () => {
  result.innerText = "";
});

delBtn.addEventListener("click", (e) => {
  // Use split for convert our string (textContent) to an array //
  let arrayResult = result.textContent.split("");
  // Use splice method for erase 'd''e''l''e''t''e' letters and last number //
  arrayResult.splice(-7);

  // Use join method for convert our array to a string for (textContent) //
  let newResult = arrayResult.join("");
  result.textContent = newResult;

  return newResult;
});


// Switch Theme Part. //
const links = document.querySelectorAll("link");
const themeBtn = document.querySelectorAll("input");

function changeTheme(i) {
  if (i === "1") {
    links[2].setAttribute("href", `./style.css`);
  } else if (i === "2") {
    links[2].setAttribute("href", `./theme_two.css`);
  } else if (i === "3") {
    links[2].setAttribute("href", `./theme_three.css`);
  }
}

themeBtn.forEach(btn => {
  btn.addEventListener("click", () => {
      changeTheme(btn.value);
  });
})