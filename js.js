// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Знайти суму та кількість позитивних елементів.
// Знайти мінімальний елемент масиву та його порядковий номер.
// Знайти максимальний елемент масиву та його порядковий номер.
// Визначити кількість негативних елементів.
// Знайти кількість непарних позитивних елементів.
// Знайти кількість парних позитивних елементів.
// Знайти суму парних позитивних елементів.
// Знайти суму непарних позитивних елементів.
// Знайти добуток позитивних елементів.
// Знайти найбільший серед елементів масиву, остльні обнулити.

const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let i = 0,
  sum = 0,
  countPos = 0,
  countNeg = 0,
  min = Infinity,
  minI = 0,
  max = -Infinity,
  maxI = 0,
  countEven = 0,
  countOdd = 0,
  sumEven = 0,
  sumOdd = 0,
  mult = 1;
for (; i < arr.length; i++) {
  if (arr[i] > 0) {
    sum += arr[i];
    countPos++;
    arr[i] % 2 ? (countEven++, (sumEven += arr[i])) : (countOdd++, (sumOdd += arr[i]));
    mult *= arr[i];
  }
  if (arr[i] < 0) {
    countNeg++;
  }
  if (arr[i] < min) {
    min = arr[i];
    minI = i;
  }
  if (arr[i] > max) {
    max = arr[i];
    maxI = i;
  }
  if (i === arr.length - 1) {
    console.log("Сума: ", sum, ", кількість: ", countPos);
    console.log("Мінімальний елемент масиву: ", min, ", його порядковий номер: ", minI + 1);
    console.log("Максимальний елемент масиву: ", max, ", його порядковий номер: ", maxI + 1);
    console.log("Кількість негативних елементів: ", countNeg);
    console.log(
      "Кількість непарних позитивних елементів: ",
      countOdd,
      ", сума непарних позитивних елементів: ",
      sumOdd
    );
    console.log("Кількість парних позитивних елементів: ", countEven, ", сума парних позитивних елементів: ", sumEven);
    console.log("Добуток позитивних елементів: ", mult);
    console.log(
      arr.map((e) => {
        if (e === max) {
          return e;
        }
        return 0;
      })
    );
  }
}
