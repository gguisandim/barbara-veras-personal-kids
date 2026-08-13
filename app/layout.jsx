import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import FloatingWhatsapp from '@/components/FloatingWhatsapp';
import ExperienceLayer from '@/components/ExperienceLayer';
import QuickAssistant from '@/components/QuickAssistant';
import RouteScrollReset from '@/components/RouteScrollReset';

export const metadata = {
  title: {
    default: 'Bárbara Veras · Personal Kids',
    template: '%s · Bárbara Veras',
  },
  description: 'Movimento que diverte. Desenvolvimento que transforma.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <RouteScrollReset />
        <ExperienceLayer />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <QuickAssistant />
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
