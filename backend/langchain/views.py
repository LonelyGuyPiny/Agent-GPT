from django.shortcuts import render
from utils import db
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from rest_framework import status
import json
from bson import json_util
import hashlib
#from validate_email_address import validate_email
from email_validator import validate_email

# DB collection
Users = db['Users']


def parse_json(data):
    return json.loads(json_util.dumps(data))

# Create your views here.


class AuthView(APIView):
    def post(self, request):
        user = request.data
        email = user.get('email')
        password = hashlib.sha256(user.get('password').encode('utf-8')).hexdigest()
        first_name = user.get('firstName')
        user['password'] = password

        if Users.find_one({'email': email}):
            error = {'email': 'Email already used'}
            return Response({'error': error}, status=status.HTTP_400_BAD_REQUEST)
        
        """isvalid = validate_email(email, check_deliverability=True)
        print(isvalid)
        if not isvalid:
            error = {'email': 'Invalid email address'}
            return Response({'error': error}, status=status.HTTP_404_NOT_FOUND)"""
        
        Users.insert_one(user)            
        user = Users.find_one({'email': email})            
        
        user_for_token = User.objects.create_user(first_name, email, password)
        token = Token.objects.create(user=user_for_token)
                    
        return Response(data={'user': parse_json(user), 'token': token.key}, status=status.HTTP_201_CREATED)
        
class UserView(APIView):
    def post(self, request):
        user = request.data
        email = user.get('email')
        password = user.get('password')

        if Users.find_one({'email': email}):
            password = hashlib.sha256(password.encode('utf-8')).hexdigest()
            user = Users.find_one({'email': email})

            if password != user.get('password'):
                print(password)
                print(user.get('password'))
                return Response({'error': {'email': 'Password incorrect'}}, status=status.HTTP_401_UNAUTHORIZED)
            
            user_for_token = User.objects.get(email=email)
            print(user_for_token)
            token, created = Token.objects.get_or_create(user_for_token)

            return Response(data={'user': parse_json(user), 'token': token.key}, status=status.HTTP_202_ACCEPTED)
        
        return Response({'error': {'email': 'User doesn\'t exist'}}, status=status.HTTP_404_NOT_FOUND)
