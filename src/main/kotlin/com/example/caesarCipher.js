function rotate(code, rotationFactor, rotationBase, baseChar){
 
  return String.fromCharCode(((code-baseChar+rotationFactor)%rotationBase)+baseChar)
}

function rotationalCipher(input, rotationFactor) {
   const sol = []
   let newChar=''
   let code =''
  for(let i=0;i<input.length;i++)
    {
      let code = input.charCodeAt(i)
         if((code>="A".charCodeAt() && code <="Z".charCodeAt())){
          newChar = rotate(code,rotationFactor,26, "A".charCodeAt())
          sol.push(newChar)
         }
         else if(code>="a".charCodeAt() && code <="z".charCodeAt()){
          newChar = rotate(code,rotationFactor,26, "a".charCodeAt())
          sol.push(newChar)
         }
         else if(code>="0".charCodeAt() && code <="9".charCodeAt())
         {
          newChar = rotate(code,rotationFactor,10, "0".charCodeAt())
          sol.push(newChar)  
         }
         else
          sol.push(input[i])
    }
  return sol.join('')
}

console.log(rotationalCipher("All-convoYs-9-be:Alert1.",4))
