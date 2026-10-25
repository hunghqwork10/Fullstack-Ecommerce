// src/components/ui/Icon.tsx
import type { ReactNode } from 'react';

// 1. Export type để các nơi khác có thể dùng nếu cần (ví dụ định nghĩa props cho component cha)
export type IconName =
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
  | 'headphones';

// 2. Định nghĩa interface cho Props (thêm className để sau này thích hợp với Tailwind/CSS)
interface IconProps {
  name: IconName;
  size?: number;
  className?: string; // Thêm dòng này để tăng tính linh hoạt khi dùng chung
}

export function Icon({ name, size = 20, className }: IconProps) {
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
    className: className, // Nhúng className vào đây
  };

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
  };

  return <svg {...common}>{paths[name]}</svg>;
}
