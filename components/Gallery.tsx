import React from "react";
import Image from "next/image";
import Title from "./Title";

/* ---------- Reusable Component ---------- */
interface GalleryItemProps {
  src: string;
  alt: string;
  organization?: string;
}
const GalleryItem = ({ src, alt, organization }: GalleryItemProps) => (
  <div className="w-80 flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <div className="w-full h-96">
      <Image
        width={500}
        height={600}
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover object-top"
      />
    </div>
    <div className="p-5">
      <p className="text-sm text-gray-600">{alt}</p>
      <p className="text-xs text-gray-400 mt-1">{organization}</p>
    </div>
  </div>
);

/* ---------- Gallery Data ---------- */
const galleryData = [
  { src: "/Growing in obedience and Discipleship program shingila_1.webp", alt: "Youth Bible Study & Discipleship", organization: "Shingila Ministries" },
  { src: "/Growing in obedience and Discipleship program shingila_2.webp", alt: "Youth Ministry Outreach Event", organization: "Shingila Ministries" },
  { src: "/Growing in obedience and Discipleship program shingila_3.webp", alt: "Life Skills Development Workshop", organization: "Shingila Ministries" },
  { src: "/Growing in obedience and Discipleship program shingila_4.webp", alt: "Youth Prayer & Worship", organization: "Shingila Ministries" },

  { src: "/Maweu Your one degree program_1.webp", alt: "Mentorship & Guidance Sessions", organization: "Maweu Youth Programs" },
  { src: "/Maweu Your one degree program_2.webp", alt: "Youth Empowerment Activities", organization: "Maweu Youth Programs" },
  { src: "/Maweu Your one degree program_3.webp", alt: "Educational Workshops & Seminars", organization: "Maweu Youth Programs" },
  { src: "/Your one degree program Jamii villa_1.webp", alt: "Team Building Exercises", organization: "Jamii Villa Youth Programs" },
  { src: "/Your one degree program Jamii villa_2.webp", alt: "Youth Leadership Training", organization: "Jamii Villa Youth Programs" },
  { src: "/Your one degree program Jamii villa_3.webp", alt: "Faith-Based Mentorship", organization: "Jamii Villa Youth Programs" },
  { src: "/Your one degree program Jamii villa_4.webp", alt: "Community Engagement Projects", organization: "Jamii Villa Youth Programs" },

  { src: "/youth4intergrity_1.webp", alt: "Youth Empowerment Activities", organization: "Youth for Integrity Building" },
  { src: "/youth4intergrity_2.webp", alt: "Integrity Building Workshops", organization: "Youth for Integrity Building" },
];

/* ---------- Main Component ---------- */
const Gallery = () => {
  return (
    <section id="gallery" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Title Heading="Mentoring Sessions" />

        <div className="overflow-x-auto pb-4 -mx-6 px-6">
          <div className="flex gap-6 w-max">
            {galleryData.map((item, index) => (
              <GalleryItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
