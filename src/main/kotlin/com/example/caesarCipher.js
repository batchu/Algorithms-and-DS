/*
A B C ....Z
65
26 chars

Input1:
Xmas123_#@*()

Out1:
Apdv456_#@*()

Input 2:
What
Output 2:
Zkdw

Shift-3
Iterate through each character
  Look up the ASCII Value
  (W) -> 87+3 = 90 = Z  (87 -> 90)
  (X) -> 88+3 = 91 = 65 (88 -> 65)

W -> [87 - 65 (Base of A) + Rotation Factor(3)]% Count of chars + (Base of A) = Z
   = [25%26] + 65
    = 25+65 = 90
X -> [88 - 65 (Base of A) + Rotation Factor(3)]% Count of chars + Base of A = A
   = [26 % 26] + Base of A
   = 0 + 65
   = 65
*/
//input = '12' rotationFactor =2 output = '34'
function rotationalCipher(input, rotationFactor){

  //Input validation. Check and make sure that input is a valid string and the rotationFactor is a valid number
  const sol  = [] //['3','4']
  let newChar = ''
//i = 2 input.length=2
  for(let i = 0;i<input.length;i++){
    //code = 50
     let code = input.charCodeAt(i)

     if(code>='A'.charCodeAt() && code <='Z'.charCodeAt())
     {
       newChar = rotate(code,rotationFactor, 26,'A'.charCodeAt())
       sol.push(newChar)
     }
     else  if(code>='a'.charCodeAt() && code <='z'.charCodeAt()){
      newChar = rotate(code,rotationFactor, 26,'a'.charCodeAt())
      sol.push(newChar)
     }
     else if(code>='0'.charCodeAt() && code <='9'.charCodeAt()){
       //code=50 rotate(50,2,10,48 )
       
      newChar = rotate(code,rotationFactor, 10,'0'.charCodeAt())
      //newChar='4'
      sol.push(newChar)
     }
     else
     {
       sol.push(input[i])
     }

  }
  return sol.join('') //['3','4'] -> '34'
}
 //code=49 rotate(50,2,10,48 )
function rotate(code, rotationFactor, rotationBase, baseChar){
  //(50-48+2)%10 + 48 = 4%10 + 48 = 4 +48 = 52 =String.fromCharCode(51) = '4'
  return String.fromCharCode((code - baseChar + rotationFactor)%rotationBase + baseChar)
}

test('34', rotationalCipher('12',2))
test('#$@',rotationalCipher('#$@',15))
test('#$@',rotationalCipher('#$@',6))
test('34', rotationalCipher('34',0))
test('3$4', rotationalCipher('3$4',10))
test('2$3', rotationalCipher('3$4',-1))
test('-$1000', rotationalCipher('-$1000','$'))
test('B', rotate(65,1,26,65))
test('R', rotate(67,15,26,65))
test('9', rotate(51,16,10,48))



function test(expected, actual){

  if(expected===actual)
  console.log(`Test case has passed. Expected =${expected} Actual = ${actual}`)
  else
  console.error(`Test case has failed!!! Expected =${expected} Actual = ${actual}`)

}

