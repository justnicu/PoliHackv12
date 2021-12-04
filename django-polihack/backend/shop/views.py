from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CitySerializer
from .serializers import CompanySerializer
from .serializers import ProductSerializer
from .models import City
from .models import Company
from .models import Product

# Create your views here.

class CityView(viewsets.ModelViewSet):
    serializer_class = CitySerializer
    queryset = City.objects.all()

class CompanyView(viewsets.ModelViewSet):
    serializer_class = CompanySerializer
    queryset = Company.objects.all()

class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()