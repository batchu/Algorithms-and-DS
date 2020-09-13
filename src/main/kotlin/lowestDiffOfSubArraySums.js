//arr = [1,6,11,5] 
//indices= 0,1,2, 3
function smallestDifference(arr,l,r){
    let sol = 999999
    for(let i =l;i<=r;i++){
        
            let a1=swap(arr,l,i)
           const ans = breakArrIntoTwo(a1)
           if(ans<sol)
            sol=ans
          if(sol==0)
             return sol
    }
    return sol
}
/*
Time Complexity
We start from the beginnning and go through the end of the array (n)
    After each swap, we find all the combinations and calculate a solution (greedy) until n-1
    O(n*n-1)

Space Complexity
n new arrays each of size n
   

Space Complexity = O(n^2)

*/
// split [1,6,11,5] in to 3 different groups from 0 to i and i+1 to j and Calculate least sum
/*
after swapping 0th index with 0th index
i=0 
f 1
s 6,11,5 //checks out

i=1
f 1,6
s 11,5

i=2
f 1,6,11
s 5


after swapping 0th index with 1st index
i=0 [6, 1, 11, 5]
f 1
s 1,11, 5

i=1 [6, 1, 11, 5]
f 6, 1
s 11, 5

i=2 [6, 1, 11, 5]
f 6, 1, 11
s 5

Array -> Properties (Attributes) & Behaviors (Functions)
*/
function breakArrIntoTwo(a){
    let sol=99999
    for(let i=0;i<a.length-1;i++){
            //firstSet 1,6,7 1+6+7
            const ans = Math.abs(sum(a,0,i+1), sum(a, i+1,a.length))
            if(ans <sol)
                sol =ans
    }
    return sol
}
function sum(arr,start, end){
    let sum = 0
    for(let i=start;i<end;i++){
        sum+=arr[i]
    }
    return sum
}
/*
creates a new array containing swapped positions for x & y
x=0?
y=0?
res[x] is 1
res[y] is 1
[1,6,11,5] 
*/
function swap(arr,x,y){
    //Make an indentical copy of the array
 const res = [... arr]
 const temp=res[x]
 res[x]=res[y]
 res[y]=temp
 return res
}

console.log(smallestDifference([1,6,11,5],0,3))
console.log(smallestDifference([2,5,7,17],0,3))