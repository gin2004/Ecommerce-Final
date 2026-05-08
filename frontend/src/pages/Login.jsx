import React from 'react';
import { Eye } from 'lucide-react';
import Footer from '../components/Footer';
import './Login.css';

function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <div className="login-brand">
            <h1>ElectricMarket</h1>
            <h2>The Future of Electronics</h2>
            <p>Join thousands of tech enthusiasts and discover the latest gadgets with a single click.</p>
          </div>
        </div>
        <div className="login-right">
          <div className="login-form-container">
            <h3>Chào mừng trở lại</h3>
            <p className="subtitle">Đăng nhập để tiếp tục trải nghiệm mua sắm tuyệt vời.</p>
            
            <div className="auth-tabs">
              <button className="tab active">Đăng nhập</button>
              <button className="tab">Đăng ký</button>
            </div>

            <form className="login-form">
              <div className="form-group">
                <label>EMAIL HOẶC TÊN ĐĂNG NHẬP</label>
                <input type="text" placeholder="example@email.com" />
              </div>
              
              <div className="form-group">
                <div className="label-row">
                  <label>MẬT KHẨU</label>
                  <a href="#" className="forgot-pwd">Quên mật khẩu?</a>
                </div>
                <div className="password-input-container">
                  <input type="password" placeholder="••••••••" />
                  <Eye className="eye-icon" size={20} color="#999" />
                </div>
              </div>

              <button type="button" className="btn btn-primary login-btn">Đăng nhập</button>
            </form>

            <div className="divider">
              <span>HOẶC TIẾP TỤC VỚI</span>
            </div>

            <div className="social-login">
              <button className="btn-social">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="20" height="20" />
                Google
              </button>
              <button className="btn-social">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="Facebook" width="20" height="20" />
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
