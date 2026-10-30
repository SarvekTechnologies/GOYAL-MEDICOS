import DoctorSection from '@/components/doctor-section';
import AppointmentSection from '@/components/appointment-section';
export const metadata={title:'About Dr. Gourav Goyal | Neurocare Jaipur'};
export default function DoctorPage(){return <main><section className="page-banner"><div className="container"><span className="eyebrow">DOCTOR PROFILE</span><h1>Meet your neurologist</h1><p>Qualifications, training and areas of clinical practice.</p></div></section><DoctorSection/><AppointmentSection/></main>}
