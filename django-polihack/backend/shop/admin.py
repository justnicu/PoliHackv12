from django.contrib import admin
from .models import Product
from .models import Company
from .models import City

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'quantity', 'company')

class CompanyAdmin(admin.ModelAdmin):
    list_display = ('name', 'address', 'city')

class CityAdmin(admin.ModelAdmin):
    list_display = ('name', 'name')

# Register your models here.

admin.site.register(Product, ProductAdmin)
admin.site.register(Company, CompanyAdmin)
admin.site.register(City, CityAdmin)