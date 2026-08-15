import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono, Syne } from 'next/font/google';
import './globals.css';
import { ScrollProvider } from '@/components/core/ScrollProvider';
import { ThemeProvider } from '@/components/core/ThemeProvider';
import { DeviceGuard } from '@/components/core/DeviceGuard';
import { MotionProvider } from '@/components/core/MotionProvider';

const fontDisplay = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['600', '700', '800'],
});

const fontBody = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600'],
});

const fontTech = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-tech',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Enterprise Sourcing & Specification Engine',
  description: 'Single-Window Partner for Commercial, Hospitality & Industrial Solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="titanium-dark"
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontTech.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-canvas text-content-primary antialiased selection:bg-accent-gold selection:text-black">
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
