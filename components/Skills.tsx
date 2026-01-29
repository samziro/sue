import React from "react";
import Title from "./Title";

/* ---------- Reusable Components ---------- */

interface SkillCardProps {
  icon: string;
  title: string;
  items: string[];
}

const SkillCard = ({ icon, title, items }: SkillCardProps) => (
  <div className="rounded-2xl ring-2 ring-amber-600 p-8 transition-all duration-300 hover:-translate-y-1">
    <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center mb-6">
      <i className={`${icon} text-amber-600 text-xl`}></i>
    </div>

    <h3 className="font-heading text-xl font-bold mb-6">{title}</h3>

    <ul className="space-y-3">
      {items.map((item:string, index:number) => (
        <li key={index} className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-amber-600 flex-shrink-0"></span>
          <span className="text-sm text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

/* ---------- Data ---------- */

const skillsData = [
  {
    icon: "ri-service-line",
    title: "Faith-Based & Program Skills",
    items: [
      "Christ-Centered Mentorship & Discipleship",
      "Youth Leadership & Pastoral Care",
      "Holistic Child Development",
      "Child Protection & Safeguarding",
      "Community Engagement & Mobilization",
    ],
  },
  {
    icon: "ri-briefcase-2-line",
    title: "Professional & Technical Skills",
    items: [
      "Case Documentation & Reporting",
      "Program Support & Coordination",
      "Criminology & Social Justice Principles",
      "Information Technology Fundamentals",
      "Microsoft Office & Notion",
    ],
  },
  {
    icon: "ri-sparkling-2-line",
    title: "Personal Strengths",
    items: [
      "Servant Leadership",
      "Integrity & Accountability",
      "Compassion & Empathy",
      "Strong Communication",
      "Team Collaboration",
    ],
  },
];

/* ---------- Main Component ---------- */

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="px-4">
        <div className="max-w-6xl mx-auto">
          <Title Heading="Skills & Strengths" />

          <div className="grid md:grid-cols-3 gap-8">
            {skillsData.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
