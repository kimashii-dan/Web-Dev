binary = int(input())
decimal = 0
power = 0

for digit in str(binary)[::-1]:
    decimal += (int(digit) * (2 ** power))
    power += 1

print(decimal)
