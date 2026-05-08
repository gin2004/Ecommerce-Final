from rest_framework import serializers
from .models import Category, Product

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__' # Lấy toàn bộ trường để hỗ trợ CRUD Danh mục

class ProductSerializer(serializers.ModelSerializer):
    # Các trường Read-Only (Chỉ trả về khi GET, không bắt buộc khi POST/PUT)
    category_name = serializers.CharField(source='category.name', read_only=True)
    display_price = serializers.SerializerMethodField(read_only=True)
    display_image = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Product
        fields = '__all__' # Bao gồm cả id, name, category, base_price, v.v.

    def get_display_price(self, obj):
        # Tính toán giá để hiển thị trên UI
        actual_price = obj.sale_price if obj.sale_price else obj.base_price
        if actual_price:
            return f"{int(actual_price):,}đ".replace(',', '.')
        return "Liên hệ"

    def get_display_image(self, obj):
        # Lấy link ảnh đầu tiên để làm thumbnail
        first_image = obj.images.first()
        if first_image:
            return first_image.image_url
        return "https://via.placeholder.com/500"