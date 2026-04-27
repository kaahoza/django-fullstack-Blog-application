from django.db import models

# Create your models here.

class BlogPost(models.Model):
    title = models.CharField(max_length=500)
    content = models.TextField()
    image = models.ImageField(upload_to='blog_images/', blank=True, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title