from django.db import models

# Create your models here.


class Post(models.Model):
    post_title = models.CharField(max_length=25)
    post_description = models.CharField(max_length=200)
    post_file = models.FileField(upload_to='documents/', default='')

    def __str__(self):
        return self.post_title


class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    comment_title = models.CharField(max_length=24)
    comment_description = models.CharField(max_length=200)

    def __str__(self):
        return self.comment_title

