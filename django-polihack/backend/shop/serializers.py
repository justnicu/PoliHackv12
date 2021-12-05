from rest_framework import serializers
from .models import City
from .models import Company
from .models import Product
from django.contrib.auth.models import User

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
        fields = ('name', 'description', 'quantity', 'price', 'company')

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=65, min_length=8, write_only=True)
    email = serializers.EmailField(max_length=255, min_length=4)
    first_name = serializers.CharField(max_length=255, min_length=2)
    last_name = serializers.CharField(max_length=255, min_length=2)

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'password')

    def validate(self, attrs):
        email = attrs.get('email', '')
        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError({'email', ('Email is already in use')})
        return super().validate(attrs)

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

class UserLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password')
