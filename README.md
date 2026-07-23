This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Chatbot Portfolio

Portfolio ini memiliki floating chatbot pribadi untuk menjawab pertanyaan sederhana tentang profil, pendidikan, pengalaman, keahlian, proyek, sertifikat, publikasi, kontak publik, dan ketersediaan profesional Slamet Ikhvan Nurhana Rifki.

Arsitektur chatbot:

- UI berada di `components/PortfolioChatbot.tsx` sebagai client component.
- Endpoint backend berada di `app/api/chat/route.ts` dan hanya menerima `POST`.
- Gemini dipanggil dari server melalui `lib/gemini.ts`.
- System instruction dibuat di `lib/chatbot-prompt.ts`.
- Konteks portfolio dibangun dari data existing di `data/experience.ts`, `data/projects.ts`, `data/skills.ts`, dan `data/certificates.ts`.

### Konfigurasi Environment

Buat file `.env.local` di root project:

```bash
GEMINI_API_KEY=isi_api_key_gemini_anda
```

Jangan menggunakan `NEXT_PUBLIC_GEMINI_API_KEY` karena API key tidak boleh dikirim ke browser. File `.env.local` sudah dilindungi oleh `.gitignore`, sementara `.env.example` hanya berisi nama variabel tanpa nilai rahasia.

### Menjalankan Lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000). Jika `GEMINI_API_KEY` belum tersedia, endpoint akan mengembalikan pesan aman bahwa layanan chatbot sedang tidak tersedia.

### Environment Variable di Vercel

Tambahkan `GEMINI_API_KEY` melalui dashboard Vercel:

1. Buka project di Vercel.
2. Masuk ke Settings.
3. Pilih Environment Variables.
4. Tambahkan `GEMINI_API_KEY` untuk environment yang digunakan.
5. Deploy ulang project.

### Batasan dan Keamanan

Chatbot dibatasi untuk konteks portfolio. Pertanyaan di luar profil, pengalaman, keahlian, proyek, sertifikat, publikasi, kontak, dan ketersediaan profesional akan ditolak. Endpoint juga membatasi panjang pesan, membersihkan history dari client, menolak role `system`, dan memakai rate limit in-memory sederhana berbasis IP.

Rate limit in-memory bersifat best-effort pada environment serverless karena instance dapat berganti atau berjalan paralel. Versi awal ini tidak memakai database, Redis, atau layanan penyimpanan chat.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
