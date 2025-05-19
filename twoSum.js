export default function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    const complementIndex = nums.indexOf(complement);
    if (complementIndex !== -1) {
      return [complementIndex, i];
    }
  }
}
