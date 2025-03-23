def close_far(a, b, c):
  if abs(a - b) > abs(a -c):
    temp = b
    b = c
    c = temp
  return abs(a - b) <= 1 and abs(b - c) >= 2  and abs(a - c) >= 2
