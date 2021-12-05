from django.contrib import admin
from .models import Product
from .models import Company
from .models import City
from django.contrib.auth.models import User

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'quantity', 'price', 'company')

class CompanyAdmin(admin.ModelAdmin):
    list_display = ('name', 'address', 'city', 'rating', 'company_img')

class CityAdmin(admin.ModelAdmin):
    list_display = ('name', 'city_img')

class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'first_name', 'last_name', 'email', 'password')

# Register your models here.

admin.site.register(Product, ProductAdmin)
admin.site.register(Company, CompanyAdmin)
admin.site.register(City, CityAdmin)
