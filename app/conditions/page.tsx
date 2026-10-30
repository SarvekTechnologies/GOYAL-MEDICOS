import ConditionsSection from '@/components/conditions-section';
import AppointmentSection from '@/components/appointment-section';
export const metadata={title:'Neurological Conditions | Neurocare Jaipur'};
export default function ConditionsPage(){return <main><section className="page-banner"><div className="container"><span className="eyebrow">CONDITIONS WE ASSESS</span><h1>Neurological conditions</h1><p>Information about conditions for which patients may seek neurological assessment.</p></div></section><ConditionsSection/><AppointmentSection/></main>}
