def last2(str):
  counter = 0
  sub = str[-2:]
  for i in range(len(str) - 2): 
    if str[i:i+2] == sub:
      counter += 1
  return counter
