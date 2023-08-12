import { Container } from "@mui/material";
import React from "react";
import PageHeader from "../../components/PageHeader";
import { useEffect } from "react";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
// import { user } from "../../users/providers/UserProvider";

const CardsFavoritePage = (userId) => {
  const { pending, error, cards, handleGetCards } = useCards();
  const { user } = useUser();

  useEffect(() => {
    handleGetCards();
  }, []);

let likesCardsObject = [];

if (cards) {
   likesCardsObject = []
     for (let card of cards) {
         for (let like in card.likes) {
             if (card.likes[like] == user._id) {
                 likesCardsObject.push(card)
            }
        }
    }
}

  return (
    <Container>
      <PageHeader
        title="Favorite Cards Page"
        subtitle="On this page you can find all the favorite business cards from all categories"
      />
      <CardsFeedback
        cards={likesCardsObject}
        error={error}
        pending={pending}
        onDelete={() => {}}
      />
    </Container>
  );
};

export default CardsFavoritePage;
