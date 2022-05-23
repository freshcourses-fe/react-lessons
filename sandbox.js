/*
  Каррирование - преобразование функции с n аргументов
  к набору из n функций с 1 аргументом

  Каррирование - процесс уменьшения арности функции
  арности функции - количество аргументов у функции

  
  connect(func1, func2)(Component)
  */

function sum(a, b, c) {
  return a + b + c;
}

const res1 = sum(10, 5, 30);
console.log(res1);

function curriedSum(a) {
  return function withB(b) {
    return function withC(c) {
      return a + b + c;
    };
  };
}

const subResult1 = curriedSum(10);

const subResult2 = subResult1(5);

const res2 = subResult2(30);


console.log(res2);

const altCurriedSum = (a) => (b) => (c) => a + b + c;

const res3 = altCurriedSum(10)(5)(30);

console.log(res3)


function calculatePrice(priceOfOne = 1000, amount = 10, discount = 0.1) {
  return priceOfOne * amount - priceOfOne * amount * discount;
}

function curriedPriceCalc(priceOfOne, test) {
  return function (amount) {
    return function (discount) {
      return priceOfOne * amount - priceOfOne * amount * discount;
    };
  };
}

// const withPrice1000 = curriedPriceCalc(1000);

// const withPrice1000AndAmount5 = withPrice1000(5);

// const withPrice1000AndAmount5And20PercentDiscount =
//   withPrice1000AndAmount5(0.2);
// const withPrice1000AndAmount5And50PercentDiscount =
//   withPrice1000AndAmount5(0.5);
// console.log(withPrice1000AndAmount5And50PercentDiscount);
