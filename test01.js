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
        j++;
        arrayResult[j] = i;
        console.log(i);
      }
    } else { return console.log("error: step is 0") }
  } else { return console.log("error: unreachable") }
  return arrayResult;
}

//filter(-3, 15, 1);

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
  let count=0;
  for (let value of array) {
    if (!uniqueArray.includes(value)) {
      uniqueArray.push(value);
      count=1;
      console.log(uniqueArray)
      
    }
  }
}
getLetters([5,5,5,3,4,2,5,6,32,432,7,5,23])