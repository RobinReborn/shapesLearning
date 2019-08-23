from django.db import models
import json
from django.conf import settings
from datetime import datetime
import time
import jsonfield



class Action(models.Model):
    ipAddress = models.CharField(max_length=50)
    time = models.DateTimeField(auto_now=True)
    data = jsonfield.JSONField()


# Create your models here.
