from django.shortcuts import render
from django.http import HttpResponse 

# Create your views here.

def index(request):
    return render(request, 'qGame/index.html')

def gameInterface(request):

    return render(request, 'qGame/gameInterface.html')