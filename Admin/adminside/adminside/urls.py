from django.urls import path
from adminapp import views

urlpatterns = [
    path('',views.adminLogin),
    path('home',views.home,name='home'),
    path('doctors',views.doc),
    path('appointments',views.appointment),
    path('users',views.user),
    path('userprofile',views.userprofile),
    path('report',views.report),
    path('add',views.add),
    path('docedit',views.edit),
    path('docprofile',views.docprofile),

    


# API URLS

    path('signup',views.signup),
    path('login',views.login_api),
    path('list_products', views.list_products, name='retrieveproductapi'),
    path('<int:pk>/get_doctor', views.get_doctor, name='getdoctorapi'),
    path('booking',views.book_Appointment),
    path('<int:pk>/appointmentlist',views.my_appointments),
    path('updatepass',views.update_password),
    path('logout',views.logout_api),
    path('filterdoctor',views.filter_doctor),
    path('<int:pk>/get_user',views.get_user),
    path('<int:pk>/update_user',views.update_user),
    path('cancelbooking',views.cancel_appointment),
    path('bookingfilter',views.filter_bookings)

]
