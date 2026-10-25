import { useParams } from 'react-router-dom';
import { Icon } from '../../components/ui';

// Dữ liệu mẫu đồng bộ với mảng categories ở trang chủ
const categoryData: Record<string, { name: string; detail: string; image: string; tone: string }> = {
  'dien-thoai': { name: 'Điện thoại', detail: 'Từ 2.990.000đ', image: 'photo-1511707171634-5f897ff02aa9', tone: 'lavender' },
  'laptop': { name: 'Laptop', detail: 'Từ 9.490.000đ', image: 'photo-1496181133206-80ce9b88a853', tone: 'peach' },
  'may-tinh-bang': { name: 'Máy tính bảng', detail: 'Từ 4.290.000đ', image: 'photo-1544244015-0df4b3ffc6b0', tone: 'blue' },
  'phu-kien': { name: 'Phụ kiện', detail: 'Ưu đãi đến 40%', image: 'photo-1505740420928-5e560c06d30e', tone: 'mint' },
};

export default function Category() {
  const { type } = useParams<{ type: string }>();
  const currentCategory = type ? categoryData[type] : null;

  return (
    <div className="container" style={{ padding: '40px 0', minHeight: '60vh' }}>
      <div className="section-heading">
        <div>
          <span className="section-kicker">DANH MỤC SẢN PHẨM</span>
          <h2>{currentCategory ? currentCategory.name : 'Khám phá danh mục'}</h2>
        </div>
        <span style={{ fontWeight: 600, color: 'var(--primary, #0066cc)' }}>
          {currentCategory?.detail}
        </span>
      </div>

      {/* Banner minh họa cho danh mục */}
      {currentCategory && (
        <div style={{ 
          margin: '24px 0 40px 0', 
          borderRadius: '20px', 
          overflow: 'hidden', 
          height: '280px', 
          position: 'relative',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
        }}>
          <img 
            src={`https://images.unsplash.com/${currentCategory.image}?auto=format&fit=crop&w=1200&q=80`} 
            alt={currentCategory.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '30px',
            color: '#fff'
          }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '8px' }}>{currentCategory.name} chính hãng</h3>
            <p style={{ margin: 0, opacity: 0.9 }}>Được bảo hành toàn quốc, đổi trả dễ dàng trong 30 ngày.</p>
          </div>
        </div>
      )}

      {/* Vùng hiển thị danh sách sản phẩm theo danh mục */}
      <div className="products-section" style={{ padding: 0 }}>
        <div className="section-heading product-heading" style={{ marginBottom: '20px' }}>
          <div>
            <h3>Sản phẩm thuộc nhóm {currentCategory?.name || type}</h3>
          </div>
        </div>
        
        {/* Khu vực placeholder hoặc lưới sản phẩm API sau này */}
        <div style={{ 
          background: '#f8f9fa', 
          border: '2px dashed #e2e8f0', 
          borderRadius: '16px', 
          padding: '60px 20px', 
          textAlign: 'center',
          color: '#64748b'
        }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Đang cập nhật danh sách sản phẩm cho nhóm <strong>{currentCategory?.name || type}</strong>.</p>
          <small>Vui lòng quay lại sau hoặc khám phá các sản phẩm nổi bật khác ở trang chủ!</small>
        </div>
      </div>
    </div>
  );
}