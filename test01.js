//test 01 

// Напиши функцию, которая по переданным начальному значению (from), конечному значению (to) и шагу (step), вернет сгенерированный массив. 
// Пример 1:
// входные данные: from: 1, to: 6, step: 2
// результат: 1, 3, 5
// Пример 2:
// входные данные: from: -1, to: 8, step: 3
// результат: -1, 2, 5, 8


function filter(from, to, step) {
  const arrayResult = [];
  let j = 0;
  if (from <= to) {
    if (step != 0) {
      for (let i = from; i <= to; i += step) {

        arrayResult[j] = i;
        j++;
        //console.log(i);
      }
    } else { return console.log("error: step is 0") }
  } else { return console.log("error: unreachable") }
  console.log(arrayResult)
  return arrayResult;
}

//filter(-1, -10, 1);

// Напиши функцию, которая на вход принимает массив чисел и возвращает информацию: какие элементы в массиве есть и сколько раз они встречаются.
// Пример:
// 	входные данные: 6, 4, 9, -30, 6, 9, 9
// 	результат: 
// 		4: 1
// 		9: 3
// 		-30: 1
// 		6: 2

function getLetters(array) {
  let resultArray = [];
  let uniqueArray = [];
  let count = 0;
  for (let value of array) {
    if (!uniqueArray.includes(value)) {
      uniqueArray.push(value);
      console.log(value)
    }
  }
  for (let uniqValue of uniqueArray) {
    for (let value of array) {
      if (uniqValue == value) {
        count++;
      }
    } 
    console.log(uniqValue, ": ", count);
    count = 0;
  }
}
getLetters([6, 4, 9, -30, 6, 9, 9])