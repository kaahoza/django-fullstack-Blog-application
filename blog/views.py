from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .serializers import BlogSerializer
from .models import BlogPost

# Create your views here.

class BlogListView(generics.ListCreateAPIView):
    queryset = BlogPost.objects.all().order_by('-createdAt')
    serializer_class = BlogSerializer
    permission_classes = [IsAuthenticated]
    
class BlogDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogSerializer
