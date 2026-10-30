import { ChevronRight } from "lucide-react";
const procedures = [
  "Stroke thrombolysis (IV and endovascular)",
  "Brain aneurysm coiling",
  "AVM embolization",
  "Carotid artery stenting",
  "Headache, migraine & epilepsy management",
  "Movement, nerve & muscle disorders",
];
export default function TreatmentsSection() {
  return (
    <section className="section section-white">
      <div className="container services-layout">
        <div>
          <span className="eyebrow">SPECIALIST CARE</span>
          <h2 className="section-title-left">Treatments & procedures</h2>
          <p className="section-intro">
            Treatment suitability depends on the patient’s condition and
            clinical assessment. Contact the clinic for details.
          </p>
        </div>
        <div className="service-list">
          {procedures.map((item, i) => (
            <div className="service-row" key={item}>
              <span className="service-number">0{i + 1}</span>
              <span>{item}</span>
              <ChevronRight size={17} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
