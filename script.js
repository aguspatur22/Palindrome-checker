const inputText = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

const arraysAreEqual = (arr1, arr2) => arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);

function clearInput(text) {
  let clearText = text.replace(/[^0-9a-z]/gi, '');
  return clearText.toLowerCase();
}

function isPalindrome(input) {
  if (input) {
    const text = clearInput(input).split("");
    const reversed = [...text].reverse();
    if (arraysAreEqual(text,reversed)) {
      result.innerHTML = `<p><strong>${input}</strong> is a palindrome<p>`;
    } else {
      result.innerHTML = `<p><strong>${input}</strong> is not a palindrome`;
    }
    result.classList.remove("hidden");
  } else {
    result.classList.add("hidden");
    result.innerHTML = "";
    alert("Please input a value");
  }
}

checkButton.addEventListener("click", () => {
  isPalindrome(inputText.value);
});
