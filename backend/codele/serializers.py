from rest_framework import serializers

class CheckWordSerializer(serializers.Serializer):
    guess = serializers.CharField(max_length=5)
