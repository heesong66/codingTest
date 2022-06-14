/**
 * 1. Two Sum
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let returnArr = [];
    
    nums.find((num01, index01)=>{
        let flag = false;
        let index02 = 0
        nums.find((num02, index) => {
            index02 = index
            if(index01 === index) return false;
            flag = num01 + num02 === target;    
            return flag;
        })
        
        if(flag) {
            returnArr = [index01, index02].sort();
        }
        return flag;
    })
    
    return returnArr;
};

/**
 * Runtime: 1577 ms, faster than 5.01% of JavaScript online submissions for Two Sum.
 * Memory Usage: 44.2 MB, less than 16.15% of JavaScript online submissions for Two Sum. 
 */