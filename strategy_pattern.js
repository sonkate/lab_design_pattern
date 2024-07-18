function midMonthSale(price) {
  return price * 0.9;
}

function startMonthSale(price) {
    return price * 0.95;
  }

function lastMonthSale(price) {
    return price * 0.85;
}

function blackFridaySale(price) {
    return price * 0.6;
}

const strategy = new Map([
    ['midMonthSale', midMonthSale],
    ['startMonthSale', startMonthSale],
    ['lastMonthSale', lastMonthSale],
    ['blackFridaySale', blackFridaySale]
    ]);

function salePrice(price, strategyName) {
    return strategy.get(strategyName)(price);
}

console.log(salePrice(100, 'midMonthSale'));
console.log(salePrice(100, 'startMonthSale'));
console.log(salePrice(100, 'lastMonthSale'));
console.log(salePrice(100, 'blackFridaySale'));