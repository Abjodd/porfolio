import React from "react";
import ImageCarousel from "./ImageCarousel";
import "../styles/projects.scss";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "A React dashboard for the farmers",
      description: `Developing a React dashboard for the farmers app to provide government officials with an intuitive and organized
view of the collected data.
Incorporating features like data filtering, sorting, and visualizations to ensure insights are easily accessible.
Enhancing usability by focusing on a clean UI/UX design for seamless navigation and interaction with large datasets
https://gkvk-dashboard.vercel.app/.`,
      images: ["project5.png", "project6.png"],
    },
    {
      id: 2,
      name: " ATS-friendly resume building",
      description: "Designed and developed a website for real-time, ATS-friendly resume building, enabling users to create professional resumes for free. Implemented a live preview feature to allow users to see updates to their resume instantly. Ensured the resume template adhered to ATS standards for optimal compatibility with job application systems." +
      " https://github.com/Abjodd/resumebuilder.",
      images: ["project1.png", "project2.png", "project3.png"],
    },
//     {
//       id: 3,
//       name: " A cloud-based mobile application for farmers",
//       description: `Developed a cloud-based mobile application for farmers to collect and store their details securely.
// Collaborated with government officials to understand requirements and ensure the app met the needs of the farming
// community. Implemented robust data storage solutions to efficiently handle large-scale data entry and retrieval.`,
//       images: ["project11.jpg", "project12.jpg", "project13.jpg"],
//     },
    {
      id: 4,
      name: " A GYM MANAGEMENT SYSTEM",
      description: `The Gym Management System is a software designed to store data about members, employees, products, payroll, receipts of members etc & all transactions that occur in Gym and lock-up with graphical user interface (GUI). The main objectives of the project are to design and develop a user-friendly system, to develop an accurate and flexible system that will eliminate data redundancy, and to provide better graphical user interface. The system should be able to store information of members, employees, and check the validity of information provided by the user.
      https://github.com/Abjodd/blackfitness`,
      images: ["project7.png", "project8.png", "project9.png", "project10.png"],
    },
    {
      id: 3,
      name: " Social Media post extracter",
      description: `Social Media Post Extractor is a powerful tool designed to effortlessly extract text from social media posts across various platforms. Whether you're looking to analyze trends, gather insights, or simply archive content, this tool simplifies the process and saves you time.
      https://github.com/Abjodd/amazon.`,
      images: ["project4.png"],
    },
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <ImageCarousel images={project.images} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            
          </div>
          
        ))}
      </div>
      <h1>MANY MORE PROJECTS AT MY GITHUB CHECK OUT.....</h1>
    </section>
  );
};

export default Projects;

