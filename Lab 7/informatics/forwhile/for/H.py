divs = 2
num = int(input())

for i in range(2, num ** (1/2)):
    if num % i == 0:
        divs += 1

print(divs)