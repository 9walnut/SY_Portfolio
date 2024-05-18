import React from "react";
import styled from "styled-components";

interface WorkItemProps {
  title: string;
  subtitle: string;
  date: string;
  imageUrl: string;
}

const Item = styled.div`
  display: flex;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 20px;
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  box-sizing: border-box;
`;

const ImageContainer = styled.div`
  flex: 1;
  padding-right: 20px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
`;

const Content = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Date = styled.div`
  font-size: 0.9em;
  color: #999;
`;

const Title = styled.h2`
  margin: 0 0 10px;
  font-size: 1.5em;
  color: #333;
`;

const Subtitle = styled.h3`
  margin: 0;
  font-size: 1.2em;
  color: #666;
`;

const WorkItem: React.FC<WorkItemProps> = ({
  title,
  subtitle,
  date,
  imageUrl,
}) => {
  return (
    <Item>
      <ImageContainer>
        <Image src={imageUrl} alt={title} />
      </ImageContainer>
      <Content>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Content>
    </Item>
  );
};

export default WorkItem;
