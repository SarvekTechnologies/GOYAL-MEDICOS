import AppointmentSection from '@/components/appointment-section';
import ContactSection from '@/components/contact-section';
export const metadata={title:'Appointments & Contact | Neurocare Jaipur'};
export default function ContactPage(){return <main><section className="page-banner"><div className="container"><span className="eyebrow">RECEPTION DESK</span><h1>Appointments & enquiries</h1><p>Choose a consultation, diagnostic test enquiry or general message.</p></div></section><AppointmentSection/><ContactSection/></main>}
