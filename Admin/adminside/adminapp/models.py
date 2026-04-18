from django.contrib.auth.models import AbstractBaseUser,BaseUserManager 
from django.db import models


class UserManager(BaseUserManager): 
     def create_user(self, email, password=None): 
          if not email:  
              raise ValueError("Users must have an email address") 
          email = self.normalize_email(email) 
          user = self.model(email=email) 
          user.set_password(password) 
          user.save(using=self._db) 
          return user 
      
     def create_superuser(self, email, password): 
         user = self.create_user(email, password) 
         user.is_admin = True 
         User.is_superuser = True 
         user.save(using=self._db) 
         return user 
 
class User(AbstractBaseUser): 
     choice=[
         ('Male',"M"),
         ('Female','F'),
         ('Prefer not to say','Not')
    ]
     email = models.EmailField(unique=True) 
     name = models.CharField(max_length =255) 
     is_active = models.BooleanField(default=True) 
     is_admin = models.BooleanField(default=False) 
     dob=models.DateField(max_length=10,null=True)
     gender=models.CharField(max_length=17,choices=choice,null=True)
     address=models.TextField(max_length=100,null=True)
     phone_num=models.CharField(max_length=10,null=True)
     objects = UserManager() 
     USERNAME_FIELD = 'email'
    
class Doctor(models.Model):
     name = models.CharField(max_length =255)
     profile_pic = models.ImageField(upload_to='doctor_images/')
     Specialization=models.CharField(max_length=30,null=True)
     phone_num=models.CharField(max_length=10,null=True)
     email = models.EmailField(unique=True) 
     Qualification=models.CharField(max_length=30,null=True)
     Year_ofExp=models.CharField(max_length=20,null=True)
     total_view=models.IntegerField(null=True)
     is_active = models.BooleanField(default=True) 


class Booking(models.Model):
     choice_book=[
          ("9:00 AM","9am"),
          ("10:00 AM","10am"),
          ("11:00 AM","11am"),
          ("4:00 PM","4pm"),
          ("5:00 PM","5pm"),
          ("6:00 PM","6pm")
     ] 
     patient = models.ForeignKey(User,on_delete=models.CASCADE)
     doctor=models.ForeignKey(Doctor,on_delete=models.CASCADE)
     Date=models.DateField(max_length=10,null=True)
     time_slot=models.CharField(max_length=10,choices=choice_book,null=True)
     status=models.CharField(max_length=20,null=True)
    
    