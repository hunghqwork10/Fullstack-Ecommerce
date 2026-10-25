import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Icon } from '../ui'; // Đảm bảo đúng đường dẫn import của bạn

export default function RootLayout() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="app-layout">
      {/* KHỐI NAVIGATION CỦA BẠN (GIỮ CỐ ĐỊNH Ở ĐẦU TRANG) */}
      <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`}>
        <div className="container nav-inner">
          <button 
            className="mobile-menu" 
            onClick={() => setMenuOpen(!menuOpen)} 
            aria-label={menuOpen ? "Đóng danh mục" : "Mở danh mục"}
          >
            <Icon name="menu" />
            <span>Danh mục</span>
          </button>

          <div className="nav-links">
            <Link className="nav-link" to="/">Trang chủ</Link>
            <Link className="nav-link" to="/category/dien-thoai">Điện thoại</Link>
            <Link className="nav-link" to="/category/laptop">Laptop</Link>
            <Link className="nav-link" to="/category/may-tinh-bang">Máy tính bảng</Link>
            <Link className="nav-link" to="/category/phu-kien">Phụ kiện</Link>
            <Link className="nav-link" to="/khuyen-mai">
              Khuyến mãi <span className="sale-tag">HOT</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* VÙNG TRỐNG NÀY SẼ TỰ ĐỘNG THAY ĐỔI NỘI DUNG THEO ĐƯỜNG LINK URL */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
