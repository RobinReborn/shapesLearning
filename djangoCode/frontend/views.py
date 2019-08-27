from django.shortcuts import render
from frontend.models import Action, User
from django.http import HttpResponse
import datetime
import json

def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip



def index(request):
    return render(request, 'frontend/index.html')
def logging(request):
    data = request.POST.dict()
    Action.objects.create(ipAddress = get_client_ip(request), state = data['state'], 
    	 stateSubset = data['stateSubset'],  action = data['action']).save()
    if (json.loads(data['action'])['type'] == "INCREMENT_SHAPE"):
        timeDiff = datetime.timedelta(milliseconds=0)
        level = str(json.loads(data['stateSubset'])['level']) + " , " + str(json.loads(data['stateSubset'])['shape'])
        print (level)
        if (level != '0 , 0'):
            print(User.objects.order_by('time')[0].time)
            timeDiff =  User.objects.order_by('time')[0].time - datetime.datetime.now(datetime.timezone.utc)
        User.objects.create(ipAddress = get_client_ip(request),
            level= level,
            timeDifference = timeDiff).save()
    return HttpResponse('')
