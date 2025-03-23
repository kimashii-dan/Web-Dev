
def build_lcp(P):
    lcp = [0] * len(P)
    length = 0 
    i = 1

    while i < len(P):
        if P[i] == P[length]:
            length += 1
            lcp[i] = length
            i += 1
        else:
            if length != 0:
                length = lcp[length - 1]
            else:
                lcp[i] = 0
                i += 1
    return lcp


def find_substring_indices(S, P):
    n, m = len(S), len(P)
    lcp = build_lcp(P)

    i, j = 0, 0
    found = False

    while i < n:
        if S[i] == P[j]:
            i += 1
            j += 1

        if j == m:
            print((i - j, i - 1))
            found = True
            j = lcp[j - 1]

        elif i < n and S[i] != P[j]:
            if j != 0:
                j = lcp[j - 1]
            else:
                i += 1

    if not found:
        print((-1, -1))

    

if __name__ == "__main__":
    S = input().strip()
    P = input().strip()
    find_substring_indices(S, P)
