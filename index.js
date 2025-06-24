/*Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
                func(" hello world", ['l', 'd']) поверне нам "heo wor".
                Вихідний рядок та символи для видалення задає користувач.*/

const lineUserInput = prompt('Enter your text');
const lettersUserInput = prompt('Enter letters for deleting');

debugger

function checkAreTextString(lineUserInput) {
  if (
    lineUserInput === null ||
    !lineUserInput?.trim() ||
    typeof lineUserInput !== 'string'
  ) {
    return false;
  }
  return true;
}
function checkAreOnlyLetters(lettersUserInput) {
  if (
    lettersUserInput === null ||
    !lettersUserInput?.trim() ||
    typeof lettersUserInput !== 'string'
  ) {
    return false;
  }
  return true;
}

function getCleanRow(lineUserInput, lettersUserInput) {
  if (
    checkAreOnlyLetters(lettersUserInput) && checkAreTextString(lineUserInput)
  ) {
    const lengthOfLetters = lettersUserInput.length;
    let outputLine = lineUserInput;
    for (let i = 0; i < lengthOfLetters; i++) {
      let symbolForReplace = lettersUserInput[i];
      outputLine = outputLine.replace(symbolForReplace, '');
      console.log(outputLine);
    }
    alert(outputLine);
  }
}
getCleanRow(lineUserInput, lettersUserInput);
