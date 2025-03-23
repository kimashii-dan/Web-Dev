numbers = list(map(int, input().split()))
for i in range(1, len(numbers)):
    if(numbers[i-1] < numbers[i]):
        print(numbers[i])