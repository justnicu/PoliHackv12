from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response 
from .serializers import CitySerializer
from .serializers import CompanySerializer
from .serializers import ProductSerializer
from .models import City
from .models import Company
from .models import Product

from rest_framework import status
from rest_framework.decorators import api_view

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

@api_view(['POST'])
def CreateCompany(request):
    serializer = CompanySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)