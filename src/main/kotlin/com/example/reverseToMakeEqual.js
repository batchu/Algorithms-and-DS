// Add any extra import statements you may need here


// Add any helper functions you may need here


function areTheyEqual(array_a, array_b){
  // Write your code here
  if(array_a.length!=array_b.length)
    return false
  for(let i=0;i<array_a.length;i++)
  {
    if(array_a[i]!=array_b[i])
      {
        //Find a[i] in b from index i+1 to n
         let searchResult = find(array_b,array_a[i],i+1)
         if(!searchResult.found)
           return false
         reverse(array_b,i,searchResult.position) 
      }
  }
  return true
  
  function find(b,val,start){
    for(let i=val;i<b.length;i++){
      if(b[i]==val)
        return {found:true,position:i}
    }
    return {found:false,position:undefined}
  }
  
  function reverse(b,start, end){
    for(let i=start,j=end;i<j;i++,j--){
      let temp = b[i]
      b[i]=b[j]
      b[j]=temp
    }
  }
}

