# NovaTech Frontend

Giao diện cửa hàng ecommerce thiết bị công nghệ, xây dựng bằng React, TypeScript, Vite và pnpm.

## Bắt đầu

```bash
pnpm install
pnpm dev
```

## Lệnh thường dùng

```bash
pnpm build
pnpm lint
pnpm preview
```

Thiết lập URL API trong file `.env` bằng biến `VITE_API_BASE_URL`.

## Cấu trúc chính

- `src/components/`: component giao diện, layout và dùng chung.
- `src/pages/`: các trang cửa hàng, tài khoản và thanh toán.
- `src/constants/`, `src/hooks/`, `src/libs/`, `src/utils/`, `src/stores/`: nơi đặt cấu hình và logic dùng chung.
- `src/App.tsx`, `src/main.tsx`: điểm kết nối và khởi chạy ứng dụng.
