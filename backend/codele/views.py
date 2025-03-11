import random

from django.shortcuts import render
from django.http import JsonResponse

from .word_list import words

# Import word list
# Return one random word from word_list array

def random_word_view(request):
    word = random.choice(words)
    return JsonResponse({"word": word})