from collections import deque

def process_deque_operations(n, operations):
    d = deque()
    
    for operation in operations:
        command = operation.split()
        
        if command[0] == "append":
            d.append(int(command[1]))
        elif command[0] == "appendleft":
            d.appendleft(int(command[1]))
        elif command[0] == "pop":
            d.pop()
        elif command[0] == "popleft":
            d.popleft()

    print(*d)

if __name__ == "__main__":
    n = int(input().strip())
    operations = [input().strip() for _ in range(n)]
    process_deque_operations(n, operations)
