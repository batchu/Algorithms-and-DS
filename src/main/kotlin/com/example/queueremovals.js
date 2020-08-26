/*
var n_1 = 6
var x_1 = 5
var arr_1 = [1, 2, 2, 3, 4, 5];
var expected_1 = [5, 6, 4, 1, 2 ];
✗ Test #1: Expected [5, 6, 4, 1, 2] Your output: [5, 6, 0, 0, 0]
var n_2 = 13
var x_2 = 4
var arr_2 = [2, 4, 2, 4, 3, 1, 2, 2, 3, 4, 3, 4, 4];
var expected_2 = [2, 5, 10, 13];
*/
/*
input arr may contain duplicate values. So searching for the first instance of max val may not result in the right hit
*/
function searchFrom(arr, maxVals, max){
    //Find the number of occurances of max in maxVals
    const p = maxVals.filter(x=>x==max).length
    //Iterate through arr and get the index of the last occurance of max value
    let q = 0
    for(let i =0;i<arr.length;i++){
          if(p==q){
              console.log(`Found ${p} instances of ${max} in arr. Returning index ${i}`)
              return i
          }
          if(arr[i]==max)
            q++
  
    }
    return -1
  }
  
  function findPositions(arr, x) {
    // Write your code here
    
    //Holds the solution
    const sol = []
    //Holds the initial values of the array. This is transformed as per the problem statement. Make a copy of the original
    const p=arr.slice(0,arr.length)
    const maxVals=[]
    for(let i=0;i<x;i++){
        console.log(`i= ${i}`)
        //Pop x elements from the front of the queue. This remove the popped elements from p
        const popped= p.splice(0,x)
        console.log(`p after popped= [${p.join(",")}]`)
        console.log(`popped= [${popped.join(",")}]`)
        //Find the largest value
        const max = Math.max(...popped)
        console.log(`max= ${max}`)
        
        const maxIndex=popped.indexOf(max)
        console.log(`maxIndex= ${maxIndex}`)
        //Find the 1-based index of the largest value in the original array
        const oneBasedMaxIndex = arr.indexOf(max, searchFrom(arr,maxVals, max)+1)+1
        console.log(`oneBasedMaxIndex= ${oneBasedMaxIndex}`)
        //Find the index of the largest value in the popped array
        maxVals.push(max)
        console.log(`maxVals after pushing max= [${maxVals.join(",")}]`)
        
        //Remove the largest value index from the popped array
        popped.splice(maxIndex,1)
        console.log(`popped after removing largest index = [${popped.join(",")}]`)
        //Add the largest value index to the solution array
        sol.push(oneBasedMaxIndex)
        console.log(`oneBasedMaxIndex after pushing 1based index= [${sol.join(",")}]`)
        //Decrement each of the positive values by 1
        const newPopped = popped.map(x=>x>0?x-1:0)
        console.log(`newPopped  [${newPopped.join(",")}]`)
     //Clear the contents of the temporary p array and then insert the newPopped elements
     p.push(...newPopped)
     console.log(`p after re-adding popped elements [${p.join(",")}]`)
     console.log("")
     console.log("")
    }
    return sol
    
  }
  
  
  
  
  
  
  
  
  
  
  
  // These are the tests we use to determine if the solution is correct.
  // You can add your own at the bottom, but they are otherwise not editable!
  function printintegerArray(array) {
    var size = array.length;
    var res = '';
    res += '[';
    var i = 0;
    for (i = 0; i < size; i++) {
      if (i !== 0) {
          res += ', ';
      }
      res += array[i];
    }
    res += ']';
    return res;
  }
  
  var test_case_number = 1;
  
  function check(expected, output) {
    var expected_size = expected.length;
    var output_size = output.length;
    var result = true;
    if (expected_size != output_size) {
      result = false;
    }
    for (var i = 0; i < Math.min(expected_size, output_size); i++) {
      result &= (output[i] == expected[i]);
    }
    var rightTick = "\u2713";
      var wrongTick = "\u2717";
    if (result) {
        var out = rightTick + ' Test #' + test_case_number;
        console.log(out);
    }
    else {
        var out = '';
        out += wrongTick + ' Test #' + test_case_number + ': Expected ';
        out += printintegerArray(expected);
        out += ' Your output: ';
        out += printintegerArray(output);
        console.log(out);
    }
    test_case_number++;
  }
  
  var n_1 = 6
  var x_1 = 5
  var arr_1 = [1, 2, 2, 3, 4, 5];
  var expected_1 = [5, 6, 4, 1, 2 ];
  var output_1 = findPositions(arr_1, x_1);
  check(expected_1, output_1);
  
  var n_2 = 13
  var x_2 = 4
  var arr_2 = [2, 4, 2, 4, 3, 1, 2, 2, 3, 4, 3, 4, 4];
  var expected_2 = [2, 5, 10, 13];
  var output_2 = findPositions(arr_2, x_2);
  check(expected_2, output_2);
  
  // Add your own test cases here
  