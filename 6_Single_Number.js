// Given a non-empty array of integers nums, every element appears twice except
// for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only
// constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1


function signalno(nums) {
    lmap= {}
    for(let item of nums){
        lmap[item]=( lmap[item] ||0 )+1
        
    }
    for(let j=0; j<nums.length;j++){
        if(lmap[nums[j]]==1){
            return nums[j]
        }
    }
    return false
};

const result= signalno([2,2,1])
console.log(result)