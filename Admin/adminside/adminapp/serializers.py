from rest_framework import serializers
from .models import User,Doctor,Booking

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields='__all__'

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'

class BookingSerializer(serializers.ModelSerializer):
    #  doctor = ProductSerializer(read_only=True)
     doctor = serializers.CharField(source='doctor.name', read_only=True)
     patient= serializers.CharField(source='patient.name', read_only=True)

     class Meta:
        model = Booking
        fields = '__all__'
        