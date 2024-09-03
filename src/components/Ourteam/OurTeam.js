// File: src/components/OurTeam/OurTeam.js

import styles from "./OurTeam.module.scss";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "John Doe",
    position: "CEO",
    image: "/images/team/team1.jpg",
    social: {
      facebook: "https://facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      instagram: "https://instagram.com/johndoe",
    },
  },
  {
    name: "John Wick",
    position: "HUNTER",
    image: "/images/team/team2.jpg",
    social: {
      facebook: "https://facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      instagram: "https://instagram.com/johndoe",
    },
  },
  {
    name: "Jane Smith",
    position: "CTO",
    image: "/images/team/team3.jpg",
    social: {
      facebook: "https://facebook.com/janesmith",
      twitter: "https://twitter.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      instagram: "https://instagram.com/janesmith",
    },
  },
  {
    name: "Alice Johnson",
    position: "Marketing Specialist",
    image: "/images/team/team4.jpg",
    social: {
      facebook: "https://facebook.com/alicejohnson",
      twitter: "https://twitter.com/alicejohnson",
      linkedin: "https://linkedin.com/in/alicejohnson",
      instagram: "https://instagram.com/alicejohnson",
    },
  },
  {
    name: "Robert Brown",
    position: "Project Manager",
    image: "/images/team/team5.jpg",
    social: {
      facebook: "https://facebook.com/robertbrown",
      twitter: "https://twitter.com/robertbrown",
      linkedin: "https://linkedin.com/in/robertbrown",
      instagram: "https://instagram.com/robertbrown",
    },
  },
  {
    name: "Laura Green",
    position: "Software Developer",
    image: "/images/team/team6.jpg",
    social: {
      facebook: "https://facebook.com/lauragreen",
      twitter: "https://twitter.com/lauragreen",
      linkedin: "https://linkedin.com/in/lauragreen",
      instagram: "https://instagram.com/lauragreen",
    },
  },
  {
    name: "Michael Lee",
    position: "Graphic Designer",
    image: "/images/team/team7.jpg",
    social: {
      facebook: "https://facebook.com/michaellee",
      twitter: "https://twitter.com/michaellee",
      linkedin: "https://linkedin.com/in/michaellee",
      instagram: "https://instagram.com/michaellee",
    },
  },
];

const OurTeam = () => {
  return (
    <div id="our-team" className={styles.teamContainer}>
      <h2 className={styles.title}>Our Team</h2> {/* Add the title here */}
      <div className={styles.teamWrapper}>
        {teamMembers.concat(teamMembers).map((member, index) => (
          <div key={index} className={styles.teamMember}>
            <img
              src={member.image}
              alt={member.name}
              className={styles.image}
            />
            <div className={styles.info}>
              <h3>{member.name}</h3>
              <p>{member.position}</p>
              <div className={styles.socialIcons}>
                <a
                  href={member.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={member.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
