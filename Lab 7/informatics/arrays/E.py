numbers = list(map(int, input().split()))
for i in range(0, len(numbers) -1):
    if (numbers[i] > 0 and numbers[i+1] > 0) or (numbers[i] < 0 and numbers[i+1] < 0):
        print(numbers[i], numbers[i+1])
        exit(0)