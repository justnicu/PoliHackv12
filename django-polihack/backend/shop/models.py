from django.db import models

# Create your models here.

class City(models.Model):
    name = models.CharField(max_length=20)
    city_img = models.ImageField(upload_to='images/cities/', default='/home/nicu/Desktop/PoliHackv12/polihack/public/cityImg/pizza.jpg')

    def _str_(self):
        return self.name

class Company(models.Model):
    name = models.CharField(max_length=40)
    address = models.TextField()
    city = models.ForeignKey(City, on_delete=models.CASCADE, related_name="companyOf")
    rating = models.IntegerField(default=0)
    company_img = models.ImageField(upload_to='images/companies', default='/home/nicu/Desktop/PoliHackv12/polihack/public/cityImg/pizza.jpg')

    def _str_(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=20)
    description = models.TextField()
    quantity = models.IntegerField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name="productOf")

    def _str_(self):
        return self.name