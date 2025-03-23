def merge_the_tools(string, k):
    for i in range(0, len(string), k): 
        seen = set() 
        substring = ""
        for char in string[i:i + k]:
            if char not in seen:
                substring += char
                seen.add(char)
        print(substring)

if __name__ == '__main__':
    string, k = input(), int(input())
    merge_the_tools(string, k)
