from django.shortcuts import render, redirect , get_object_or_404

# Create your views here.
from .models import Book
from .forms import BookForm
from .models import Author
from .forms import AuthorForm
from .models import Member
from . forms import MemberForm

def book_list(request):

    books = Book.objects.all()

    context = {
        'books_key' : books
        }
    return render(request, 'catalog/book_list.html', context)

def author_list(request):

    authors = Author.objects.all()

    context = {
        'authors_key' : authors
    }
    return render (request, 'catalog/author_list.html', context)

def member_list(request):

    members = Member.objects.all()

    context = {
        'members_key' : members
    }
    return render (request, 'catalog/member_list.html' , context)





def create_book(request):
    form = BookForm(request.POST)
    if request.method == 'POST':
        if form.is_valid():
            form.save()
            return redirect('book_list')
        else:
            form = BookForm()
    return render(request, 'catalog/book_form.html', {'form': form})

def create_author(request):
    form = AuthorForm(request.POST)
    if request.method == 'POST':
        if form.is_valid():
            form.save()
            return redirect('author_list')
        else:
            form = AuthorForm()
    return render(request, 'catalog/author_form.html', {'form': form})

def create_member(request):
    form = MemberForm(request.POST)
    if request.method == 'POST':
        if form.is_valid():
            form.save()
            return redirect('member_list')
        else:
            form = MemberForm()
    return render(request, 'catalog/member_form.html', {'form': form})



def update_book(request, pk):
    book = get_object_or_404(Book, pk=pk)

    if request.method == 'POST':
        form = BookForm(request.POST , instance=book)
        if form.is_valid():
            form.save()
            return redirect('book_list')
    else:
        form= BookForm(instance=book)

    return render(request, 'catalog/book_form.html' , {'form': form})

def book_delete(request, pk):
    book = get_object_or_404(Book, pk=pk)
    if request.method == 'POST':
        book.delete() 
        return redirect('book_list')
     
    return render(request, 'catalog/book_confirm_delete.html', {'book':book})