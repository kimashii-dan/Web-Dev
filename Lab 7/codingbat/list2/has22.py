def has22(nums):
    for i in range(len(nums) - 1):  # Iterate until second last element
        if nums[i] == 2 and nums[i+1] == 2:
            return True
    return False