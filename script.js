const buttons = document.querySelectorAll(".button");
const result = document.getElementById("result");
const delBtn = document.querySelector(`[data-symbol="delete"]`);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    result.innerText += e.target.dataset.symbol;

    if (result.innerText.length > 1 && result.innerText[0] === "0") {
      result.innerText = result.innerText.slice(1);
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
  // Use split for convert our string (textContent) to an array //
  let arrayResult = result.textContent.split("");
  // Use splice method for erase 'd''e''l''e''t''e' letters and last number //
  arrayResult.splice(-7);                         

  // Use join method for convert our array to a string for (textContent) //
  let newResult = arrayResult.join('');
  result.textContent = newResult;

  return newResult;
});



const switchTheme = document.getElementById("switch-theme");

/*
switchTheme.addEventListener('click', () => {
});
*/