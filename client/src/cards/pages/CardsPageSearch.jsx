import { Container } from "@mui/material";
import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import { useEffect } from "react";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";
import { useParams } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useNavigate } from "react-router-dom";


const CardsPageSearch = () => {
  const navigate = useNavigate();
  const { pending, error, cards, handleSearchCards,  handleNoSearchCards, handleGetCards} = useCards();
  const [name, setName] = useState("");
  
  const { id } = useParams();

  let idK = "";

  useEffect(() => {
    handleSearchCards(id)
  }, [id]);

  return (
    <Container>
      <PageHeader
        title="Cards Page"
        subtitle="On this page you can find all business cards from all categories"
      />
      <CardsFeedback
        cards={cards}
        error={error}
        pending={pending}
        onDelete={() => {}}
      />
    </Container>
  );
};

export default CardsPageSearch;
