import random

words = [
    "array", "class", "logic", "scope", "model", "query", "hooky", "embed", "alias", "chart",
    "input", "value", "parse", "fetch", "merge", "index", "types", "stack", "token"
]

current_word = random.choice(words)


# return a fixed word to prevent getting a random word every request
def get_word():
    return random.choice(words)

# create the ability to set the random word for testing purposes
def set_word(new_word):
    global words
    words = [new_word]