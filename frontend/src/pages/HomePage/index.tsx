import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

type IconName =
  | 'search'
  | 'user'
  | 'heart'
  | 'bag'
  | 'menu'
  | 'arrow'
  | 'chevron'
  | 'star'
  | 'truck'
  | 'shield'
  | 'refresh'
  | 'headphones'

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  }

  const paths: Record<IconName, ReactNode> = {
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M5 21a7 7 0 0 1 14 0" /></>,
    heart: <path d="M20.8 8.8c0 5.5-8.8 11-8.8 11s-8.8-5.5-8.8-11A4.8 4.8 0 0 1 12 6.3a4.8 4.8 0 0 1 8.8 2.5Z" />,
    bag: <><path d="M5 8h14l1 13H4L5 8Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    chevron: <path d="m9 18 6-6-6-6" />,
    star: <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />,
    truck: <><path d="M3 6h11v12H3zM14 10h4l3 3v5h-7z" /><circle cx="7.5" cy="19" r="1.5" /><circle cx="17.5" cy="19" r="1.5" /></>,
    shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>,
    refresh: <><path d="M20 7v5h-5M4 17v-5h5" /><path d="M5.6 9a7 7 0 0 1 11.6-2L20 12M4 12l2.8 5a7 7 0 0 0 11.6-2" /></>,
    headphones: <><path d="M3 13v-2a9 9 0 0 1 18 0v2" /><path d="M5 13h2v7H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Zm14 0h-2v7h2a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2Z" /></>,
  }

  return <svg {...common}>{paths[name]}</svg>
}

const categories = [
  { name: 'Điện thoại', detail: 'Từ 2.990.000đ', image: 'photo-1511707171634-5f897ff02aa9', tone: 'lavender' },
  { name: 'Laptop', detail: 'Từ 9.490.000đ', image: 'photo-1496181133206-80ce9b88a853', tone: 'peach' },
  { name: 'Máy tính bảng', detail: 'Từ 4.290.000đ', image: 'photo-1544244015-0df4b3ffc6b0', tone: 'blue' },
  { name: 'Phụ kiện', detail: 'Ưu đãi đến 40%', image: 'photo-1505740420928-5e560c06d30e', tone: 'mint' },
]

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
]

export function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [search, setSearch] = useState('')

  return (
    <div className="store">
      <div className="announcement">
        <span>Ưu đãi đặc biệt mùa công nghệ</span>
        <span className="announcement-divider" />
        <span>Miễn phí giao hàng cho đơn từ 1.000.000đ</span>
        <a href="#products">Mua ngay <Icon name="arrow" size={14} /></a>
      </div>

      <header className="site-header">
        <div className="header-main container">
          <a className="brand" href="#" aria-label="NovaTech trang chủ">
            <span className="brand-mark">n<span>.</span></span>
            <span>nova<span>tech</span></span>
          </a>

          <form className="search-box" onSubmit={(event) => event.preventDefault()}>
            <Icon name="search" size={19} />
            <input
              aria-label="Tìm kiếm sản phẩm"
              placeholder="Bạn đang tìm sản phẩm nào?"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <kbd>⌘ K</kbd>
          </form>

          <div className="header-actions">
            <a className="header-action account-action" href="#account">
              <Icon name="user" />
              <span>Tài khoản</span>
            </a>
            <a className="header-action wishlist-action" href="#wishlist" aria-label="Yêu thích">
              <Icon name="heart" />
            </a>
            <a className="header-action cart-action" href="#cart" aria-label="Giỏ hàng">
              <span className="cart-icon"><Icon name="bag" /><span className="cart-count">2</span></span>
              <span className="cart-label">Giỏ hàng</span>
            </a>
          </div>
        </div>

        <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`}>
          <div className="container nav-inner">
            {/* Nút bấm đóng/mở menu trên thiết bị di động */}
            <button 
              className="mobile-menu" 
              onClick={() => setMenuOpen(!menuOpen)} 
              aria-label={menuOpen ? "Đóng danh mục" : "Mở danh mục"}
            >
              <Icon name="menu" />
              <span>Danh mục</span>
            </button>

            {/* Khối danh sách liên kết điều hướng chính */}
            <div className="nav-links">
              <Link className="nav-link active" to="/">Trang chủ</Link>
              
              {/* Định tuyến sẵn sàng sang các trang danh mục (sau này chỉ cần tạo route tương ứng) */}
              <Link className="nav-link" to="/category/dien-thoai">Điện thoại</Link>
              <Link className="nav-link" to="/category/laptop">Laptop</Link>
              <Link className="nav-link" to="/category/may-tinh-bang">Máy tính bảng</Link>
              <Link className="nav-link" to="/category/phu-kien">Phụ kiện</Link>
              
              <Link className="nav-link" to="/khuyen-mai">
                Khuyến mãi <span className="sale-tag">HOT</span>
              </Link>
            </div>

            <a className="store-locator" href="#support">
              <span className="locator-dot" /> Hệ thống cửa hàng
            </a>
          </div>
        </nav>
      </header>

      <main>
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
              <a className={`category-card ${category.tone}`} href="#products" key={category.name}>
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
              </a>
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
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#">
            <span className="brand-mark">n<span>.</span></span>
            <span>nova<span>tech</span></span>
          </a>
          <p>Công nghệ tốt. Cuộc sống chất.</p>
          <span>© 2025 NovaTech. Thiết kế cho cuộc sống hiện đại.</span>
        </div>
      </footer>
    </div>
  )
}
