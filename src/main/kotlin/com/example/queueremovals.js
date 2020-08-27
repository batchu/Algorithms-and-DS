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
  function findPositions(arr, x) {
    // Write your code here
    //Find Max value of an array of type [[k,v]...] Iterate in reverse to get the lowest max index
    function findMax(arr){
       const max = {index:0, resp:[0,0]}
        for(let i=arr.length-1;i>=0;i--){
            if(arr[i][1]>=max.resp[1])
                {
                    max.index=i
                    max.resp[0]=arr[i][0]
                    max.resp[1]=arr[i][1]
                
                }
        }
        return max
    }
    //Holds the solution
    const sol = []
    //Holds the initial indices/values of the array. This is transformed as per the problem statement. Make a copy of the original
    const p=Object.entries(arr)
    for(let i=0;i<x;i++){
        //Pop x elements from the front of the queue. This remove the popped elements from p
        const popped= p.splice(0,x)
        
        //Find the largest value
        const max = findMax(popped)

        //Remove the largest value index from the popped array
        popped.splice(max.index,1)
        //Add the largest value index to the solution array
        sol.push(parseInt(max.resp[0])+1)

        //Decrement each of the positive values by 1
        const newPopped = popped.map(x=>x[1]>0?[x[0],x[1]-1]:[x[0],0])
     //Clear the contents of the temporary p array and then insert the newPopped elements
     p.push(...newPopped)
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
  