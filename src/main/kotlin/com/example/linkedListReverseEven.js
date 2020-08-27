// Add any extra import statements you may need here
/*
  sol = head
  current = sol

Iterate i from head through the end:
  If i.next val is odd
    set current.next to 
    
*/

class Node {
    constructor(x) {
      this.data = x;
      this.next = null;
    }
  }
  
  /*
  say input is 1-3-6-8-2-7
  i=3
  j=3
  now, we need to reverse 6 and 8 and return newI:7, newJ:7, reversedSubList:2-8-6
  */
  function reverseSubList (i){
      //i=3
    i=i.next // i = 6
    let head = new Node(i.data) //head=6;i=6
    let tail = head //head=6, tail = 6
    i=i.next
    while(i!=null && i.data%2==0){    
      const temp = head //temp = 6
      head = new Node(i.data) //head=8
      head.next=temp //head -> 8-6
      i=i.next //i=2
    }
   
    return {newI:i,head:head, tail}
  }
  
  
  function reverse(head) {
    
    const sol = new Node(head.data)
    let j = sol
   let i =head;
    while(i!=null){
      if(i.next.data%2!=0)
        {
          j.next= new Node(i.next.data)
          i=i.next
        }
      else{
        const resp = reverseSubList(i)
        //Since we just reversed the sub list and iterated through it, i moves to the end of the sub list
        i=resp.newI
        //Take the reverse sub list's head and attached it to the solution's current pointer i.e j
        j.next=resp.head
        //move j to point to the tail of the reversed sub list
        j=resp.tail
        if(i!=null){
            j.next = new Node(i.data)
            j=j.next

        }

      }
    }
    return sol
    
  }
  
  
  
  
  
  
  
  
  
  
  
  // These are the tests we use to determine if the solution is correct.
  // You can add your own at the bottom, but they are otherwise not editable!
  var test_case_number = 1;
  
  function printLinkedList(head) {
    var out = '[';
    while (head != null) {
      out += head.data;
      head = head.next;
      if (head != null) {
        out += ' ';
      }
    }
    out += ']';
    return out;
  }
  
  function check(expectedHead, outputHead) {
    var result = true;
    var tempExpectedHead = expectedHead;
    var tempOutputHead = outputHead;
    while (expectedHead != null && outputHead != null) {
      result &= (expectedHead.data == outputHead.data);
      expectedHead = expectedHead.next;
      outputHead = outputHead.next;
    }
    if (!(expectedHead == null && outputHead == null)) result = false;
  
    var rightTick = "\u2713";
    var wrongTick = "\u2717";
    if (result) {
      var out = rightTick + ' Test #' + test_case_number;
      console.log(out);
    } else {
      var out = '';
      out += wrongTick + ' Test #' + test_case_number + ': Expected ';
      out += printLinkedList(tempExpectedHead);
      out += ' Your output: ';
      out += printLinkedList(tempOutputHead);
      console.log(out);
    }
    test_case_number++;
  }
  
  function createLinkedList(arr) {
    var head = null;
    var tempHead = head;
    for (var v of arr) {
      if (head == null) {
        head = new Node(v);
        tempHead = head;
      } else {
        head.next = new Node(v);
        head = head.next;
      }
    }
    return tempHead;
  }
  
  var head_1 = createLinkedList([1, 2, 8, 9, 12, 16]);
  var expected_1 = createLinkedList([1, 8, 2, 9, 16, 12]);
  var output_1 = reverse(head_1);
  check(expected_1, output_1);
  
  var head_2 = createLinkedList([2, 18, 24, 3, 5, 7, 9, 6, 12]);
  var expected_2 = createLinkedList([24, 18, 2, 3, 5, 7, 9, 12, 6]);
  var output_2 = reverse(head_2);
  check(expected_2, output_2);
  
  // Add your own test cases here
  