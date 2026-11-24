import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'RoomHub — Tìm phòng & Tham quan 360°',
  description:
    'Nền tảng tìm thuê phòng trọ, căn hộ dịch vụ và thuê dài hạn có tham quan ảnh 360° từng phòng.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
