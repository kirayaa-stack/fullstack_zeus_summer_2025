from django.urls import path
from . import views # core/views.py-г импортлох

# Үндсэн хаяг (жишээ нь: /) орж ирвэл
# views.index функцийг ажиллуул
urlpatterns = [
    path('', views.index, name='hom'),
]