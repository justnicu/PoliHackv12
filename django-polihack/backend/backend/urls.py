"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from shop import views

routerCity = routers.DefaultRouter()
routerCity.register(r'cities', views.CityView, 'shop')
routerCompany = routers.DefaultRouter()
routerCompany.register(r'companies', views.CompanyView, 'shop')
routerProduct = routers.DefaultRouter()
routerProduct.register(r'products', views.ProductView, 'shop')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(routerCity.urls)),
    path('api/', include(routerCompany.urls)),
    path('api/', include(routerProduct.urls)),
]

if settings.DEBUG:
        urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
