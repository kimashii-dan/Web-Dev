def minion_game(string):
    vowels = {'A', 'E', 'I', 'O', 'U'}
    n = len(s)
    
    kevin_score = 0  # Vowel words
    stuart_score = 0  # Consonant words

    for i in range(n):
        if s[i] in vowels:
            kevin_score += (n - i)
        else:
            stuart_score += (n - i)

    # Determine the winner
    if stuart_score > kevin_score:
        print("Stuart", stuart_score)
    elif kevin_score > stuart_score:
        print("Kevin", kevin_score)
    else:
        print("Draw")


if __name__ == '__main__':
    s = input()
    minion_game(s)