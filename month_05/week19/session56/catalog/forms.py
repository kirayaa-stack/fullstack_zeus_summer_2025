from django import forms
from .models import Book
from .models import Author
from .models import Member
class BookForm(forms.ModelForm):
    class Meta:
        model = Book
        fields = ['title', 'author_name', 'published_date', 'isbn']

        labels = { #in mgl
            'title':"Номын нэр",
            'author_name' : 'Зохиогчийн Нэр',
            'published_date': 'Он сар өдөр (YYYY-MM-DD)',
            'isbn':'ISBN дугаар'
        }

class AuthorForm(forms.ModelForm):
    class Meta:
        model = Author
        fields = ['name', 'birth_date' , 'biography']

        labels = {
            'name': "Нэр",
            'birth_date' : "Төрсөн он сар",
            'biography' : "Намтар"
        }

class MemberForm(forms.ModelForm):
    class Meta:
        model = Member
        fields = ['name', 'email']

        labels = {
            'name' :"Нэр",
            'email':"Имейл",
        }
        
        
        
        
        

