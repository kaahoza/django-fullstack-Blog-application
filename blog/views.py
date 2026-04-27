from django.shortcuts import render
from rest_framework import generics
from .serializers import BlogSerializer
from .models import BlogPost

# Create your views here.

class BlogListView(generics.ListCreateAPIView):
    queryset = BlogPost.objects.all().order_by('-createdAt')
    serializer_class = BlogSerializer
    
class BlogDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogSerializer
