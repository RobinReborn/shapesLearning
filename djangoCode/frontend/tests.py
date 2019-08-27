from django.test import TestCase
from frontend.models import User,Action
import datetime
class UserTestCase(TestCase):
    Action.objects.create(ipAddress = '127.0.0.1', state = {"rootReducer":{"shape":2,"level":0,"attr":false,"snapped":[]},"snapReducer":{"snapped":[]},"instructionsReducer":{"instructions":[0,4],"showControlState":"hidden","showControlPanelButton":"visible","arrowVisible":["none","none","none","none"],"errors":{},"rotates":[0,0,0,0]},"errorReducer":{"errors":{}}}, 
         stateSubset = {"instructions":[0,4],"showControlState":"hidden","showControlPanelButton":"visible","arrowVisible":["none","none","none","none"],"errors":{},"rotates":[0,0,0,0]},
           action = {"type":"HIDE_CONTROL_PANEL_BUTTON"})
    User.objects.create(ipAddress = '127.0.0.1',
            level= '0 , 0',
            timeDifference = 0,time = datetime.datetime.now(datetime.timezone.utc))
# Create your tests here.
