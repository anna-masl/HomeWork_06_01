/*Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
                func(" hello world", ['l', 'd']) поверне нам "heo wor".
                Вихідний рядок та символи для видалення задає користувач.*/

const lineUserInput = prompt('Enter your text');
const lettersUserInput = prompt('Enter letters for deleting');
let massiveOfLetters;

debugger;
console.log(lineUserInput, lettersUserInput);

function isNotEmptyString(lineUserInput) {
  return lineUserInput?.trim();
}
function makeMassiveOfLetters(lettersUserInput) {
  if (isNotEmptyString(lettersUserInput)) {
    massiveOfLetters = lettersUserInput.split('');
    console.log(massiveOfLetters);
    return massiveOfLetters;
  }
}

function getCleanRow(lineUserInput, massiveOfLetters) {
  if (isNotEmptyString(lineUserInput)) {
    let outputLine = lineUserInput;
    for (let i = 0; i < lettersUserInput.length; i++) {
      let symbolForReplace = massiveOfLetters[i];
      outputLine = outputLine.replaceAll(symbolForReplace, '');
    }
    alert(outputLine);
    console.log(outputLine);
  }
}

getCleanRow(lineUserInput, makeMassiveOfLetters(lettersUserInput));
console.log(lineUserInput, massiveOfLetters);
