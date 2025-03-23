MAX_N = 30000

LPF = [0] * (MAX_N + 1)

i = 2

while i <  MAX_N + 1:
    if LPF[i] == 0:
        for j in range(i, MAX_N + 1, i):
            if LPF[j] == 0:
                LPF[j] = i 
    i += 1

def smallest_divisor(x):
    return LPF[x]

x = int(input())
print(smallest_divisor(x))