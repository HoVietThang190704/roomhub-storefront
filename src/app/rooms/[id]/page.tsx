'use client';

import { use, useState } from 'react';
import { PanoramaViewerLazy } from '@/components/panorama/PanoramaViewerLazy';

export default function RoomDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [show360, setShow360] = useState(false);

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="text-2xl font-bold">Chi tiết phòng #{id}</h1>
      <p className="mt-1 text-sm text-slate-600">
        Trình xem 360° chỉ nạp lười khi người dùng bấm mở để giữ tốc độ tải và SEO.
      </p>

      <div className="mt-6">
        {!show360 ? (
          <button
            type="button"
            onClick={() => setShow360(true)}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
          >
            Xem 360°
          </button>
        ) : (
          <PanoramaViewerLazy
            scenes={[
              {
                id: 'scene-1',
                title: 'Phòng khách (Demo)',
                imageUrl: '',
                hotspots: [],
              },
            ]}
          />
        )}
      </div>
    </main>
  );
}
