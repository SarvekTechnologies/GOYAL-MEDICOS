import {
  Activity,
  ArrowRight,
  Brain,
  HeartPulse,
  ScanFace,
  Waves,
  Zap,
} from "lucide-react";
const items = [
  ["Stroke", "Stroke evaluation and management", Brain],
  ["Headache & migraine", "Assessment and treatment planning", ScanFace],
  ["Epilepsy", "Seizure evaluation and care", Activity],
  ["Parkinson’s disease", "Movement disorder care", HeartPulse],
  ["Neuropathy & myopathy", "Nerve and muscle conditions", Zap],
  ["Neck & back pain", "Neurological assessment of pain", Waves],
] as const;
export default function ConditionsSection() {
  return (
    <section className="section section-white">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">CONDITIONS WE ASSESS</span>
          <h2>Neurological conditions</h2>
          <p>
            Explore common conditions managed in neurology. Contact the clinic
            to ask about an appointment.
          </p>
        </div>
        <div className="condition-grid">
          {items.map(([name, detail, Icon]) => (
            <a
              className="condition-card"
              href="/contact#appointment"
              key={name}
            >
              <span className="condition-icon">
                <Icon size={25} />
              </span>
              <span className="condition-content">
                <strong>{name}</strong>
                <small>{detail}</small>
              </span>
              <ArrowRight className="condition-arrow" size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
