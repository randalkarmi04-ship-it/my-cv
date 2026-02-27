import Header from '@/components/Header';
import './globals.css'

export const metadata = {
  title: 'Rand CV - مطور واجهات أمامية',
  description: 'السيرة الذاتية والمهارات والمشاريع',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}