def make_chocolate(small, big, goal):
    num_of_big = goal // 5
    if num_of_big > big:  
        num_of_big = big

    goal -= num_of_big * 5

    if goal <= small:
        return goal
    else:
        return -1