def Election(x, y, z):
    counter_t = 0
    counter_f = 0
    if x :
        counter_t += 1
    else:
        counter_f += 1
    if y :
        counter_t += 1
    else:
        counter_f += 1
    if z :
        counter_t += 1
    else:
        counter_f += 1
    return int(counter_t > counter_f)

x = bool(int(input()))
y = bool(int(input()))
z = bool(int(input()))
print(Election(x, y, z))