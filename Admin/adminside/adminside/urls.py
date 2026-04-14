from django.urls import path
from adminapp import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('',views.adminLogin,name='login'),
    path('home',views.home,name='home'),
    path('doctors',views.doc,name='doctors'),
    path('appointments',views.appointment),
    path('users',views.user),
    path('userprofile/<int:id>', views.userprofile, name='userprofile'),
    path('report',views.report),
    path('add',views.add),
    path('docedit/<int:id>', views.docedit, name='docedit'),
    path('docprofile/<int:id>', views.docprofile, name='docprofile'),
    path('deletedoctor/<int:id>', views.delete_doctor, name='deletedoctor'),
    path('logout',views.logout_view,name='logout'),

    

    


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
    path('bookingfilter',views.filter_bookings),

]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)