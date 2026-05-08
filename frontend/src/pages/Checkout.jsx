import React from 'react';
import { X, CreditCard, Lock, ArrowRight, HelpCircle } from 'lucide-react';
import './Checkout.css';

function Checkout() {
  return (
    <div className="checkout-page container">
      {/* Stepper */}
      <div className="stepper">
        <div className="step completed">
          <div className="step-circle">1</div>
          <span>GIỎ HÀNG</span>
        </div>
        <div className="step-line"></div>
        <div className="step active">
          <div className="step-circle">2</div>
          <span>THANH TOÁN</span>
        </div>
        <div className="step-line"></div>
        <div className="step">
          <div className="step-circle">3</div>
          <span>HOÀN TẤT</span>
        </div>
      </div>

      <div className="checkout-content">
        <div className="checkout-left">
          {/* Cart Items */}
          <div className="checkout-section">
            <h2 className="section-title">Giỏ hàng của bạn (2 sản phẩm)</h2>
            <div className="cart-item">
              <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&q=80" alt="ProBook Ultra X15" className="cart-img" />
              <div className="cart-item-info">
                <div className="cart-item-header">
                  <h3>ProBook Ultra X15 - Space Grey</h3>
                  <button className="remove-btn"><X size={20} /></button>
                </div>
                <p className="cart-item-desc">CPU i9, 32GB RAM, 1TB SSD</p>
                <div className="cart-item-bottom">
                  <div className="quantity-control">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <div className="item-price">34.990.000đ</div>
                </div>
              </div>
            </div>

            <div className="cart-item">
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80" alt="SonicWave Studio Pro" className="cart-img" />
              <div className="cart-item-info">
                <div className="cart-item-header">
                  <h3>SonicWave Studio Pro</h3>
                  <button className="remove-btn"><X size={20} /></button>
                </div>
                <p className="cart-item-desc">Noise Cancelling, Deep Bass</p>
                <div className="cart-item-bottom">
                  <div className="quantity-control">
                    <button>-</button>
                    <span>2</span>
                    <button>+</button>
                  </div>
                  <div className="item-price">12.500.000đ</div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="checkout-section">
            <h2 className="section-title">Thông tin thanh toán</h2>
            
            <div className="sub-section">
              <div className="sub-title">
                <TruckIcon /> ĐỊA CHỈ GIAO HÀNG
              </div>
              <div className="form-row">
                <div className="form-group flex-1">
                  <label>Họ và tên</label>
                  <input type="text" defaultValue="Nguyễn Văn A" />
                </div>
                <div className="form-group flex-1">
                  <label>Số điện thoại</label>
                  <input type="text" defaultValue="0901 234 567" />
                </div>
              </div>
              <div className="form-group">
                <label>Địa chỉ chi tiết</label>
                <input type="text" defaultValue="Số 123, Đường Láng, Đống Đa, Hà Nội" />
              </div>
            </div>

            <div className="sub-section">
              <div className="sub-title">
                <CreditCard size={16} /> PHƯƠNG THỨC THANH TOÁN
              </div>
              <div className="payment-method selected">
                <div className="method-radio">
                  <div className="radio-inner"></div>
                </div>
                <div className="method-info">
                  <span className="method-name">Thẻ tín dụng / Ghi nợ</span>
                  <span className="method-desc">Visa, Mastercard, JCB, Amex</span>
                </div>
                <CreditCard className="method-icon" color="#999" />
              </div>

              <div className="card-form">
                <div className="form-group">
                  <label>Số thẻ</label>
                  <div className="input-with-icon">
                    <input type="text" defaultValue="4242 4242 4242 4242" />
                    <Lock size={16} color="#999" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group flex-1">
                    <label>Hết hạn (MM/YY)</label>
                    <input type="text" defaultValue="12/28" />
                  </div>
                  <div className="form-group flex-1">
                    <label>CVV</label>
                    <input type="password" defaultValue="123" />
                  </div>
                  <div className="form-group flex-1">
                    <label>Mã bưu điện</label>
                    <input type="text" defaultValue="100000" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="checkout-right">
          <div className="summary-card">
            <h3 className="summary-title">Tóm tắt đơn hàng</h3>
            
            <div className="summary-line">
              <span>Tạm tính (3 sản phẩm)</span>
              <strong>47.490.000đ</strong>
            </div>
            <div className="summary-line">
              <span>Phí vận chuyển</span>
              <strong className="text-success">Miễn phí</strong>
            </div>
            <div className="summary-line">
              <span>Giảm giá</span>
              <strong className="text-danger">-490.000đ</strong>
            </div>
            
            <div className="summary-total">
              <span>Tổng cộng</span>
              <div className="total-right">
                <div className="total-price">47.000.000đ</div>
                <div className="vat-note">(ĐÃ BAO GỒM VAT)</div>
              </div>
            </div>

            <div className="coupon-box">
              <input type="text" placeholder="Nhập mã giảm giá" />
              <button className="btn btn-primary coupon-btn">ÁP DỤNG</button>
            </div>

            <button className="btn btn-primary confirm-btn">
              XÁC NHẬN THANH TOÁN <ArrowRight size={20} />
            </button>

            <div className="secure-note">
              <Lock size={14} /> Thanh toán an toàn với mã hóa SSL 256-bit
            </div>
          </div>

          <div className="help-box">
            <div className="help-icon">
              <HelpCircle size={24} color="#8b5cf6" />
            </div>
            <div className="help-info">
              <h4>Cần hỗ trợ nhanh?</h4>
              <p>Liên hệ đội ngũ chăm sóc khách hàng 24/7 của chúng tôi qua hotline <strong>1900 6789</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Simple truck icon component since it wasn't imported properly
function TruckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13"></rect>
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
      <circle cx="5.5" cy="18.5" r="2.5"></circle>
      <circle cx="18.5" cy="18.5" r="2.5"></circle>
    </svg>
  );
}

export default Checkout;
