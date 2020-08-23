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
return sol[sum-1]
}

console.log(minChange([1,2,5],11))