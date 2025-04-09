// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  max-width: 100%;
  padding: 20px;
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: #f97316 #f0f0f0; /* fallback for Firefox */

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(to right, #f97316, #dc2626); /* orange-500 to red-600 */
    border-radius: 10px;
  }

  @media (min-width: 1024px) {
    margin-left: 50px;
  }
`;

const Card = styled.div`
  position: relative;
  min-width: 280px;
  height: 450px;
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7));
`;

const CardContent = styled.div`
  position: absolute;
  padding: 20px;
  z-index: 10;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CategoryTag = styled.a`
   background: linear-gradient(to right, #0369a1, #2563eb); /* sky-700 to blue-600 */
  color: white;
  padding: 5px 12px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 20px;
  align-self: flex-start;
  transition: 0.3s;
  text-decoration: none;

  &:hover {
    background: white;
    color: #4f46e5;
  }
`;

const NewsTitle = styled.a`
  font-size: 20px;
  font-weight: bold;
  transition: 0.3s;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const accordionData = [
  {
    image: "https://media.assettype.com/nationalherald%2F2019-10%2F2a4ae0b4-79c7-443b-8106-f1a278690208%2Fpeeing_human_tv_panelits_hate.jpg?rect=131%2C0%2C924%2C520&auto=format%2Ccompress&fmt=webp&w=768&dpr=1.0",
    title: "Debate & Discussions",
    description: "Engage in structured debates and group dialogues.",
  },
  {
    image: "  https://as1.ftcdn.net/jpg/13/44/87/82/1000_F_1344878259_7OlGVCcodFoca1okoOuzzHQ8okVlz4Hp.jpg",
    title: "Career Talks",
    description: "Learn from alumni, professionals & recruiters.",
  },
  {
    image: "https://static.vecteezy.com/ti/vecteur-libre/p3/6026081-business-teamwork-reunion-discussion-a-la-table-ronde-illustrationle-noir-et-blanc-vectoriel.jpg",
    title: "Panel & Open Forums",
    description: "Participate in expert panels & open conversations.",
  },
  {
    image: "https://assets-global.website-files.com/62ba01ba5ddce9536b927dbb/6530256902ea7dd3938fc4be_5286169b-2854-4423-9b88-d2daea937b24.webp",
    title: "Fun & Interactive",
    description: "Quizzes, roleplays, and creative speaking events.",
  },
  {
    image: "https://www.pngkey.com/png/full/835-8350886_political-awareness.png",
    title: "Social & Political Awareness",
    description: "Discussions on current issues & social topics.",
  },
  {
    image: "https://i.pinimg.com/736x/ba/8b/5e/ba8b5e843df41eaa2847c9c862c02a69.jpg",
    title: "Communication Skills",
    description: "Enhance public speaking & critical thinking.",
  },
];

const Category = () => {
  return (
    <GridContainer>
      {accordionData.map((item, index) => (
        <Card key={index} style={{ backgroundImage: `url(${item.image})` }}>
          <Overlay />
          <CardContent>
            <CategoryTag href="#">{item.title}</CategoryTag>
            <NewsTitle href="#">{item.description}</NewsTitle>
          </CardContent>
        </Card>
      ))}
    </GridContainer>
  );
};

export default Category;
