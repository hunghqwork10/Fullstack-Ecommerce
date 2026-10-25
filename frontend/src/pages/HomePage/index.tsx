import { Link } from 'react-router-dom';
import { Icon } from '../../components/ui';

const categories = [
  { name: 'Điện thoại', detail: 'Từ 2.990.000đ', image: 'photo-1511707171634-5f897ff02aa9', tone: 'lavender', type: 'dien-thoai' },
  { name: 'Laptop', detail: 'Từ 9.490.000đ', image: 'photo-1496181133206-80ce9b88a853', tone: 'peach', type: 'laptop' },
  { name: 'Máy tính bảng', detail: 'Từ 4.290.000đ', image: 'photo-1544244015-0df4b3ffc6b0', tone: 'blue', type: 'may-tinh-bang' },
  { name: 'Phụ kiện', detail: 'Ưu đãi đến 40%', image: 'photo-1505740420928-5e560c06d30e', tone: 'mint', type: 'phu-kien' },
];

const products = [
  {
    name: 'iPhone 15 Pro',
    detail: '256GB · Titan tự nhiên',
    price: '27.990.000đ',
    oldPrice: '29.990.000đ',
    badge: 'TRẢ GÓP 0%',
    image: 'photo-1592750475338-74b7b21085ab',
    rating: '4.9',
  },
  {
    name: 'MacBook Air 13"',
    detail: 'M3 · 8GB · 256GB SSD',
    price: '24.490.000đ',
    oldPrice: '27.990.000đ',
    badge: 'GIẢM 12%',
    image: 'photo-1517336714731-489689fd1ca8',
    rating: '4.8',
  },
  {
    name: 'iPad Air 11"',
    detail: 'M2 · Wi-Fi · 128GB',
    price: '16.490.000đ',
    oldPrice: '17.990.000đ',
    badge: 'BÁN CHẠY',
    image: 'photo-1544244015-0df4b3ffc6b0',
    rating: '4.9',
  },
  {
    name: 'Tai nghe Studio Pro',
    detail: 'Chống ồn chủ động',
    price: '5.990.000đ',
    oldPrice: '7.490.000đ',
    badge: 'GIẢM 20%',
    image: 'photo-1505740420928-5e560c06d30e',
    rating: '4.7',
  },
];

export function HomePage() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <div className="hero-eyebrow"><span /> NOVATECH · TECH FOR LIFE</div>
          <h1>Công nghệ tốt.<br />Cuộc sống <span>chất.</span></h1>
          <p>Khám phá những thiết bị công nghệ mới nhất, chính hãng với mức giá tốt dành riêng cho bạn.</p>
          <div className="hero-ctas">
            <a className="button button-primary" href="#products">Khám phá ngay <Icon name="arrow" size={17} /></a>
            <a className="text-link" href="#categories">Tìm hiểu thêm <Icon name="chevron" size={16} /></a>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack" aria-hidden="true">
              <span>H</span><span>M</span><span>A</span><span>+</span>
            </div>
            <div><strong>12.000+</strong><span>khách hàng hài lòng</span></div>
            <span className="proof-divider" />
            <div className="proof-rating"><span>★★★★★</span><small>4.9/5 đánh giá</small></div>
          </div>
          <div className="hero-decoration decoration-one" />
          <div className="hero-decoration decoration-two" />
        </div>
        <div className="hero-visual">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85"
              alt="Điện thoại thông minh thế hệ mới"
            />
          </div>
          <div className="floating-card floating-price">
            <span className="floating-icon">✦</span>
            <span><small>Ưu đãi hôm nay</small><strong>Giảm đến 30%</strong></span>
          </div>
          <div className="floating-card floating-shipping">
            <span className="shipping-icon"><Icon name="truck" size={20} /></span>
            <span><strong>Giao hàng nhanh</strong><small>Toàn quốc 2–4 giờ</small></span>
          </div>
          <span className="visual-caption">NEW SEASON · 2025</span>
        </div>
      </section>

      <section className="benefits container" id="support" aria-label="Lợi ích mua sắm">
        <div className="benefit">
          <span className="benefit-icon"><Icon name="truck" /></span>
          <span><strong>Giao hàng miễn phí</strong><small>Đơn hàng từ 1.000.000đ</small></span>
        </div>
        <span className="benefit-separator" />
        <div className="benefit">
          <span className="benefit-icon"><Icon name="shield" /></span>
          <span><strong>Chính hãng 100%</strong><small>Bảo hành chính hãng</small></span>
        </div>
        <span className="benefit-separator" />
        <div className="benefit">
          <span className="benefit-icon"><Icon name="refresh" /></span>
          <span><strong>Đổi trả dễ dàng</strong><small>Trong vòng 30 ngày</small></span>
        </div>
        <span className="benefit-separator" />
        <div className="benefit">
          <span className="benefit-icon"><Icon name="headphones" /></span>
          <span><strong>Hỗ trợ tận tâm</strong><small>Luôn sẵn sàng 24/7</small></span>
        </div>
      </section>

      <section className="categories-section section container" id="categories">
        <div className="section-heading">
          <div>
            <span className="section-kicker">MUA SẮM THEO NHU CẦU</span>
            <h2>Danh mục nổi bật</h2>
          </div>
          <a className="section-link" href="#products">Xem tất cả <Icon name="arrow" size={16} /></a>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <Link className={`category-card ${category.tone}`} to={`/category/${category.type}`} key={category.name}>
              <div className="category-copy">
                <h3>{category.name}</h3>
                <span>{category.detail}</span>
                <span className="category-arrow"><Icon name="arrow" size={17} /></span>
              </div>
              <img
                src={`https://images.unsplash.com/${category.image}?auto=format&fit=crop&w=500&q=80`}
                alt=""
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </section>

      <section className="products-section section container" id="products">
        <div className="section-heading product-heading">
          <div>
            <span className="section-kicker">ĐƯỢC YÊU THÍCH NHẤT</span>
            <h2>Sản phẩm nổi bật</h2>
          </div>
          <a className="section-link" href="#products">Khám phá cửa hàng <Icon name="arrow" size={16} /></a>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-image">
                <span className="product-badge">{product.badge}</span>
                <button className="product-favorite" aria-label={`Thêm ${product.name} vào yêu thích`}>
                  <Icon name="heart" size={18} />
                </button>
                <img
                  src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=650&q=85`}
                  alt={product.name}
                  loading="lazy"
                />
              </div>
              <div className="product-info">
                <div className="product-rating"><Icon name="star" size={14} /><span>{product.rating}</span><small>(128)</small></div>
                <h3>{product.name}</h3>
                <p>{product.detail}</p>
                <div className="product-price"><strong>{product.price}</strong><del>{product.oldPrice}</del></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="newsletter container">
        <div>
          <span className="section-kicker">ĐỪNG BỎ LỠ</span>
          <h2>Nhận tin công nghệ<br />và ưu đãi mới nhất.</h2>
        </div>
        <form className="newsletter-form" onSubmit={(event) => event.preventDefault()}>
          <input type="email" placeholder="Địa chỉ email của bạn" aria-label="Địa chỉ email" />
          <button type="submit">Đăng ký <Icon name="arrow" size={16} /></button>
          <small>Bằng cách đăng ký, bạn đồng ý với chính sách bảo mật của chúng tôi.</small>
        </form>
      </section>
    </>
  );
}

      export default HomePage;