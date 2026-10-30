import Hero from "@/components/hero";
import ConditionsSection from "@/components/conditions-section";
import DoctorSection from "@/components/doctor-section";
import TreatmentsSection from "@/components/treatments-section";
import DiagnosticsSection from "@/components/diagnostics-section";
import AppointmentSection from "@/components/appointment-section";
import ContactSection from "@/components/contact-section";
export default function Home() {
  return (
    <main>
      <Hero />
      <div className="quick-strip">
        <div className="container quick-strip-inner">
          <a href="tel:+917340300140">
            <span>☎</span>
            <span>
              <strong>Call reception</strong>
              <small>+91 73403 00140</small>
            </span>
          </a>
          <a href="/contact#appointment">
            <span>▣</span>
            <span>
              <strong>Book a visit</strong>
              <small>Request a consultation</small>
            </span>
          </a>
          <a href="/contact">
            <span>⌖</span>
            <span>
              <strong>Find the clinic</strong>
              <small>Pratap Nagar, Jaipur</small>
            </span>
          </a>
        </div>
      </div>
      <ConditionsSection />
      <DoctorSection />
      <TreatmentsSection />
      <DiagnosticsSection />
      <AppointmentSection />
      <ContactSection />
    </main>
  );
}
