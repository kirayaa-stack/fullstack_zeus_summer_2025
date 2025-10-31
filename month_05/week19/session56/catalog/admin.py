from django.contrib import admin

# Register your models here.

from .models import Author, Member, Book

admin.site.register(Author)
admin.site.register(Member)
admin.site.register(Book)