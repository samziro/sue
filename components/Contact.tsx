import React from "react";
import Title from "./Title";

/* ---------- Reusable Components ---------- */
interface ContactCardProps {
  href: string;
  icon: string;
  label: string;
  value: string;
}
const ContactCard = ({ href, icon, label, value }: ContactCardProps) => (
  <a
    href={href}
    className="rounded-xl p-4 bg-white shadow-md flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
  >
    <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center">
      <i className={`${icon} text-amber-600 text-3xl`}></i>
    </div>
    <div className="text-left">
      <p className="text-sm">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  </a>
);

/* ---------- Data ---------- */

const contactData = [
  {
    href: "mailto:susanmwarabu@gmail.com",
    icon: "ri-mail-line",
    label: "Email",
    value: "susanmwarabu@gmail.com",
  },
  {
    href: "tel:+254743553238",
    icon: "ri-phone-line",
    label: "Phone",
    value: "+254 743 553 238",
  },
];

/* ---------- Main Component ---------- */

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-amber-50">
      <div className="px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <Title Heading="Get in Touch" />
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              I&apos;m always open to discussing youth mentorship opportunities,
              faith-based programs, and ways to serve children and communities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            {contactData.map((item, index) => (
              <ContactCard key={index} {...item} />
            ))}
          </div>

          <button className="inline-flex items-center justify-center gap-2 h-11 rounded-md bg-amber-600 text-white px-8 transition-colors">
            <i className="ri-send-plane-line text-xl"></i>
            Send a Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
