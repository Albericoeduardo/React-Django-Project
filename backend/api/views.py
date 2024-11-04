from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Product

from .serializers import ProductSerializer

@api_view(['GET'])
def index(request):
    products = Product.objects.all()
    products_serialized = ProductSerializer(products, many=True)

    return Response(products_serialized.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def filter(request, query):
    products = Product.objects.filter(nome__icontains=query)
    products_serialized = ProductSerializer(products, many=True)

    if not products.exists:
        return Response(status=status.HTTP_404_NOT_FOUND)

    return Response(products_serialized.data, status=status.HTTP_200_OK)