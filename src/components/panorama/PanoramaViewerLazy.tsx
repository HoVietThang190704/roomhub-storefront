'use client';

import dynamic from 'next/dynamic';
import type { PanoramaViewerProps } from './PanoramaViewer';

const DynamicPanoramaViewer = dynamic(
  () => import('./PanoramaViewer').then((mod) => mod.PanoramaViewer),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-80 items-center justify-center rounded-xl bg-slate-200 text-sm text-slate-600">
        Đang nạp trình xem 360°...
      </div>
    ),
  },
);

export function PanoramaViewerLazy(props: PanoramaViewerProps) {
  return <DynamicPanoramaViewer {...props} />;
}
