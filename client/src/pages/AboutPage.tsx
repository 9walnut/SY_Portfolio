import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Header = styled.h1`
  margin-bottom: 20px;
`;

const WorkImage = styled.img`
  width: 50%;
  height: auto;
  border-radius: 5px;
  margin-right: 20px;
`;

const WorkSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;

  &:nth-child(odd) ${WorkImage} {
    margin-left: auto;
    margin-right: 0;
  }

  &:nth-child(even) ${WorkImage} {
    margin-left: 0;
    margin-right: auto;
  }
`;

const WorkItem = styled.div`
  flex: 0 0 50%;
  display: flex;
  align-items: flex-start; /* 텍스트를 상단에 정렬 */
  margin-bottom: 20px;
`;

const WorkText = styled.div`
  width: 50%;
`;

const WorkTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const WorkDescription = styled.p`
  color: #555;
`;

const works = [
  {
    title: ["Work Title 1", "Work Title 2"],
    description: ["Work Description 1", "Work Description 2"],
    image: "path_to_image_1.jpg",
  },
  {
    title: ["Work Title 3", "Work Title 4"],
    description: ["Work Description 3", "Work Description 4"],
    image: "path_to_image_2.jpg",
  },
  {
    title: ["Work Title 1", "Work Title 2"],
    description: ["Work Description 1", "Work Description 2"],
    image: "path_to_image_1.jpg",
  },
  {
    title: ["Work Title 1", "Work Title 2"],
    description: ["Work Description 1", "Work Description 2"],
    image: "path_to_image_1.jpg",
  },
];

const AboutPage: React.FC = () => {
  return (
    <AboutContainer>
      <Header>About Me</Header>
      {works.map((work, index) => (
        <WorkSection key={index}>
          <WorkItem>
            <WorkImage src={work.image} alt={`Work ${index + 1}`} />
            <WorkText>
              {work.title.map((title, idx) => (
                <div key={idx}>
                  <WorkTitle>{title}</WorkTitle>
                  <WorkDescription>{work.description[idx]}</WorkDescription>
                </div>
              ))}
            </WorkText>
          </WorkItem>
        </WorkSection>
      ))}
    </AboutContainer>
  );
};

export default AboutPage;
