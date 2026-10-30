import TreatmentsSection from '@/components/treatments-section';
import AppointmentSection from '@/components/appointment-section';
export const metadata={title:'Treatments & Procedures | Neurocare Jaipur'};
export default function TreatmentsPage(){return <main><section className="page-banner"><div className="container"><span className="eyebrow">SPECIALIST CARE</span><h1>Treatments & procedures</h1><p>Discuss treatment suitability and care options with the clinic.</p></div></section><TreatmentsSection/><AppointmentSection/></main>}
