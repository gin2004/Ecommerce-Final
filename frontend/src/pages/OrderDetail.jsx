import React from 'react';
import { CheckCircle, Truck, Package, Printer, Phone, Copy, CreditCard } from 'lucide-react';
import './OrderDetail.css';

function OrderDetail() {
  return (
    <div className="order-detail-page container">
      <div className="order-header">
        <div className="breadcrumb">
          <span>Orders</span>
          <span className="separator">&gt;</span>
          <span className="current">Order #EM-992841</span>
        </div>
        
        <div className="title-row">
          <div>
            <h1>Chi tiết đơn hàng #EM-992841</h1>
            <p className="order-date">Đặt ngày 24 tháng 05, 2024 • 14:30 PM</p>
          </div>
          <div className="header-actions">
            <button className="btn btn-outline"><Printer size={16} /> In hóa đơn</button>
            <button className="btn btn-primary">Liên hệ hỗ trợ</button>
          </div>
        </div>
      </div>

      <div className="order-status-card">
        <div className="status-stepper">
          <div className="status-step completed">
            <div className="icon-wrapper"><CheckCircle size={20} /></div>
            <div className="step-name">Pending</div>
            <div className="step-time">24/05 14:30</div>
          </div>
          <div className="status-line completed"></div>
          <div className="status-step completed">
            <div className="icon-wrapper"><CheckCircle size={20} /></div>
            <div className="step-name">Confirmed</div>
            <div className="step-time">24/05 15:45</div>
          </div>
          <div className="status-line active"></div>
          <div className="status-step active">
            <div className="icon-wrapper"><Truck size={20} /></div>
            <div className="step-name">Shipping</div>
            <div className="step-time">Đang vận chuyển</div>
          </div>
          <div className="status-line"></div>
          <div className="status-step">
            <div className="icon-wrapper"><Package size={20} /></div>
            <div className="step-name">Delivered</div>
            <div className="step-time">--:--</div>
          </div>
        </div>

        <div className="info-cards-row">
          <div className="info-card shipping-info-card">
            <div className="card-title">
              <Package size={18} color="#0056D2" /> Thông tin vận chuyển
            </div>
            <div className="info-grid">
              <div className="info-label">Đơn vị vận chuyển:</div>
              <div className="info-value">VN Express Logistic</div>
              <div className="info-label">Mã vận đơn:</div>
              <div className="info-value tracking-number">VN-992841-EX <Copy size={14} className="copy-icon" /></div>
              <div className="info-label">Trạng thái cuối:</div>
              <div className="info-value">Đã rời kho trung chuyển Hà Nội</div>
            </div>
          </div>
          
          <div className="info-card recipient-card">
            <div className="card-title">
              <Phone size={18} color="#0056D2" /> Người nhận hàng
            </div>
            <div className="recipient-name">Nguyễn Minh Quân</div>
            <div className="recipient-phone">+84 912 345 678</div>
            <div className="recipient-address">
              Tầng 12, Tòa nhà Innovation, Công viên phần mềm Quang Trung, Quận 12, TP. Hồ Chí Minh
            </div>
          </div>
        </div>
      </div>

      <div className="order-content">
        <div className="product-list-section">
          <h2>Danh sách sản phẩm (3)</h2>
          
          <div className="order-item">
            <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&q=80" alt="UltraBook" />
            <div className="order-item-info">
              <h3>UltraBook Pro X14 - Intel i7</h3>
              <p className="item-variant">Màu: Space Gray | 16GB RAM</p>
              <p className="item-qty">Số lượng: 1</p>
            </div>
            <div className="order-item-price">24.990.000đ</div>
          </div>

          <div className="order-item">
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80" alt="Headphones" />
            <div className="order-item-info">
              <h3>Noise-Canceling Studio Headphones</h3>
              <p className="item-variant">Màu: Midnight Blue</p>
              <p className="item-qty">Số lượng: 2</p>
            </div>
            <div className="order-item-price">3.250.000đ</div>
          </div>

          <div className="order-item">
            <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=200&q=80" alt="Watch" />
            <div className="order-item-info">
              <h3>EcoWatch v3 - Health & Fitness</h3>
              <p className="item-variant">Màu: White Alpine</p>
              <p className="item-qty">Số lượng: 1</p>
            </div>
            <div className="order-item-price">4.500.000đ</div>
          </div>
        </div>

        <div className="order-summary-section">
          <div className="summary-card">
            <h2>Tổng cộng</h2>
            <div className="summary-line">
              <span>Tạm tính (4 sản phẩm)</span>
              <span>35.990.000đ</span>
            </div>
            <div className="summary-line">
              <span>Phí vận chuyển</span>
              <span>Miễn phí</span>
            </div>
            <div className="summary-line">
              <span>Giảm giá voucher</span>
              <span className="text-danger">-150.000đ</span>
            </div>
            
            <div className="summary-total">
              <span>Tổng<br/>tiền</span>
              <span className="total-price-large">35.840.000đ</span>
            </div>

            <div className="payment-status success">
              <CreditCard size={16} /> 
              <div>
                <strong>Đã thanh toán qua Visa</strong>
                <span className="tx-id">Giao dịch ID: #VC-2849104822</span>
              </div>
            </div>
          </div>

          <div className="note-card">
            <h4>Ghi chú từ khách hàng</h4>
            <p>"Giao hàng giờ hành chính giúp mình, nếu không có nhà hãy để ở lễ tân tòa nhà. Cảm ơn shop!"</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
