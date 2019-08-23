from django.shortcuts import render
from frontend.models import Action
from django.http import HttpResponse

def index(request):
    return render(request, 'frontend/index.html')
def logging(request):
	data = request.POST.dict()
	print ("logging..." + str(data.keys()))
	Action.objects.create(ipAddress = '', state = data['state'], action = data['action']).save()
	return HttpResponse('')

# Create your views here.
