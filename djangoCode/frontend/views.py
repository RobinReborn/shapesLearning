from django.shortcuts import render
from frontend.models import Action
from django.http import HttpResponse

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
	print ("logging..." + str(data.keys()))
	Action.objects.create(ipAddress = get_client_ip(request), state = data['state'], 
		 stateSubset = data['stateSubset'],  action = data['action']).save()
	return HttpResponse('')

# Create your views here.
