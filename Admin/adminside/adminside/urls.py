from django.urls import path
from adminapp import views

urlpatterns = [
    path('',views.login),
    path('home',views.home),
    path('doctors',views.doc),
    path('appointments',views.appointment),
    path('users',views.user),
    path('userprofile',views.userprofile),
    path('report',views.report),
    path('add',views.add),
    path('docedit',views.edit),
    path('docprofile',views.docprofile),




    path('signup',views.Signup),
    path('login',views.login_api),
    path('list_products', views.list_products, name='retrieveproductapi'),
    path('<int:pk>/update_product', views.update_product, name='updateproductapi'),
    path('booking',views.book_Appointment),

]
