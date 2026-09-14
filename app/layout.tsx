import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Muhammad Arsalan | Industrial Engineer',
  description: 'Industrial Engineer focused on reliability, maintenance, process optimization, ERP workflows and data-driven operations.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
