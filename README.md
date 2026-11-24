# roomhub-storefront

Ứng dụng khách thuê (Tenant) của RoomHub — Next.js App Router, Tailwind CSS v4, shadcn/ui, TanStack Query, Zustand, React Hook Form + Zod, Socket.IO.

- Port local: `3000`
- Quy ước 360°: Dùng `PanoramaViewerLazy` (`next/dynamic`, `ssr: false`), tích hợp Pannellum ở GĐ 1. **Không** cài `three.js` trong MVP.

```powershell
Copy-Item .env.example .env.local
pnpm install
pnpm dev
```
