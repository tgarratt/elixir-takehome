from django.core.cache import cache

import random

words = [
    "array", "class", "logic", "scope", "model", "query", "hooky", "embed", "alias", "chart",
    "input", "value", "parse", "fetch", "merge", "index", "types", "stack", "token"
]

# current_word = random.choice(words)


# return a fixed word to prevent getting a random word every request
def get_word():
    # First check cache for current word
    word = cache.get('current_word')
    
    if word is None:  # If not found in cache, pick a random word
        word = random.choice(words)
        cache.set('current_word', word, timeout=None)  # Store in cache
    
    return word


# create the ability to set the random word for testing purposes
def set_word(new_word):
    global words, current_word
    words = [new_word]
    current_word = new_word 