'use client';

export interface PanoHotspot {
  yaw: number;
  pitch: number;
  label: string;
  targetSceneId: string;
}

export interface PanoSceneItem {
  id: string;
  title: string;
  imageUrl: string;
  hotspots: PanoHotspot[];
}

export interface PanoramaViewerProps {
  scenes: PanoSceneItem[];
  fallbackImageUrl?: string;
}

/**
 * Placeholder trình xem 360° (Pannellum) — GĐ 1 sẽ gắn thư viện Pannellum vào đây.
 * Luôn được import qua PanoramaViewerLazy (next/dynamic, ssr: false) để không nặng bundle chính.
 */
export function PanoramaViewer({
  scenes,
  fallbackImageUrl,
}: PanoramaViewerProps) {
  const active = scenes[0];

  if (!active) {
    return (
      <div className="flex h-80 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-100 text-sm text-slate-600">
        {fallbackImageUrl
          ? 'Đang hiển thị ảnh tĩnh dự phòng cho thiết bị cấu hình thấp.'
          : 'Phòng này chưa có ảnh 360°.'}
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-900 p-6 text-white">
      <p className="text-xs uppercase tracking-wide text-emerald-400">
        360° Panorama Viewer (Pannellum — Lazy Loaded)
      </p>
      <p className="mt-2 text-lg font-semibold">{active.title}</p>
      <p className="mt-1 text-xs text-slate-300">
        Hotspots: {active.hotspots.length} điểm chuyển cảnh
      </p>
    </div>
  );
}
