from .forms import BlogForm
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.core.mail import EmailMessage
from demo.models import Post, Comment
from django.shortcuts import render, redirect
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse
from django.contrib.auth.forms import PasswordResetForm
from django.contrib.auth.models import User
from django.template.loader import render_to_string
from django.db.models.query_utils import Q
from django.utils.http import urlsafe_base64_encode
from django.contrib.auth.tokens import default_token_generator
from django.utils.encoding import force_bytes


def register_user(request):
    if request.method == 'POST':
        username = request.POST['username']
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        email = request.POST['email']
        password = request.POST['password']
        confirm_password = request.POST['confirm_password']
        if password == confirm_password:
            if User.objects.filter(username=username).exists():
                messages.success(request, 'User already exist')
                return redirect('/demo/register_user/')
            elif User.objects.filter(email=email).exists():
                messages.success(request, 'Email already exist')
                return redirect('/demo/register_user/')
            else:
                user = User.objects.create_user(username=username, first_name=first_name, last_name=last_name, email=email, password=password)
                user.save()
                messages.success(request, 'Registration Successful')
                email = EmailMessage('Subject', 'You are successfully registered', to=['f158196@nu.edu.pk'])
                email.send()
                return redirect('/demo/login_user/')
        else:
            return redirect('/demo/register_user/')
    else:
        return render(request, 'demo/register_user.html', {})


def login_user(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            # Redirect to a success page.
            return redirect('/demo/login_user/success_page/')
        else:
            messages.success(request, 'Login error! Try again')
            # Return an 'invalid login' error message.
            return redirect('/demo/login_user/')
    else:
        return render(request, 'demo/login.html', {})


def create_post(request):
    if request.method == 'GET':
        form = BlogForm()
        context = {
            'form': form
        }
        return render(request, 'demo/index.html', context)
    if request.method == "POST":
        form = BlogForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return HttpResponse('The file is saved')
        else:
            form = BlogForm()
            context = {
                'form': form
            }
            return render(request, 'demo/index.html', context)


def password_reset_request(request):
    if request.method == "POST":
        password_reset_form = PasswordResetForm(request.POST)
        if password_reset_form.is_valid():
            data = password_reset_form.cleaned_data['email']
            associated_users = User.objects.filter(Q(email=data))
            if associated_users.exists():
                for user in associated_users:
                    subject = "Password Reset Requested"
                    email_template_name = "demo/password_reset_email.txt"
                    c = {
                        "email": user.email,
                        'domain': '127.0.0.1:8000',
                        'site_name': 'Website',
                        "uid": urlsafe_base64_encode(force_bytes(user.pk)),
                        "user": user,
                        'token': default_token_generator.make_token(user),
                        'protocol': 'http',
                    }
                    email = render_to_string(email_template_name, c)
                try:
                    send_mail(subject, email, 'admin@example.com', [user.email], fail_silently=False)
                except BadHeaderError:
                    return HttpResponse('Invalid header found.')
                return redirect("/password_reset/done/")
    password_reset_form = PasswordResetForm()
    return render(request=request, template_name="demo/password_reset.html",
                  context={"password_reset_form": password_reset_form})


def detail(request):

    post_list = list(Post.objects.all())
    context = {
        'post_list': post_list
    }
    return render(request, 'demo/Post_detail.html', context)

