a = int(input())
b = int(input())

x = int(a ** 0.5)
if x * x < a:
    x += 1

y = int(b ** 0.5)

for i in range(x, y + 1):
    print(i * i, end=" ")
