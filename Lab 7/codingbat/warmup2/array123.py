def string_match(a, b):
    counter = 0
    min_length = min(len(a), len(b))
    for i in range(min_length - 1):
        if a[i] == b[i] and a[i+1] == b[i+1]:
            counter += 1
    return counter

