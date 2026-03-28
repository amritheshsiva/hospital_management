from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import User
from django.http import JsonResponse
from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND
from rest_framework.authtoken.models import Token

def login(request):
    return render(request,'login.html')
def home(request):
    return render(request,"home.html")
def doc(request):
    return render(request,'doctors.html')
def appointment(request):
    return render(request,'appointments.html')
def user(request):
    return render(request,'user_manage.html')
def userprofile(request):
    return render(request,'userprofile.html')
def report(request):
    return render(request,'reports.html')
def add(request):
    return render(request,'doctor_add.html')
def edit(request):
    return render(request,'doctor_edit.html')
def docprofile(request):
    return render(request,'doctor_profile.html')

# Signin API


@api_view(['POST'])
@permission_classes((AllowAny,))

def Signup(request):
    email  = request.data.get("email")
    password = request.data.get("password")
    name = request.data.get("name")
    if not name or not email or not password:
        return Response({'message':'All fields are required'})
    if User.objects.filter(email=email).exists():
        return  JsonResponse({'message':'Email already exist'})
    user = User.objects.create_user(email=email,password=password)
    user.name = name
    user.save()
    return JsonResponse({'message':'user created successsfully'} ,status = 200)

# Login API

@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def login_api(request):
    email = request.data.get("email")
    password = request.data.get("password")
    if email is None or password is None:
        return Response({'error': 'Please provide both email and password'},
                        status=HTTP_400_BAD_REQUEST)
    user = authenticate(username=email, password=password)
    if not user:
        return Response({'error': 'Invalid Credentials'},
                        status=HTTP_404_NOT_FOUND)
    token, _ = Token.objects.get_or_create(user=user)
    return Response({'token': token.key},status=HTTP_200_OK)