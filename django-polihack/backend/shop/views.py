from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response 
from .serializers import CitySerializer
from .serializers import CompanySerializer
from .serializers import ProductSerializer
from .serializers import CreateCompanySerializer
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

class CreateCompanyView(viewsets.ModelViewSet):
    serializer_class = CreateCompanySerializer
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            name = serializer.data.name
            address = serializer.data.address
            city = serializer.data.city
            company_img = serializer.data.company_img
            queryset = Company.objects.all()
            if queryset.exists():
                company = queryset[0]
                company.name = name
                company.address = address
                company.city = city
                company.company_img = company_img
                company.save(update_fields=['name', 'address', 'city', 'company_img'])
            else:
                company = Company(name=name, address=address, city=city, company_img=company_img)
                company.save()
            return Response(CompanySerializer(company).data, status=status.HTTP_200_OK)