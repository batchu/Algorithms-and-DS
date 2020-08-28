/*
https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=623634548182866
Reverse Operations
You are given a singly-linked list that contains N integers. A subpart of the list is a contiguous set of even elements, bordered either by the end of the list or an odd element. For example, if the list is [1, 2, 8, 9, 12, 16], the subparts of the list are [2, 8] and [12, 16].
Then, for each subpart, the order of the elements is reversed. In the example, this would result in the new list, [1, 8, 2, 9, 16, 12].
The goal of this question is: given a resulting list, determine the original order of the elements.
Implementation detail:
You must use the following definition for elements in the linked list:
class Node {
    int data;
    Node next;
}
Signature
Node reverse(Node head)
Constraints
1 <= N <= 1000, where N is the size of the list
1 <= Li <= 10^9, where Li is the ith element of the list
Example
Input:
N = 6
list = [1, 2, 8, 9, 12, 16]
Output:
[1, 8, 2, 9, 16, 12]
*/
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
  i=6
  now, we need to reverse 6 and 8 and return newI:2, head:8, tail:6 (after reversing 6-8)
  */
  function reverseSubList (i){
    let head = new Node(i.data) 
    let tail = head 
    i=i.next
    while(i!=null && i.data%2==0){ 
    //Since we are reversing the sub list, push out the current head (swap it with the next node)   
      const temp = head 
      head = new Node(i.data) 
      head.next=temp 
      i=i.next
    }
   //i will be the next od element
    return {newI:i,head:head, tail}
  }
  
  
  function reverse(head) {
    // We are going to create our solution linked list with a dummy head because the first
    // element of the input (head) could be the beginning of a even sub list. We will return sol.next
    // to exclude the dummy head from the returned solution
   const sol = new Node(-1)
   let j = sol
   let i =head;
    while(i!=null){
      if(i.data%2!=0)
        {
          j.next= new Node(i.data)
          i=i.next
          j=j.next
        }
      else{
        //Generate a reversed sub list. 
        const resp = reverseSubList(i)
        //Move the it to the new pointer (we just navigated through the sub list)
        i=resp.newI
        //Take the reverse sub list's head and attached it to the solution's current pointer i.e j
        j.next=resp.head
        //move j to point to the tail of the reversed sub list
        j=resp.tail
        //Don't forget to add the node that immediately follows the even sub list back to the solution.
        //Check for null as it could be the last element in the sub list!
        if(i!=null)
        j.next=new Node(i.data)
      }
    }
    return sol.next
    
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
  