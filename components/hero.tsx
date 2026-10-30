import {
  CalendarDays,
  HeartPulse,
  Phone,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">NEUROLOGY & STROKE CARE · JAIPUR</span>
          <h1>
            Expert care for
            <br className="hero-title-break" />
            <span>your brain & nerves.</span>
          </h1>
          <h2>Dr. Gourav Goyal</h2>
          <p className="credentials">MBBS, MD, DM (Neurology)</p>
          <p className="hero-description">
            Neurological symptoms can be worrying. Dr. Gourav Goyal focuses on
            careful assessment, clear explanations and helping patients
            understand their care options.
          </p>
          <div className="hero-actions">
            <a href="/contact#appointment" className="button button-primary">
              <CalendarDays size={18} /> Book an appointment
            </a>
            <a href="tel:+917340300140" className="button button-outline">
              <Phone size={18} /> Call clinic
            </a>
          </div>
          <div className="hero-assurance">
            <ShieldCheck size={17} /> Consultation by appointment · Reception
            assistance available
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-portrait">
            <Image
              src="/images/doctor2.jpeg"
              alt="Dr. Gourav Goyal"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 760px) 75vw, (max-width: 1050px) 38vw, 300px"
            />
          </div>
          <div className="doctor-caption">
            <span className="caption-dot" />
            <div>
              <strong>Dr. Gourav Goyal</strong>
              <small>MBBS, MD, DM (Neurology)</small>
            </div>
          </div>
        </div>
        <div className="hero-side-note">
          <span className="side-note-icon">
            <HeartPulse size={20} />
          </span>
          <strong>Stroke & neurointervention</strong>
          <span>Specialist care for complex neurological conditions.</span>
        </div>
      </div>
    </section>
  );
}
