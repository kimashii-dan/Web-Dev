n = int(input())

zeros = 0

for i in range(0, n):
    if int(input()) == 0:
        zeros += 1

print(zeros)