
# Create your models here.
from django.db import models
import uuid

class Category(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255, verbose_name="Tên danh mục")
    slug = models.SlugField(max_length=255, unique=True)
    icon = models.URLField(max_length=500, blank=True, null=True, help_text="Link ảnh icon (VD: https://domain.com/icon.png)")
    description = models.TextField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name

class Product(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    category = models.ForeignKey(Category, on_delete=models.RESTRICT, related_name='products')
    name = models.CharField(max_length=255, verbose_name="Tên sản phẩm")
    slug = models.SlugField(max_length=255, unique=True)
    short_description = models.CharField(max_length=500, blank=True)
    description = models.TextField(verbose_name="Mô tả chi tiết")
    
    # Giá và Kho cơ bản
    base_price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Giá gốc")
    sale_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True, verbose_name="Giá khuyến mãi")
    stock = models.PositiveIntegerField(default=0, verbose_name="Tồn kho")

    weight = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True, help_text="Cân nặng (kg)")
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class ProductVariant(models.Model):
    """Quản lý các biến thể như Size M/L, Màu Đỏ/Xanh"""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='variants')
    name = models.CharField(max_length=100, help_text="VD: Đỏ - Size M")
    sku = models.CharField(max_length=100, unique=True)
    additional_price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00, help_text="Giá cộng thêm so với base_price")
    stock = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.product.name} - {self.name}"

class ProductImage(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')
    image_url = models.URLField(max_length=500) 
    alt_text = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Image for {self.product.name}"