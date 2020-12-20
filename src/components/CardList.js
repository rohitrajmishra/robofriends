import React from "react";
import Card from "./Card";

const CardList = (props) => {
  // NOTE: Uncomment the test for checking if ErrorBoundary is working
  // if (true) {
  //   throw new Error("Something went wrong");
  // }
  const { robots } = props;
  const cardsArray = robots.map((user, i) => {
    return (
      <Card
        key={robots[i].id}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });

  return <div>{cardsArray}</div>;
};

export default CardList;
