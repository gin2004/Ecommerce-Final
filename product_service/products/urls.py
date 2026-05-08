from django.urls import path
from . import views

urlpatterns = [
    # ---- Các API của Danh mục ----
    path('api/categories/', views.category_list, name='category_list'),
    path('api/categories/<uuid:pk>/', views.category_detail, name='category_detail'),

    # ---- Các API của Sản phẩm ----
    path('api/products/', views.product_list, name='product_list'),
    
    # Đặt API featured TRƯỚC API detail để tránh bị nhận nhầm chữ 'featured' thành một UUID
    path('api/products/featured/', views.featured_products, name='featured_products'),
    
    path('api/products/<uuid:pk>/', views.product_detail, name='product_detail'),
]