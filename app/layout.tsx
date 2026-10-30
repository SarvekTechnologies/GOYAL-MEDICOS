import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
export const metadata: Metadata = {
  title: 'The Neurocare & Stroke Clinic | Dr. Gourav Goyal, Neurologist Jaipur',
  description: 'Neurology consultation, stroke care, neurointervention and diagnostic service information for Dr. Gourav Goyal at The Neurocare & Stroke Clinic, Pratap Nagar, Jaipur.',
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><SiteHeader/>{children}<SiteFooter/></body></html>}
