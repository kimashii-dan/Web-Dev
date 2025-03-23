def not_string(s):
    if s.startswith("not"):
        return s
    return "not " + s
