/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
  sortedArr = nums.sort();

  let i = 0;
    
  while (i < sortedArr.length) {
    
    for (i = 0; i < sortedArr.length; i++) {
        
       if ( sortedArr[i] === val) { 

          sortedArr.splice(i, 1); 
                
          i--;
       }
   }
}
    
