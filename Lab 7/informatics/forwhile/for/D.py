x = int(input())
d = int(input())

counter = 0
for digit in str(x):
    if int(digit) == d:
        counter += 1

print(counter)