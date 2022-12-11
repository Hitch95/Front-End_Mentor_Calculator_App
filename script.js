const buttons = document.querySelectorAll(".button");
const result = document.getElementById("result");
const delBtn = document.getElementById("delete");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    result.textContent += e.target.id;
  });
});

equal.addEventListener("click", () => {
  result.textContent = eval(result.textContent);
});

reset.addEventListener("click", () => {
  result.textContent = "";
});

delBtn.addEventListener("click", (e) => {
    // Use split for convert our string (textContent) to an array //
    let arrayResult = result.textContent.split("");
    // Use splice method for erase 'd''e''l''e''t''e' letters and last number //
    arrayResult.splice(-7);                         

    // We put a 0 if there is none number
    if (arrayResult.length == 0) {
        arrayResult.push("0");
    }

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
