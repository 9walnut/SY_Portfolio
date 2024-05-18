import React from "react";
import styled from "styled-components";
import WorkItem from "./WorkItem";

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

const WorksList: React.FC = () => {
  const works = [
    {
      title: "Project 1",
      subtitle: "Subtitle 1",
      date: "2024-01-01",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Project 2",
      subtitle: "Subtitle 2",
      date: "2024-01-02",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Project 3",
      subtitle: "Subtitle 3",
      date: "2024-01-03",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <List>
      {works.map((work, index) => (
        <WorkItem
          key={index}
          title={work.title}
          subtitle={work.subtitle}
          date={work.date}
          imageUrl={work.imageUrl}
        />
      ))}
    </List>
  );
};

export default WorksList;
