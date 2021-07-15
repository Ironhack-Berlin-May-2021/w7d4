import React from "react";

const Education = () => {
  const myEducation = [
    {
      schoolName: "Ironhack",
      city: "Miami",
      country: "US",
      degree: "Full-Stack Web Developer",
      schoolStarted: "2017",
      schoolEnded: "2017"
    },
    {
      schoolName: "University of Cool Things",
      city: "Paris",
      country: "France",
      degree: "MS of Cool Things",
      schoolStarted: "2015",
      schoolEnded: "2017"
    },
    {
      schoolName: "University of Chill Vibe",
      city: "Berlin",
      country: "Germany",
      degree: "BS of Super Science",
      schoolStarted: "2012",
      schoolEnded: "2015"
    }
  ];

  return (
    <div style={{ flex: 1 }}>
      <h2>Education:</h2>
      {myEducation.map((school, index) => {
        return (
          <div key={index}>
            <h3>{school.schoolName}</h3>
            <p>
              {school.city}, {school.country}
            </p>
            <h4>{school.degree}</h4>
            <p>
              {school.schoolStarted} - {school.schoolEnded}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
