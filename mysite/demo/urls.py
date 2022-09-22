from django.urls import path
from . import views

app_name = 'demo'

urlpatterns = [
    path("password_reset/", views.password_reset_request, name="password_reset"),
    path('register_user/', views.register_user, name='register_user'),
    path('', views.login_user, name='login_user'),
    path('create_post/', views.create_post, name='post'),
    path('detail/', views.detail, name='index'),
]