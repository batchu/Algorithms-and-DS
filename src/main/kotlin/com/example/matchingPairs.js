/*
https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=559324704673058
Matching Pairs
Given two strings s and t of length N, find the maximum number of possible matching pairs in strings s and t after swapping exactly two characters within s.
A swap is switching s[i] and s[j], where s[i] and s[j] denotes the character that is present at the ith and jth index of s, respectively. The matching pairs of the two strings are defined as the number of indices for which s[i] and t[i] are equal.
Note: This means you must swap two characters at different indices.
Signature
int matchingPairs(String s, String t)
Input
s and t are strings of length N
N is between 2 and 1,000,000
Output
Return an integer denoting the maximum number of matching pairs
Example 1
s = "abcd"
t = "adcb"
output = 4
Explanation:
Using 0-based indexing, and with i = 1 and j = 3, s[1] and s[3] can be swapped, making it  "adcb".
Therefore, the number of matching pairs of s and t will be 4.
Example 2
s = "mno"
t = "mno"
output = 1
Explanation:
Two indices have to be swapped, regardless of which two it is, only one letter will remain the same. If i = 0 and j=1, s[0] and s[1] are swapped, making s = "nmo", which shares only "o" with t.
*/

// Add any extra import statements you may need here


// Add any helper functions you may need here
/*
var s_1 = "abcde";
var t_1 = "adcbe";
*/
function findNextMatch(s,j,val){
  for(let i=j;i<s.length;i++){
    if(s[i]==val)
      return {found:true, index:i}
  }
  return {found:false, index:-1}
}
function swapVal(array,i,j){
   let s = array.split('')
  let temp = s[i]
  s[i]=s[j]
  s[j]=temp
  return s.join('')
}

function matchingPairs(s, t) {
  
  let swapped=false
  let count =0
  let equal=true
  for(let i=0;i<s.length;i++){
    if(s[i]!=t[i])
      {
        equal=false
       if(!swapped){
         let res= findNextMatch(s,i+1,t[i])
         if(res.found){
            s=swapVal(s,i,res.index)
            swapped=true
            i--
         }
       }
      }
    else{
      count++
    }
  }
  if(equal)
    return s.length-2
  else
  return count
  
}










// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom, but they are otherwise not editable!
function printInteger(n) {
  var out = '[' + n + ']';
  return out;
}

var test_case_number = 1;

function check(expected, output) {
  var result = (expected == output);
  var rightTick = "\u2713";
	var wrongTick = "\u2717";
  if (result) {
  	var out = rightTick + ' Test #' + test_case_number;
  	console.log(out);
  }
  else {
  	var out = '';
  	out += wrongTick + ' Test #' + test_case_number + ': Expected ';
  	out += printInteger(expected);
  	out += ' Your output: ';
  	out += printInteger(output);
  	console.log(out);
  }
  test_case_number++;
}

var s_1 = "abcde";
var t_1 = "adcbe";
var expected_1 = 5;
var output_1 = matchingPairs(s_1, t_1);
check(expected_1, output_1);

var s_2 = "abcd";
var t_2 = "abcd";
var expected_2 = 2;
var output_2 = matchingPairs(s_2, t_2);
check(expected_2, output_2); 

// Add your own test cases here
