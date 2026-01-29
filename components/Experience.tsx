import React from "react";
import Title from "./Title";

/* ---------- Reusable Components ---------- */
interface ExperienceItemProps {
  icon: string;
  text: string;
}
const ExperienceItem = ({ icon, text }: ExperienceItemProps) => (
  <div className="flex items-start gap-4 p-4 rounded-xl transition-colors">
    <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
      <i className={`${icon} text-amber-600 text-xl`}></i>
    </div>
    <p className="text-sm leading-relaxed text-gray-700">{text}</p>
  </div>
);

/* ---------- Data ---------- */

const experienceData = {
  organization: "Kenya Police Service",
  title: "Gender-Based Violence & Children Desk",
  description:
    "Hands-on exposure to child protection systems and victim support services",
  items: [
    {
      icon: "ri-file-text-line",
      text:
        "Assisted in handling cases involving child abuse, neglect, and gender-based violence",
    },
    {
      icon: "ri-shield-line",
      text:
        "Supported proper reporting, documentation, and referral procedures",
    },
    {
      icon: "ri-service-line",
      text:
        "Engaged vulnerable children and survivors with empathy, confidentiality, and professionalism",
    },
    {
      icon: "ri-scales-3-line",
      text:
        "Gained practical understanding of safeguarding, justice processes, and protection of vulnerable populations",
    },
  ],
};

/* ---------- Main Component ---------- */

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-amber-50">
      <div className="px-4">
        <div className="max-w-6xl mx-auto">
          <Title Heading="Industrial Attachment" />

          <div className="md:max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-4 md:p-8">
            <div className="rounded-2xl md:p-8">
              <div className="text-center mb-10">
                <span className="inline-block px-4 py-2 bg-amber-50 ring-2 ring-amber-600 rounded-full text-sm font-medium mb-4">
                  {experienceData.organization}
                </span>

                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">
                  {experienceData.title}
                </h3>

                <p className="text-gray-700">
                  {experienceData.description}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {experienceData.items.map((item, index) => (
                  <ExperienceItem key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
