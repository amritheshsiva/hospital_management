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
from django.db.models import Count
from django.db.models import Q
from django.contrib.auth.decorators import login_required



def adminLogin(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']       
        user = authenticate(request,   email=  email, password=password)
        if user is not None and user.is_admin:
            login(request, user)
            return redirect('home') 
    return render(request,'login.html')

@login_required(login_url='login')
def home(request):
    user_count = User.objects.filter(is_admin=False).count()
    doctor_count = Doctor.objects.count()
    appointment_count=Booking.objects.count()
    return render(request,"home.html",{'user_count': user_count,'doctor_count': doctor_count,'appointment_count':appointment_count})

@login_required(login_url='login')
def doc(request):
    query = request.GET.get('q')
    if query:
        doc_list = Doctor.objects.filter(
            Q(name__icontains=query) |
            Q(Specialization__icontains=query)
        )
    else:
        doc_list = Doctor.objects.all()
    return render(request, 'doctors.html', {'doc_list': doc_list})

@login_required(login_url='login')
def appointment(request):
    date = request.GET.get('date')
    if date:
        booking_list = Booking.objects.filter(Date=date)
    else:
        booking_list = Booking.objects.all()
    return render(request, 'appointments.html', {
        'booking_list': booking_list
        })

@login_required(login_url='login')
def user(request):
    query = request.GET.get('q')

    if query:
        user_list = User.objects.filter(
            is_admin=False,
            name__icontains=query
        )
    else:
        user_list = User.objects.filter(is_admin=False)

    return render(request, 'user_manage.html', {
        'user_list': user_list
    })

@login_required(login_url='login')
def userprofile(request,id):
    user=User.objects.get(id=id)
    userbooking = Booking.objects.filter(patient_id=id)
    return render(request, 'userprofile.html', {
        'user': user,
        'userbooking': userbooking
    })

@login_required(login_url='login')
def report(request):
    month = request.GET.get('month')
    if month:
        year, month = month.split('-')
        data = Booking.objects.filter(
            Date__year=year,
            Date__month=month
        ).values(
            'doctor__name'
        ).annotate(
            total=Count('id')
        ).order_by('-total')
    else:
        data = Booking.objects.values(
            'doctor__name'
        ).annotate(
            total=Count('id')
        ).order_by('-total')
    return render(request, 'reports.html', {'data': data})

@login_required(login_url='login')
def add(request):
    if request.method == "POST":
        name = request.POST.get('name')
        specialization = request.POST.get('specialization')
        phone = request.POST.get('phone')
        email = request.POST.get('email')
        qualification = request.POST.get('qualification')
        exp = request.POST.get('experience')
        image = request.FILES.get('profile_pic')
        Doctor.objects.create(
            name=name,
            Specialization=specialization,
            phone_num=phone,
            email=email,
            Qualification=qualification,
            Year_ofExp=exp,
            profile_pic=image
        )
    return render(request, 'doctor_add.html')

@login_required(login_url='login')
def delete_doctor(request, id):
    doctor = Doctor.objects.get(id=id)
    doctor.delete()
    return redirect('doctors')


@login_required(login_url='login')
def docedit(request, id):
    doctor = Doctor.objects.get(id=id)
    if request.method == "POST":
        name = request.POST.get('name')
        if name:
            doctor.name = name
        specialization = request.POST.get('specialization')
        if specialization:
            doctor.Specialization = specialization
        phone = request.POST.get('phone')
        if phone:
            doctor.phone_num = phone
        email = request.POST.get('email')
        if email:
            doctor.email = email
        qualification = request.POST.get('qualification')
        if qualification:
            doctor.Qualification = qualification
        exp = request.POST.get('experience')
        if exp:
            doctor.Year_ofExp = exp
        if request.FILES.get('profile_pic'):
            doctor.profile_pic = request.FILES.get('profile_pic')
        doctor.save()
        return redirect('doctors')
    return render(request, 'doctor_edit.html', {'doctor': doctor})

@login_required(login_url='login')
def docprofile(request, id):
    doctor = Doctor.objects.get(id=id)
    return render(request, 'doctor_profile.html', {'doctor': doctor})

def logout_view(request):
    request.session.flush()
    return redirect('login')




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
    return Response({'token':token.key,'user_id': user.id},status=HTTP_200_OK)


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

# @api_view(['POST'])
# @permission_classes([IsAuthenticated])
# def cancel_appointment(request):
#     user_id = request.user.id
#     doctor_id = request.data.get("doctor_id")
#     date = request.data.get("date")
#     time = request.data.get("time")

#     bookings = Booking.objects.filter(
#         patient_id=user_id,
#         doctor_id=doctor_id,
#         Date=date,
#         time_slot__icontains=time,
#         status="Upcoming"
#     )

#     if not bookings.exists():
#         return Response({"error": "No upcoming appointment found"}, status=404)

#     booking = bookings.first()
#     booking.status = "Cancelled"
#     booking.save()

#     return Response({"message": "Appointment cancelled"})
@api_view(['POST'])
def cancel_appointment(request):
    try:
        print("REQUEST DATA:", request.data)

        booking_id = request.data.get('booking_id')

        if not booking_id:
            return Response({"error": "booking_id missing"}, status=400)
    
        booking = Booking.objects.filter(id=booking_id).first()

        if not booking:
            return Response({"error": "Booking not found"}, status=404)

        booking.status = "Cancelled"
        booking.save()

        return Response({"message": "Cancelled successfully"})

    except Exception as e:
        print("ERROR:", e)
        return Response({"error": str(e)}, status=500)

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
