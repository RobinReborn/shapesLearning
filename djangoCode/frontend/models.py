from django.db import models
import json
from django.conf import settings
from datetime import datetime
import time
import jsonfield



class Action(models.Model):
    ipAddress = models.CharField(max_length=50, blank=True)
    time = models.DateTimeField(auto_now=True)
    state = jsonfield.JSONField()
    action = models.CharField(max_length=50)
    stateSubset = jsonfield.JSONField()
    def __str__(self):
        return "action " + self.action + " stateSubset " + self.stateSubset + " time " + str(self.time)

class User(models.Model):
    level = models.CharField(max_length=50)
    ipAddress = models.CharField(max_length=50, blank=True)
    timeDifference = models.DurationField()
    time = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.ipAddress + "  " + self.level + "  " + str(self.timeDifference.seconds)