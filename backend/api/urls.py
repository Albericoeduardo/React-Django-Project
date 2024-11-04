from django.urls import path
from .views import index, filter

#/products
urlpatterns = [
    path('', index, name="list-products"),
    path('filter/<str:query>', filter, name="filter-products")
]