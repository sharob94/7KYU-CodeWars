/*
Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.

Write a function to help Leo out. The first parameter of the function is Leo's budget; the second one is an array containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.

Example:
Maximum budget: 20
Gift List: [13, 2, 4, 6, 1]
Should return 4.

_ NOTE: All numbers will be integers >= 0, and the array will never be empty. _



*/




function howManyGifts(maxBudget, gifts) {
    console.log(maxBudget, gifts)
    let count = 0
    let i = 0



    gifts = gifts.sort((a, b) => a - b)
    console.log(gifts[i])
    while (count <= maxBudget) {
        count += gifts[i]
        i++

        console.log(count)

    }


    return i - 1
}




  // max budget will always be positive , no floats, 
  //array will never be empty, integers will be greater than or equal to 0 
  // return the number of gifts that can be purchased
  // budget = 17  [17 ,5,10,2] => return 3

  // sort the maxBudget array 
  //  condional 