from django.urls import path
from .import views

urlpatterns = [
    path('',views.book_list, name='book_list'),
    path('', views.author_list, name = 'author_list'),
    path('book/new/', views.create_book, name = 'book_create'),
    path('author/new/', views.create_author, name = 'author_create'),
    path('member/new/', views.create_member, name = 'member_create'),
    path('book/<int:pk>/edit/', views.update_book, name= 'book_update'),
    path('book/<int:pk>/delete/', views.book_delete, name='book_delete'),
]