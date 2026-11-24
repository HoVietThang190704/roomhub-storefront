import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <header className="flex items-center justify-between border-b border-slate-200 pb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">RoomHub</h1>
          <p className="text-sm text-slate-600">
            Tìm phòng trọ, căn hộ dịch vụ & thuê dài hạn với tham quan 360°
          </p>
        </div>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
          Phase 0 Scaffold
        </span>
      </header>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Khung tìm kiếm phòng (GĐ 1)</h2>
        <p className="mt-1 text-sm text-slate-600">
          Hỗ trợ lọc theo khu vực/PostGIS, khoảng giá, loại phòng và tiện ích.
        </p>
        <div className="mt-4">
          <Link
            href="/rooms/demo-room"
            className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            Xem thử trang chi tiết phòng 360°
          </Link>
        </div>
      </section>
    </main>
  );
}
