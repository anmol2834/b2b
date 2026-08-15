import type { Metadata } from 'next';
import { Manrope, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ScrollProvider } from '@/components/core/ScrollProvider';
import { ThemeProvider } from '@/components/core/ThemeProvider';
import { DeviceGuard } from '@/components/core/DeviceGuard';
import { MotionProvider } from '@/components/core/MotionProvider';

const fontDisplay = Manrope({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const fontTech = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-tech',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'VERTEX | Architecture, Commercial & Industrial Procurement Partner',
  description:
    'One professional partner for products across hospitality, commercial, architectural, construction and industrial projects.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontTech.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-[#FAF9F5] text-[#141413] antialiased selection:bg-[#B3884D] selection:text-white">
        <DeviceGuard>
          <MotionProvider>
            <ThemeProvider>
              <ScrollProvider>{children}</ScrollProvider>
            </ThemeProvider>
          </MotionProvider>
        </DeviceGuard>
      </body>
    </html>
  );
}
