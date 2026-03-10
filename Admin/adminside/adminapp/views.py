from django.shortcuts import render
def Login(request):
    return render(request,'Login.html')
def Home(request):
    return render(request,"Home.html")


