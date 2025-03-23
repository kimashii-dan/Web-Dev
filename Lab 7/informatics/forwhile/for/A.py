a = int(input())
b = int(input())

for i in range((a if a % 2 ==0 else a + 1), b, 2):
    print(i, end=" ")
