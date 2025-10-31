from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=200, verbose_name="Book name")
    author_name = models.CharField(max_length=200,verbose_name="Author name")
    published_date = models.DateField(verbose_name="Published Year")
    isbn = models.CharField(max_length=13, unique=True, verbose_name="ISBN number")
    
    def __str__(self):
        return self.title

# Зохиолчийн модел
class Author(models.Model):
    name = models.CharField(max_length=100, verbose_name="Name")
    birth_date = models.DateField(verbose_name="Birthday")
    biography = models.TextField(blank=True, null=True,verbose_name="Biography")
    
    def __str__(self):
        return self.name
    
# Номын сангийн гишүүний модел
class Member(models.Model):
    name = models.CharField(max_length=100, verbose_name="Member Name")
    email = models.EmailField(unique=True, verbose_name="E-mail Name")
    
    def __str__(self):
        return self.name