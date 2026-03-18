from django.shortcuts import render
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

