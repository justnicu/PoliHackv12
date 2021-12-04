from rest_framework import serializers
from .models import City
from .models import Company
from .models import Product

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        id = serializers.ReadOnlyField()
        fields = ('name', 'city_img', 'id')

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        id = serializers.ReadOnlyField()
        fields = ('name', 'address', 'city', 'rating', 'company_img', 'id')

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('name', 'description', 'quantity', 'company')
