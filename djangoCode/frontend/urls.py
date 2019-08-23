from . import views
from django.conf.urls import url

urlpatterns = [
	url('logging', views.logging),
    url('', views.index ),

]