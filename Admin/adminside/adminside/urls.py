from django.urls import path
from adminapp import views

urlpatterns = [
    path('',views.login),
    path('home',views.home),
    path('doctors',views.doc),
    path('appointments',views.appointment),
    path('users',views.user),
    path('profile',views.userprofile),
    path('report',views.report),
    path('add',views.add),
    path('edit',views.edit)
]
