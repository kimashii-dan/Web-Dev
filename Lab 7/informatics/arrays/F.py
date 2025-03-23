numbers = list(map(int, input().split()))
counter = 0
for i in range(1, len(numbers) - 1):
    if(numbers[i-1] < numbers[i] and numbers[i] > numbers[i+1]):
        counter += 1
print(counter)