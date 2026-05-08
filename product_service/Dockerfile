# Sử dụng Python 3.11 bản slim (nhẹ, tương thích tốt)
FROM python:3.11-slim

# Ngăn Python ghi file .pyc ra đĩa
ENV PYTHONDONTWRITEBYTECODE=1
# Đảm bảo log Python được in trực tiếp ra terminal
ENV PYTHONUNBUFFERED=1

# Thiết lập thư mục làm việc
WORKDIR /app

# Cài đặt các thư viện hệ thống cần thiết cho PostgreSQL
RUN apt-get update \
    && apt-get install -y --no-install-recommends gcc libpq-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Copy file requirements và cài đặt
COPY requirements.txt /app/
RUN pip install --upgrade pip \
    && pip install -r requirements.txt

# Copy toàn bộ source code
COPY . /app/

# Mở port
EXPOSE 8000

# Chạy server bằng Gunicorn
CMD ["gunicorn", "product_service.wsgi:application", "--bind", "0.0.0.0:8000"]