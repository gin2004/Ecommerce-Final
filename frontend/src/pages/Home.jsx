import React from 'react';
import { ShoppingCart, Heart, Smartphone, Shirt, Home as HomeIcon, Dumbbell, Book, Sparkles, Car, Apple, Dog, Gamepad2, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const categories = [
  { name: 'Electronics', icon: Smartphone },
  { name: 'Fashion', icon: Shirt },
  { name: 'Home & Garden', icon: HomeIcon },
  { name: 'Sports', icon: Dumbbell },
  { name: 'Books', icon: Book },
  { name: 'Beauty & Health', icon: Sparkles },
  { name: 'Toys & Games', icon: Gamepad2 },
  { name: 'Automotive', icon: Car },
  { name: 'Food & Grocery', icon: Apple },
  { name: 'Pet Supplies', icon: Dog },
];

const featuredProducts = [
  { id: 1, name: 'Tai Nghe Không Dây Premium Z1', category: 'ELECTRONICS', price: '2.490.000đ', tag: 'New', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80' },
  { id: 2, name: 'Đồng Hồ Thông Minh Core S4', category: 'TECH ACCESSORIES', price: '1.850.000đ', tag: '', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80' },
  { id: 3, name: 'Giày Chạy Bộ Performance X', category: 'SPORTS', price: '1.200.000đ', tag: '', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80' },
  { id: 4, name: 'Bàn Phím Cơ Mech Pro RGB', category: 'GAMING', price: '3.100.000đ', tag: '-20%', image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80' },
];

const recommendedProducts = [
  { id: 5, name: 'Giày Lifestyle Urban...', price: '1.250.000đ', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80' },
  { id: 6, name: 'Tai nghe Bluetooth...', price: '3.500.000đ', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80' },
  { id: 7, name: 'Đồng hồ Thông minh...', price: '2.100.000đ', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80' },
  { id: 8, name: 'Bàn phím cơ Silent Pro', price: '1.800.000đ', image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&q=80' },
  { id: 9, name: 'Giày chạy bộ Speed...', price: '2.450.000đ', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80' },
];

function Home() {
  return (
    <div className="home-page container">
      {/* Banner */}
      <section className="banner-section">
        <div className="banner-content">
          <span className="badge-sale">FLASH SALE 50%</span>
          <h1>Đại Tiệc Công Nghệ</h1>
          <p>Khám phá bộ sưu tập thiết bị thông minh mới nhất với ưu đãi không tưởng chỉ trong tuần này.</p>
          <button className="btn banner-btn">Mua Ngay</button>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="section-header">
          <h2>Khám Phá Danh Mục</h2>
          <a href="#" className="view-all">Xem Tất Cả</a>
        </div>
        <div className="category-list">
          {categories.map((cat, idx) => (
            <div className="category-item" key={idx}>
              <div className="category-icon-wrapper">
                <cat.icon size={24} color="#0056D2" />
              </div>
              <span>{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="section relative">
        <div className="section-header">
          <h2 className="flex-title"><span className="flash-icon">⚡</span> Sản Phẩm Nổi Bật</h2>
        </div>
        
        {/* Floating AI Button (simulate from design) */}
        <button className="ai-assist-btn">
          <Bot size={20} />
          Hỗ trợ AI
        </button>

        <div className="product-grid">
          {featuredProducts.map(product => (
            <div className="product-card" key={product.id}>
              <Link to={`/product/${product.id}`} className="product-image">
                {product.tag && <span className="product-tag">{product.tag}</span>}
                <img src={product.image} alt={product.name} />
              </Link>
              <div className="product-info">
                <div className="product-category">{product.category}</div>
                <Link to={`/product/${product.id}`} className="product-name">{product.name}</Link>
                <div className="product-bottom">
                  <span className="product-price">{product.price}</span>
                  <button className="add-to-cart-btn">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Products */}
      <section className="section">
        <div className="section-header">
          <h2 className="flex-title"><span className="sparkle-icon">✨</span> Gợi ý cho bạn</h2>
          <a href="#" className="view-all">Xem thêm</a>
        </div>
        <div className="recommended-grid">
          {recommendedProducts.map(product => (
            <div className="rec-card" key={product.id}>
              <div className="rec-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="rec-info">
                <div className="rec-name">{product.name}</div>
                <div className="rec-bottom">
                  <span className="rec-price">{product.price}</span>
                  <Heart size={16} className="heart-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
