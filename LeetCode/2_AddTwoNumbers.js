/*
2. Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
2 -> 4 -> 3
5 -> 6 -> 4
7 -> 0 -> 8

Output: [7,0,8]
Explanation: 342 + 465 = 807.

Input: l1 = [0], l2 = [0]
Output: [0]

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function sumNode(list01, list02, plus = 0) {
  if (!list01 && !list02 && plus === 1) return new ListNode(1);
  if (list01 || list02) {
    let sum = (list01?.val || 0) + (list02?.val || 0) + plus;
    if (sum >= 10) {
      plus = 1;
      sum -= 10;
    } else {
      plus = 0;
    }
    return new ListNode(sum, sumNode(list01?.next, list02?.next, plus));
  }
}

var addTwoNumbers = function (l1, l2) {
  return sumNode(l1, l2);
};

// 초기 소스,
//  function getNumberByLinked(linked) {
//     if(linked){
//         let number = getNumberByLinked(linked.next) || "";
//         number += linked.val+"";
//         return number;
//     }
// }
// var addTwoNumbers = function(l1, l2) {
//     const number01 = getNumberByLinked(l1);
//     const number02 = getNumberByLinked(l2);
//     const sum  = +number01 + +number02 + "";
//     const array = sum.split("").reverse();
//     console.log(array)

//     return new ListNode(sum);
// };

/**
 * Runtime: 340 ms, faster than 5.04% of JavaScript online submissions for Add Two Numbers.
 * Memory Usage: 53.7 MB, less than 5.45% of JavaScript online submissions for Add Two Numbers.
 */