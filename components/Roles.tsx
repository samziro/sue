import React from "react";
import Title from "./Title";

/* ---------- Reusable Components ---------- */

interface RoleCardProps {
  icon: string;
  title: string;
  org: string;
  responsibilities: string[];
}

const RoleCard = ({ icon, title, org, responsibilities }: RoleCardProps) => (
  <div className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 shadow-md ring-2 ring-amber-600">
    <div className="flex items-start gap-4 mb-6">
      <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
        <i className={`${icon} text-3xl text-amber-600`}></i>
      </div>
      <div>
        <h3 className="font-heading text-2xl font-bold">{title}</h3>
        <p className="font-medium text-amber-600">{org}</p>
      </div>
    </div>

    <ul className="space-y-3 text-gray-700">
      {responsibilities.map((item: string, index: number) => (
        <li key={index} className="flex items-start gap-3">
          <i className="ri-checkbox-circle-line"></i>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

/* ---------- Data ---------- */

const rolesData = [
  {
    icon: "ri-group-line",
    title: "Youth Mentor",
    org: "Gideon's Mentors — Compassion Program",
    responsibilities: [
      "Mentor children and youth through Christ-centered guidance, discipleship, and life-skills development",
      "Support spiritual growth, character formation, and positive behavior among program beneficiaries",
      "Work closely with program coordinators, caregivers, and church leadership",
      "Promote child protection, dignity, and ethical conduct in all interactions",
    ],
  },
  {
    icon: "ri-building-2-line",
    title: "Youth Pastor",
    org: "Bethphage Assemblies",
    responsibilities: [
      "Lead and mentor the youth ministry through Bible teaching, discipleship, and structured mentorship programs",
      "Organize youth activities, retreats, and outreach events that support spiritual and personal growth",
      "Support youth in developing Christ-centered character, leadership skills, and community responsibility",
      "Collaborate with church leadership to plan and implement youth-focused initiatives",
    ],
  },
];

/* ---------- Main Component ---------- */

const Roles = () => {
  return (
    <section id="roles" className="py-24">
      <div className="px-4">
        <div className="max-w-6xl mx-auto">
          <Title Heading="Roles & Responsibilities" />

          <div className="grid md:grid-cols-2 gap-8">
            {rolesData.map((role, index) => (
              <RoleCard key={index} {...role} />
            ))}
          </div>

          {/* Volunteer Section */}
          <div className="mt-12 bg-amber-50 rounded-2xl p-8 text-center max-w-3xl mx-auto">
            <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
              <i className="ri-service-line text-3xl text-amber-600"></i>
            </div>
            <h3 className="font-heading text-xl font-bold mb-2">
              Volunteer Service
            </h3>
            <p className="text-amber-600 font-medium mb-4">
              Youth for Integrity Building
            </p>
            <p className="text-gray-700">
              Participated in integrity-building classes focused on ethics,
              leadership, and accountability. Applied integrity principles in
              youth mentorship, leadership, and community engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roles;
