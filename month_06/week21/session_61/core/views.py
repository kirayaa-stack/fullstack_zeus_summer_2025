from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
def index(request): # 'templates' хавтаснаас 'index.html'-г хайж олоод
# хэрэглэгчид харуулна
    return render(request, 'index.html')