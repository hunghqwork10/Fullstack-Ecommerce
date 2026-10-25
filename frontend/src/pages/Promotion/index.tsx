import { Icon } from '../../components/ui';

export default function Promotion() {
  return (
    <div className="container" style={{ padding: '40px 0', minHeight: '60vh' }}>
      <div className="section-heading">
        <div>
          <span className="section-kicker">SĂN DEAL GIẢM SẦN 🔥</span>
          <h2>Chương trình Khuyến Mãi HOT</h2>
        </div>
      </div>

      {/* Banner Khuyến Mãi lớn */}
      <div style={{ 
        background: 'linear-gradient(135deg, #ff416c, #ff4b2b)',
        borderRadius: '20px',
        padding: '40px',
        color: '#fff',
        margin: '24px 0 40px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 12px 35px rgba(255, 65, 108, 0.3)'
      }}>
        <div>
          <span style={{ background: 'rgba(255,255,255,0.2)', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>
            SIÊU SALE THÁNG NÀY
          </span>
          <h1 style={{ fontSize: '2.5rem', margin: '15px 0 10px 0' }}>Giảm giá đến 50%</h1>
          <p style={{ margin: 0, fontSize: '1.1rem', opacity: 0.95 }}>Áp dụng cho toàn bộ các thiết bị Điện thoại, Laptop và Phụ kiện cao cấp.</p>
        </div>
        <div className="promo-banner-icon" style={{ display: 'block' }}>
          {/* Có thể đặt icon hoặc hình ảnh minh họa tại đây */}
          <Icon name="bag" size={64} />
        </div>
      </div>

      {/* Danh sách các mục ưu đãi */}
      <div className="benefits" style={{ margin: '30px 0', background: '#fff', padding: '20px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
        <div className="benefit">
          <span className="benefit-icon"><Icon name="shield" /></span>
          <span><strong>Flash Sale mỗi ngày</strong><small>Khung giờ vàng 12h - 14h</small></span>
        </div>
        <span className="benefit-separator" />
        <div className="benefit">
          <span className="benefit-icon"><Icon name="truck" /></span>
          <span><strong>Mã Freeship</strong><small>Cho mọi đơn hàng từ 500k</small></span>
        </div>
        <span className="benefit-separator" />
        <div className="benefit">
          <span className="benefit-icon"><Icon name="refresh" /></span>
          <span><strong>Hoàn tiền 5%</strong><small>Khi thanh toán qua ví điện tử</small></span>
        </div>
      </div>
    </div>
  );
}