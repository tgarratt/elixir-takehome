import random

words = [
    "array", "class", "logic", "scope", "model", "query", "hooky", "embed", "alias", "chart",
    "input", "value", "parse", "fetch", "merge", "index", "types", "stack", "token"
]

def get_word():
    return random.choice(words)

def set_word(new_word):
    global words
    words = [new_word]