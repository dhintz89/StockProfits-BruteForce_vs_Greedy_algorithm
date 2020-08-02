# StockProfits-BruteForce_vs_Greedy_algorithm
Comparison of an implementation of a Brute Force and a Greedy Algorithm to solve the same problem.

 Problem:
 I want to know how much money I could have made yesterday if I'd been trading Apple stocks all day.
 So I grabbed Apple's stock prices from yesterday and put them in a list called stock_prices, where:
     The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
     The values are the price (in US dollars) of one share of Apple stock at that time.
         So if the stock cost $500 at 10:30am, that means stock_prices[60] = 500.

 Write an efficient function that takes stockPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

Problem Source: [Interview Cake](https://www.interviewcake.com)
