from rest_framework import serializers
from .models import City
from .models import Company
from .models import Product

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ('name', 'city_img')

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('name', 'address', 'city', 'company_img')

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('name', 'description', 'quantity', 'company')