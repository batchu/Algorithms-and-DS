/*
https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=2903692913051025
Change in a Foreign Currency
You likely know that different currencies have coins and bills of different denominations. In some currencies, it's actually impossible to receive change for a given amount of money. For example, Canada has given up the 1-cent penny. If you're owed 94 cents in Canada, a shopkeeper will graciously supply you with 95 cents instead since there exists a 5-cent coin.
Given a list of the available denominations, determine if it's possible to receive exact change for an amount of money targetMoney. Both the denominations and target amount will be given in generic units of that currency.
Signature
boolean canGetExactChange(int targetMoney, int[] denominations)
Input
1 ≤ |denominations| ≤ 100
1 ≤ denominations[i] ≤ 10,000
1 ≤ targetMoney ≤ 1,000,000
Output
Return true if it's possible to receive exactly targetMoney given the available denominations, and false if not.
Example 1
denominations = [5, 10, 25, 100, 200]
targetMoney = 94
output = false
Every denomination is a multiple of 5, so you can't receive exactly 94 units of money in this currency.
Example 2
denominations = [4, 17, 29]
targetMoney = 75
output = true
You can make 75 units with the denominations [17, 29, 29].
*/
function minChange(coins,sum){
//Create an array of size sum and fill it with an arbrirary large number
const sol = Array(sum).fill(Math.max(...coins)+1)
//Solution for zero sum is zero coins. This needs to be filled as it's the base case
sol[0]=0
for(let i=0;i<sol.length;i++){
    /*To solve the problem for "sum", we will solve it for 0 (when we did above) then for 1, then 2... all the way to sum-2, sum-1, sum 
    aka dynamic programming.
    */
   for(let j=0;j<coins.length;j++){
            /*Check if the current coin (j) is equal or less in value to index i. 
            If the coin is larger than i, then obviously, you can't use the jth coin
            eg: for sol index 3, you can only pick a coin 1 or 2 or 3, you cannot pick anything over 3.
            */
           if(coins[j]<=i){
                //If you were to use the ith coin, subtract it from i
                const rem = i-coins[j]
                //We already calculated the minimum number of coins for the previous sub problem i.e sol[rem]. Grab it
                const solForRem=sol[rem]
                //We add one (1) to solForRem because we picked coin[j]. 
                /* Then, the minimum solution is the minimum of 1+solForRem and whatever previous solution we may have earlier 
                calculated at sol[i]
                */
                const minSol = Math.min(1+solForRem,sol[i])
                sol[i] = minSol
            }
    }

}
return sol[sum-1]>sum?false:sol[sum-1]
}

console.log(minChange([5, 10, 25, 100, 200],94)>0)