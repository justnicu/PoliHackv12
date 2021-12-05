from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response 
from .serializers import CitySerializer
from .serializers import CompanySerializer
from .serializers import ProductSerializer
from .models import City
from .models import Company
from .models import Product

from .serializers import UserSerializer
from .serializers import UserLoginSerializer
from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.conf import settings
from django.contrib import auth
import jwt

# Create your views here.

class CityView(viewsets.ModelViewSet):
    serializer_class = CitySerializer
    queryset = City.objects.all()

class CompanyView(viewsets.ModelViewSet):
    serializer_class = CompanySerializer
    queryset = Company.objects.all()
    def create(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    def create(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RegisterView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    def create(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(viewsets.ModelViewSet):
    serializer_class = UserLoginSerializer
    queryset = User.objects.all()
    def create(self, request):
        data = request.data
        username = data.get('username', '')
        password = data.get('password', '')
        user = auth.authenticate(username=username, password=password)
        if user:
            auth_token = jwt.encode({"username":user.username}, "SiPlasPlasSiPlasPlasSiPlasPlasSiPlasPlasSiPlasPlasSiPlasPlasSiPlasPlas")
            serializer = UserLoginSerializer(user)
            data = {'user': serializer.data, 'token': auth_token}
            return Response(data, status=status.HTTP_200_OK)
        return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)