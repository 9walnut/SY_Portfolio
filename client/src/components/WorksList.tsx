import React from "react";
import styled from "styled-components";
import WorkItem from "./WorkItem";

const List = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const WorksList: React.FC = () => {
  const works = [
    { title: "Project 1", description: "Description of project 1" },
    { title: "Project 2", description: "Description of project 2" },
    { title: "Project 3", description: "Description of project 3" },
  ];

  return (
    <List>
      {works.map((work, index) => (
        <WorkItem
          key={index}
          title={work.title}
          description={work.description}
        />
      ))}
    </List>
  );
};

export default WorksList;
