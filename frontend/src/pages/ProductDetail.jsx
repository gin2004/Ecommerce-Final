import React, { useState } from 'react';
import { Star, ShoppingCart, Zap, Truck, ShieldCheck, ChevronDown, Minus, Plus } from 'lucide-react';
import './ProductDetail.css';

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('blue');
  const [selectedVersion, setSelectedVersion] = useState('standard');

  return (
    <div className="product-detail-page container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span>Trang chủ</span>
        <span className="separator">&gt;</span>
        <span>Electronics</span>
        <span className="separator">&gt;</span>
        <span className="current">SoundMaster Pro X1</span>
      </div>

      {/* Main Info */}
      <div className="product-main">
        <div className="product-gallery">
          <div className="main-image">
            <span className="new-arrival-tag">NEW ARRIVAL</span>
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80" alt="SoundMaster Pro X1" />
          </div>
          <div className="thumbnail-list">
            <div className="thumbnail active">
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80" alt="thumb 1" />
            </div>
            <div className="thumbnail">
              <img src="https://images.unsplash.com/photo-1546435770-a3e426fa47fb?w=200&q=80" alt="thumb 2" />
            </div>
            <div className="thumbnail">
              <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=200&q=80" alt="thumb 3" />
            </div>
            <div className="thumbnail">
              <div className="more-images">+2</div>
              <img src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=200&q=80" alt="thumb 4" />
            </div>
          </div>
        </div>

        <div className="product-info-panel">
          <div className="product-brand-subtitle">AUDIO MASTERY</div>
          <h1 className="product-title">SoundMaster Pro X1 Wireless</h1>
          
          <div className="product-meta">
            <div className="rating">
              <Star size={16} fill="#F59E0B" color="#F59E0B" />
              <Star size={16} fill="#F59E0B" color="#F59E0B" />
              <Star size={16} fill="#F59E0B" color="#F59E0B" />
              <Star size={16} fill="#F59E0B" color="#F59E0B" />
              <Star size={16} fill="#F59E0B" color="#F59E0B" />
            </div>
            <span className="reviews">(128 Đánh giá)</span>
            <span className="divider">|</span>
            <span className="brand-name">Thương hiệu: <strong>MasterLabs</strong></span>
          </div>

          <div className="price-box">
            <div className="current-price">5.490.000đ</div>
            <div className="old-price">6.990.000đ</div>
            <div className="discount-tag">-21%</div>
          </div>
          <div className="stock-info">
            <span className="box-icon">📦</span> Còn 12 sản phẩm trong kho
          </div>

          <div className="options-section">
            <div className="option-title">MÀU SẮC</div>
            <div className="color-options">
              <button className={`color-btn blue ${selectedColor === 'blue' ? 'active' : ''}`} onClick={() => setSelectedColor('blue')}></button>
              <button className={`color-btn black ${selectedColor === 'black' ? 'active' : ''}`} onClick={() => setSelectedColor('black')}></button>
              <button className={`color-btn gray ${selectedColor === 'gray' ? 'active' : ''}`} onClick={() => setSelectedColor('gray')}></button>
            </div>
          </div>

          <div className="options-section">
            <div className="option-title">PHIÊN BẢN</div>
            <div className="version-options">
              <button className={`version-btn ${selectedVersion === 'standard' ? 'active' : ''}`} onClick={() => setSelectedVersion('standard')}>Standard</button>
              <button className={`version-btn ${selectedVersion === 'noise' ? 'active' : ''}`} onClick={() => setSelectedVersion('noise')}>Noise Cancelling+</button>
              <button className={`version-btn ${selectedVersion === 'creator' ? 'active' : ''}`} onClick={() => setSelectedVersion('creator')}>Creator Edition</button>
            </div>
          </div>

          <div className="options-section">
            <div className="option-title">SỐ LƯỢNG</div>
            <div className="quantity-selector">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={16} /></button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}><Plus size={16} /></button>
            </div>
          </div>

          <div className="action-buttons">
            <button className="btn btn-outline cart-btn">
              <ShoppingCart size={20} /> THÊM VÀO GIỎ
            </button>
            <button className="btn btn-primary buy-btn">
              <Zap size={20} /> MUA NGAY
            </button>
          </div>

          <div className="service-info">
            <div className="service-item">
              <Truck size={20} color="#0056D2" />
              <span>Miễn phí giao hàng</span>
            </div>
            <div className="service-item">
              <ShieldCheck size={20} color="#0056D2" />
              <span>Bảo hành 24 tháng</span>
            </div>
          </div>
        </div>
      </div>

      {/* Details & Specs */}
      <div className="product-details-container">
        <div className="product-description">
          <div className="section-title">
            <div className="indicator"></div>
            <h2>Mô tả chi tiết</h2>
          </div>
          <p>
            Trải nghiệm âm thanh đỉnh cao với SoundMaster Pro X1. Được trang bị màng loa beryllium 40mm cao cấp, tai nghe mang lại dải âm rộng, từ những âm trầm sâu thẳm đến những nốt cao trong trẻo, không tì vết.
          </p>
          <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80" alt="Internal Structure" className="desc-image" />
          <p>
            Công nghệ chống ồn chủ động (Hybrid ANC) thế hệ mới triệt tiêu hoàn toàn tiếng ồn từ môi trường xung quanh, cho phép bạn tập trung tối đa vào âm nhạc hoặc công việc. Thời lượng pin lên đến 60 giờ liên tục giúp bạn thoải mái trải nghiệm suốt cả tuần dài mà không cần lo lắng về việc sạc pin.
          </p>
        </div>

        <div className="product-specs">
          <div className="specs-card">
            <h3>Thông số kỹ thuật</h3>
            <ul className="specs-list">
              <li>
                <span className="spec-label">Kiểu tai nghe</span>
                <span className="spec-value">Over-ear (Trùm tai)</span>
              </li>
              <li>
                <span className="spec-label">Màng loa</span>
                <span className="spec-value">40mm Beryllium</span>
              </li>
              <li>
                <span className="spec-label">Kết nối</span>
                <span className="spec-value">Bluetooth 5.3, 3.5mm</span>
              </li>
              <li>
                <span className="spec-label">Chống ồn</span>
                <span className="spec-value">Hybrid ANC 42dB</span>
              </li>
              <li>
                <span className="spec-label">Thời lượng pin</span>
                <span className="spec-value">60 giờ (ANC off)</span>
              </li>
              <li>
                <span className="spec-label">Sạc nhanh</span>
                <span className="spec-value">10 phút = 5 giờ dùng</span>
              </li>
            </ul>
            <button className="view-more-specs">
              XEM TẤT CẢ THÔNG SỐ <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
