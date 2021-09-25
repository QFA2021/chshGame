from django.shortcuts import render
from django.http import HttpResponse 
from . import gameLogic 
import random 
import json 
# Create your views here.

def index(request):
    return render(request, 'qGame/index.html')

def gameInterface(request):
    if request.is_ajax():
        testBit = request.GET.get('t_0', None)
        parameters = request.GET #in the order of t_0, t_1, phi_0, phi_1
        print("is ajax", testBit, parameters, parameters.get('t_0'), gameLogic.testFunction(1,1,1,1))
        prob = gameLogic.testFunction(1,1,1,1)
        dict = {'prob':prob*random.random()}
        return HttpResponse(json.dumps(dict), content_type='application/json')
    return render(request, 'qGame/gameInterface.html')