num = int(input())

mun = ""
for digit in str(num):
    mun += digit if digit != "0" else ""

print(mun[::-1])