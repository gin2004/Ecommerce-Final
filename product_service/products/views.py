from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer

# ==========================================
# API DANH MỤC (CATEGORIES)
# ==========================================

@api_view(['GET', 'POST'])
def category_list(request):
    """ Lấy danh sách danh mục hoặc Tạo mới danh mục """
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'PATCH', 'DELETE'])
def category_detail(request, pk):
    """ Xem chi tiết, Cập nhật hoặc Xóa 1 danh mục """
    category = get_object_or_404(Category, pk=pk)

    if request.method == 'GET':
        serializer = CategorySerializer(category)
        return Response(serializer.data)

    elif request.method in ['PUT', 'PATCH']:
        # Nếu là PATCH thì cho phép cập nhật 1 phần (partial=True)
        partial = request.method == 'PATCH'
        serializer = CategorySerializer(category, data=request.data, partial=partial)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# ==========================================
# API SẢN PHẨM (PRODUCTS)
# ==========================================

@api_view(['GET', 'POST'])
def product_list(request):
    """ Lấy danh sách sản phẩm hoặc Tạo mới sản phẩm """
    if request.method == 'GET':
        products = Product.objects.all().prefetch_related('images', 'category')
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'PATCH', 'DELETE'])
def product_detail(request, pk):
    """ Xem chi tiết, Cập nhật hoặc Xóa 1 sản phẩm """
    product = get_object_or_404(Product, pk=pk)

    if request.method == 'GET':
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    elif request.method in ['PUT', 'PATCH']:
        partial = request.method == 'PATCH'
        serializer = ProductSerializer(product, data=request.data, partial=partial)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def featured_products(request):
    """ Lấy danh sách sản phẩm nổi bật """
    products = Product.objects.filter(is_featured=True).prefetch_related('images', 'category')[:4]
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)