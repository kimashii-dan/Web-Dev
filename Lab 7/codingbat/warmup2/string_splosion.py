def string_splosion(s):
    ans = ""
    for i in range(len(s)):
        ans += s[:i+1]
    return ans