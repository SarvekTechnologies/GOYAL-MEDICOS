import DiagnosticsSection from '@/components/diagnostics-section';
import AppointmentSection from '@/components/appointment-section';
export const metadata={title:'Diagnostic Services | Neurocare Jaipur'};
export default function DiagnosticsPage(){return <main><section className="page-banner"><div className="container"><span className="eyebrow">NEUROLOGICAL TESTING</span><h1>Diagnostic services</h1><p>Ask reception about test availability, preparation and scheduling.</p></div></section><DiagnosticsSection/><AppointmentSection/></main>}
