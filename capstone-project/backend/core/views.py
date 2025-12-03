from django.shortcuts import render
from .models import FoodCategory
from django.http import JsonResponse

def home(request):
    return render(request, 'base.html')
def category_list(request):
    categories = list(FoodCategory.objects.values())
    return JsonResponse(categories, safe= False)

# Create your views here.
