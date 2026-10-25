import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Khai báo kiểu dữ liệu cấu trúc sản phẩm cho TypeScript
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ProductList() {
  // Trạng thái lưu danh sách sản phẩm lấy từ API
  const [products, setProducts] = useState<Product[]>([]);
  // Trạng thái hiển thị màn hình chờ khi đang tải dữ liệu
  const [loading, setLoading] = useState<boolean>(true);
  // Trạng thái lưu lỗi nếu API gặp sự cố
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Gọi API đến cổng Port của Backend (ví dụ: 5000)
        const response = await axios.get('http://localhost:5000/api/v1/products');
        
        if (response.data.success) {
          setProducts(response.data.data); // Nạp mảng dữ liệu vào state
        }
      } catch (err: any) {
        console.error("Lỗi gọi API:", err);
        setError("Không thể tải danh sách sản phẩm. Vui lòng thử lại sau!");
      } finally {
        setLoading(false); // Tắt màn hình chờ
      }
    };

    fetchProducts();
  }, []); // Mảng rỗng [] giúp hàm này chỉ chạy duy nhất 1 lần khi trang được tải

  // Kịch bản 1: Đang tải dữ liệu
  if (loading) return <div className="container">Đang tải sản phẩm...</div>;

  // Kịch bản 2: Gặp lỗi hệ thống
  if (error) return <div className="container error-text">{error}</div>;

  // Kịch bản 3: Tải thành công -> Đổ dữ liệu ra giao diện Grid mẫu bằng vòng lặp .map()
  return (
    <section className="products-section container">
      <div className="section-heading">
        <h2>Sản phẩm nổi bật</h2>
      </div>
      
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <div className="product-price">
                <strong>{product.price.toLocaleString('vi-VN')} đ</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
