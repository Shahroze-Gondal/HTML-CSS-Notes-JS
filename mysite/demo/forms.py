from django import forms
from .models import Post


class BlogForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['post_title', 'post_description', 'post_file']