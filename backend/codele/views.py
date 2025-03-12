from django.core.cache import cache
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .utils import check_word
from .serializers import CheckWordSerializer
from codele.word_list import words

import random



@api_view(['POST'])
def check_word_view(request):
    serializer = CheckWordSerializer(data=request.data)
    if serializer.is_valid():
        guess = serializer.validated_data['guess']
        result = check_word(guess)
        return Response({"guess": guess, "result": result})
    return Response(serializer.errors, status=400)

@api_view(['POST'])
def reset_word_view(request):
    global current_word
    current_word = random.choice(words)
    cache.set('current_word', current_word, timeout=None)
    return Response({'Success': 'Word reset'}, status=200)
