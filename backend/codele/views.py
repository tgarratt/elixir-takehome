from rest_framework.response import Response
from rest_framework.decorators import api_view
from .utils import check_word
from .serializers import CheckWordSerializer


@api_view(['POST'])
def check_word_view(request):
    serializer = CheckWordSerializer(data=request.data)
    if serializer.is_valid():
        guess = serializer.validated_data['guess']
        result = check_word(guess)
        return Response({"guess": guess, "result": result})
    return Response(serializer.errors, status=400)
