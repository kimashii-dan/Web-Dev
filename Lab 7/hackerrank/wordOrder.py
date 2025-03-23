def distinct(n):
    words = {} 
    
    for _ in range(n):
        word = input().strip()
        words[word] = words.get(word, 0) + 1

    print(len(words)) 
    
    for count in words.values():
        print(count, end=" ")

if __name__ == "__main__":
    n = int(input().strip())
    distinct(n)
