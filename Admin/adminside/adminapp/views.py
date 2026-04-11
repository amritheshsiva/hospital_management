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
from .serializers import ProductSerializer,BookingSerializer,UserSerializer
from django.shortcuts import redirect
from django.contrib.auth import login


def adminLogin(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']       
        user = authenticate(request,   email=  email, password=password)
        if user is not None and user.is_admin:
            login(request, user)
            return redirect('home') 
    return render(request,'login.html')

def home(request):
    user_count = User.objects.filter(is_admin=False).count()
    doctor_count = Doctor.objects.count()
    appointment_count=Booking.objects.count()
    return render(request,"home.html",{'user_count': user_count,'doctor_count': doctor_count,'appointment_count':appointment_count})

def doc(request):
    doc_list=Doctor.objects.all()
    return render(request,'doctors.html',{'doc_list':doc_list})

def appointment(request):
    booking_list=Booking.objects.select_related('doctor', 'patient')
    return render(request,'appointments.html',{"booking_list":booking_list})

def user(request):
    user_list=User.objects.filter(is_admin=False)
    return render(request,'user_manage.html',{'user_list':user_list})

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



# select_related
# Signup API

@api_view(['POST'])
@permission_classes((AllowAny,))

def signup(request):
    email  = request.data.get("email")
    password = request.data.get("password")
    name = request.data.get("name")
    dob=request.data.get("dob")
    gender=request.data.get('gender')
    address=request.data.get('address')
    phone_num=request.data.get('phone_num')
    if not name or not email or not password or not dob or not gender or not address or not phone_num:
        return Response({'message':'All fields are required'})
    if User.objects.filter(email=email).exists():
        return  JsonResponse({'message':'Email already exist'})
    user = User.objects.create_user(email=email,password=password)
    user.name = name
    user.dob = dob
    user.gender = gender
    user.address = address
    user.phone_num = phone_num
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
    # return Response({'token':token.key,'user_id': user.id},status=HTTP_200_OK)


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
    if Booking.objects.filter(
    doctor_id=doctorid,
    Date=date,
    time_slot=time
    ).exists():
        return Response({"error": "Slot already booked"}, status=400)
    booking = Booking.objects.create(Date=date,time_slot=time,doctor_id=doctorid,patient_id=patient_id,status="Upcoming")
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


# Filter API

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def filter_doctor(request):
    doctors = Doctor.objects.all()
    name = request.query_params.get('name')
    spec = request.query_params.get('spec')
    if name:
        doctors = doctors.filter(name__icontains=name)
    if spec:
        doctors = doctors.filter(Specialization__icontains=spec)
    serializer = ProductSerializer(doctors, many=True)
    return Response(serializer.data)

# User Profile API
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user(request, pk):
    userprof = get_object_or_404(User, pk=pk)
    serializer = UserSerializer(userprof)
    return Response(serializer.data)


# User Profile Edit API
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_user(request, pk):
    user = get_object_or_404(User, pk=pk)
    serializer = UserSerializer(user, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)


# Booking cancel API

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def cancel_appointment(request):
    user_id = request.user.id
    doctor_id = request.data.get("doctor_id")
    date = request.data.get("date")
    time = request.data.get("time")

    bookings = Booking.objects.filter(
        patient_id=user_id,
        doctor_id=doctor_id,
        Date=date,
        time_slot__icontains=time,
        status="Upcoming"
    )

    if not bookings.exists():
        return Response({"error": "No upcoming appointment found"}, status=404)

    booking = bookings.first()
    booking.status = "Cancelled"
    booking.save()

    return Response({"message": "Appointment cancelled"})

# Booking filter API
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def filter_bookings(request):
    user_id = request.user.id
    bookings = Booking.objects.filter(patient_id=user_id)

    doctor_name = request.query_params.get('doctor_name')
    status = request.query_params.get('status')

    # Filter by doctor name
    if doctor_name:
        bookings = bookings.filter(doctor__name__icontains=doctor_name)

    # Filter by status
    if status:
        bookings = bookings.filter(status__iexact=status)

    serializer = BookingSerializer(bookings, many=True)
    return Response(serializer.data)