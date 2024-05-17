import React from "react";
import styled from "styled-components";

interface WorkItemProps {
  title: string;
  description: string;
}

const Item = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin: 0 0 10px;
  font-size: 1.5em;
  color: #333;
`;

const Description = styled.p`
  margin: 0;
  color: #666;
`;

const WorkItem: React.FC<WorkItemProps> = ({ title, description }) => {
  return (
    <Item>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Item>
  );
};

export default WorkItem;
