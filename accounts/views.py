from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics 
from rest_framework.permissions import AllowAny
from rest_framework.serializers import ModelSerializer

# Create your views here.
class RegisterSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password'] 
        
        def create(self, validated_data):
            user = User.objects.create_user(**validated_data)
            return user

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]
