numbers = list(map(int, input().split()))
max = 0
max_pos = 0
for i in range(0, len(numbers)):
    if numbers[i] > max:
        max = numbers[i]
        max_pos = i