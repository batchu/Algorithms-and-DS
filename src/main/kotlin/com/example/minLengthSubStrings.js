/*

https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=2237975393164055
Minimum Length Substrings
You are given two strings s and t. You can select any substring of string s and rearrange the characters of the selected substring. Determine the minimum length of the substring of s such that string t is a substring of the selected substring.
Signature
int minLengthSubstring(String s, String t)
Input
s and t are non-empty strings that contain less than 1,000,000 characters each
Output
Return the minimum length of the substring of s. If it is not possible, return -1
Example
s = "dcbefebce"
t = "fd"'
output = 5
Explanation:
Substring "dcbef" can be rearranged to "cfdeb", "cefdb", and so on. String t is a substring of "cfdeb". Thus, the minimum length required is 5.

*/
// Add any extra import statements you may need here


// Add any helper functions you may need here
function findChar(val,array, indices){
  for(let i=0;i<array.length;i++)
    {
      if(array[i]==val && !indices.includes(i))
        return {found:true,index:i}
    }
  return {found:false, index:-1}
}

function minLengthSubstring(s, t) {
  // Write your code here
  const p = s.split('')
  const q = t.split('')
  const indices = []
  for(let i=0;i<q.length;i++)
    {
      let res = findChar(q[i],p, indices)
      if(res.found)
        {
          indices.push(res.index)
        }
      else
        return -1
    }
  return Math.max(...indices)-Math.min(...indices)+1
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

var s_1 = "dcbefebce";
var t_1 = "fd";
var expected_1 = 5;
var output_1 = minLengthSubstring(s_1, t_1);
check(expected_1, output_1);

var s_2 = "bfbeadbcbcbfeaaeefcddcccbbbfaaafdbebedddf";
var t_2 = "cbccfafebccdccebdd";
var expected_2 = -1;
var output_2 = minLengthSubstring(s_2, t_2);
check(expected_2, output_2);

// Add your own test cases here
