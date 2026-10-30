"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { CalendarDays, CheckCircle2, ClipboardList, Stethoscope } from "lucide-react";

type RequestType = "consultation" | "diagnostic" | "general";

export default function AppointmentForm() {
  const [type, setType] = useState<RequestType>("consultation");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const detail = String(form.get("detail") || "").trim();
    const date = String(form.get("date") || "").trim();
    const time = String(form.get("time") || "").trim();
    const subject = type === "consultation" ? "Doctor consultation request" : type === "diagnostic" ? "Diagnostic test enquiry" : "General clinic enquiry";
    const message = `Hello, I would like to make a ${subject.toLowerCase()}.\nName: ${name}\nPhone: ${phone}\nPreferred date: ${date || "Not specified"}\nPreferred time: ${time || "Not specified"}\nTest / details: ${detail || "Not provided"}`;
    window.open(`https://wa.me/917340300140?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <section id="appointment" className="booking-card" aria-labelledby="booking-title">
      <div className="booking-heading">
        <span className="eyebrow">RECEPTION DESK</span>
        <h2 id="booking-title">Book or send an enquiry</h2>
        <p>Select an option and share your contact details.</p>
      </div>
      <div className="request-tabs" role="group" aria-label="Choose enquiry type">
        <button type="button" className={type === "consultation" ? "request-tab active" : "request-tab"} onClick={() => { setType("consultation"); setSubmitted(false); }}><Stethoscope size={17} /> Consultation</button>
        <button type="button" className={type === "diagnostic" ? "request-tab active" : "request-tab"} onClick={() => { setType("diagnostic"); setSubmitted(false); }}><ClipboardList size={17} /> Test enquiry</button>
        <button type="button" className={type === "general" ? "request-tab active" : "request-tab"} onClick={() => { setType("general"); setSubmitted(false); }}>General</button>
      </div>
      {submitted ? (
        <div className="success-message" role="status"><CheckCircle2 size={28} /><div><strong>Your message is ready in WhatsApp.</strong><span>Send it in WhatsApp to contact the clinic reception.</span></div></div>
      ) : (
        <form onSubmit={handleSubmit} className="booking-form">
          <label className="field-label" htmlFor="patient-name">Your name</label>
          <input id="patient-name" name="name" placeholder="Enter your full name" autoComplete="name" required />
          <label className="field-label" htmlFor="patient-phone">Mobile number</label>
          <input id="patient-phone" name="phone" type="tel" inputMode="tel" placeholder="10-digit mobile number" autoComplete="tel" pattern="[0-9+() -]{10,}" required />
          {type !== "general" && <div className="two-fields"><div><label className="field-label" htmlFor="preferred-date">Preferred date</label><input id="preferred-date" name="date" type="date" /></div><div><label className="field-label" htmlFor="preferred-time">Preferred time</label><select id="preferred-time" name="time" defaultValue=""><option value="" disabled>Select time</option><option>5 PM–6 PM</option><option>6 PM–7 PM</option><option>Flexible</option></select></div></div>}
          <label className="field-label" htmlFor="request-detail">{type === "diagnostic" ? "Test name or details" : type === "consultation" ? "Reason for visit (optional)" : "Your message (optional)"}</label>
          <textarea id="request-detail" name="detail" rows={3} placeholder={type === "diagnostic" ? "e.g. EEG, NCV, EMG" : "Write a short message"} />
          <button className="button button-primary submit-button" type="submit"><CalendarDays size={18} /> Continue to WhatsApp</button>
          <p className="form-note">This form sends your request to reception. It does not confirm an appointment or provide medical advice.</p>
        </form>
      )}
    </section>
  );
}
