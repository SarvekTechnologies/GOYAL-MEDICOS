import { ArrowRight, Brain } from "lucide-react";
import Image from "next/image";
export default function DoctorSection() {
  return (
    <section className="section about-section">
      <div className="container about-grid">
        <div className="about-visual">
          {/* <div className="about-avatar"> */}
          <div className="relative w-full max-w-[400px] mx-auto aspect-[3/4] overflow-hidden  ">
            <Image
              src="/images/doctor2.jpeg"
              alt="Dr. Gourav Goyal"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            {/* </div> */}
          </div>
        </div>
        <div className="about-copy">
          <span className="eyebrow">MEET YOUR NEUROLOGIST</span>
          <h2>Dr. Gourav Goyal</h2>
          <p className="credentials">MBBS · MD · DM (Neurology)</p>
          <p>
            Dr. Gourav Goyal is a neurologist associated with The Neurocare &
            Stroke Clinic in Pratap Nagar, Jaipur. His listed areas of practice
            include stroke care, neurointervention and the assessment and
            management of neurological disorders.
          </p>
          <div className="qualification-list">
            <div>
              <strong>MBBS</strong>
              <span>SMS Medical College, Jaipur</span>
            </div>
            <div>
              <strong>MD</strong>
              <span>SGPGI, Lucknow</span>
            </div>
            <div>
              <strong>DM Neurology</strong>
              <span>SGPGI, Lucknow</span>
            </div>
            <div>
              <strong>Fellowship</strong>
              <span>Neurointervention & stroke</span>
            </div>
          </div>
          <a href="/doctor" className="text-link">
            View doctor profile <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
