from django.shortcuts import render
from django.http import HttpResponse 
from . import gameLogic, chsh
import random 
import json 
import numpy as np 
# Create your views here.
prelim_prob = 0 
def index(request):
    return render(request, 'qGame/index.html')

def gameInterface(request):
    if request.is_ajax():
        testBit = request.GET.get('t_0', None)
        parameters = request.GET #in the order of t_0, t_1, phi_0, phi_1
        angles = [np.pi * float(parameters[key]) for key in parameters ]
        prob = chsh.calculateProb(100, *angles)
        print(prob)
        dict = {'prob':prob}
        return HttpResponse(json.dumps(dict), content_type='application/json')
    return render(request, 'qGame/gameInterface.html')