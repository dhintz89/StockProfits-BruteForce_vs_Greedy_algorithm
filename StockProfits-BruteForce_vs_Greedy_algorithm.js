// Problem:
// I want to know how much money I could have made yesterday if I'd been trading Apple stocks all day.
// So I grabbed Apple's stock prices from yesterday and put them in a list called stock_prices, where:
    // The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
    // The values are the price (in US dollars) of one share of Apple stock at that time.
        // So if the stock cost $500 at 10:30am, that means stock_prices[60] = 500.

// Write an efficient function that takes stock_prices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

// Solution:
  // BEST = greedy algorithm: loop once to compare current result to result from last step  ( bigO = O(n) )
  function getMaxProfit(stockPrices) {
    if(stockPrices.length > 1) {
        let min = Math.min(stockPrices[0], stockPrices[1]);
        let maxProfit = stockPrices[1] - stockPrices[0];
        
        for(i=2; i<stockPrices.length; i++) {
        let profit = stockPrices[i] - min;
        min = Math.min(min, stockPrices[i]);
        maxProfit = Math.max(maxProfit, profit);
        }
        
        return maxProfit;
    } else {
        throw "error, must be at least 2 values provided";
    }
  }
  


//   // ALTERNATE = brute force algorithm: nested loops to compare every buy/sell pairing within constraints ( bigO = O(nsquared) )
//   function getMaxProfit(stockPrices) {
//     if(stockPrices.length > 1) {
//         let largestSpread = stockPrices[1] - stockPrices[0];
//         for(buyIdx=0; buyIdx<stockPrices.length; buyIdx++) {
//             let subSpread = stockPrices[buyIdx + 1] - stockPrices[buyIdx];
        
//             for(sellIdx=buyIdx+1; sellIdx<stockPrices.length; sellIdx++) {
//                 if(stockPrices[sellIdx] - stockPrices[buyIdx] > subSpread) {
//                     subSpread = stockPrices[sellIdx] - stockPrices[buyIdx];
//                 }
//             }
    
//             if(subSpread > largestSpread) {
//                 largestSpread = subSpread;
//             }
//         }
//         return largestSpread;
//     } else {
//         throw "error, must be at least 2 values provided";
//     } 
//   }



// Tests

let desc = 'price goes up then down';
let actual = getMaxProfit([1, 5, 3, 2]);
let expected = 4;
assertEqual(actual, expected, desc);

desc = 'price goes down then up';
actual = getMaxProfit([7, 2, 8, 9]);
expected = 7;
assertEqual(actual, expected, desc);

desc = 'price goes up all day';
actual = getMaxProfit([1, 6, 7, 9]);
expected = 8;
assertEqual(actual, expected, desc);

desc = 'price goes down all day';
actual = getMaxProfit([9, 7, 4, 1]);
expected = -2;
assertEqual(actual, expected, desc);

desc = 'price stays the same all day';
actual = getMaxProfit([1, 1, 1, 1]);
expected = 0;
assertEqual(actual, expected, desc);

desc = 'error with empty prices';
const emptyArray = () => (getMaxProfit([]));
assertThrowsError(emptyArray, desc);

desc = 'error with one price';
const onePrice = () => (getMaxProfit([1]));
assertThrowsError(onePrice, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}