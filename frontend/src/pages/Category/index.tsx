import React from 'react';
import { useParams } from 'react-router-dom';

export default function Category() {
  // Lấy giá trị biến "type" trên URL (ví dụ: 'dien-thoai', 'laptop'...)
  const { type } = useParams<{ type: string }>();

  return (
    <div className="container" style={{ padding: '20px 0' }}>
      <h2>Danh mục: <span style={{ color: '#0066cc' }}>{type?.toUpperCase()}</span></h2>
      <p>Giao diện danh sách sản phẩm thuộc nhóm {type} sẽ hiển thị ở đây.</p>
      {/* Sau này bạn sẽ dùng biến `type` này để gọi API lấy đúng sản phẩm tương ứng */}
    </div>
  );
}
