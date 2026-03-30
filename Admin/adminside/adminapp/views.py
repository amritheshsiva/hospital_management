from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import User,Booking
from django.http import JsonResponse
from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Doctor
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from .serializers import ProductSerializer,BookingSerializer


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

# Signup API

@api_view(['POST'])
@permission_classes((AllowAny,))

def signup(request):
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
    user = authenticate(email=email, password=password)
    if not user:
        return Response({'error': 'Invalid Credentials'},
                        status=HTTP_404_NOT_FOUND)
    token, _ = Token.objects.get_or_create(user=user)
    return Response({'token': token.key},status=HTTP_200_OK)


# Doctor List API(Serializers)
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def list_products(request):
    products = Doctor.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


# Doc Profile API

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_doctor(request, pk):
    product = get_object_or_404(Doctor, pk=pk)
    serializer = ProductSerializer(product)
    return Response(serializer.data)

# Booking API
@csrf_exempt
@api_view(['POST'])
@permission_classes([IsAuthenticated])

def book_Appointment(request):
    date=request.data.get("Date")
    time=request.data.get("Time_slot")
    doctorid=request.data.get('doctor_id')
    patient_id=request.user.id
    if not date or not time:
        return Response({'message':'All fields are required'})
    booking = Booking.objects.create(Date=date,time_slot=time,doctor_id=doctorid,patient_id=patient_id)
    booking.save()
    return Response({'Appointment booked'} ,status = 200)

# My Appointments API

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def my_appointments(request,pk):
    bookings = Booking.objects.filter(patient_id=pk)
    serializer = BookingSerializer(bookings, many=True)
    return Response(serializer.data)

# Password Change API

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_password(request):
    user = request.user
    old_password = request.data.get("old_password")
    new_password = request.data.get("new_password")
    if not old_password or not new_password:
        return Response({"error": "Both passwords are required"}, status=400)
    if not user.check_password(old_password):
        return Response({"error": "Old password is incorrect"}, status=400)
    user.set_password(new_password)
    user.save()
    user.auth_token.delete()
    return Response({"message": "Password updated successfully"})

# Logout API

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout_api(request):
    request.user.auth_token.delete()  
    return Response({"message": "Logged out successfully"})