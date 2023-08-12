import React, { useEffect } from "react";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import useForm from "../../forms/hooks/useForm";
import initialCardForm from "../helpers/normalization/initial-forms/initialCardForm";
import cardSchema from "../models/joi-schema/cardSchema";
import ROUTES from "../../routes/routesModel";
import { Navigate, useParams } from "react-router-dom";
import { Container } from "@mui/material";
// import CardForm from "../components/CardForm";
import CardFormForEditCard from "../components/CardFormForEditCard";
import { checkIt } from "..//components//CardFormForEditCard"

const UpdateCardPage = ({
  onSubmit,
  onReset,
  errors,
  onFormChange,
  onInputChange,
  data,
  title,
}) => {
  
  const { id } = useParams();
  const { pending, error, card, handleGetCard } = useCards();
  
  const updateCard = () => {
    // handleUpdateCard(card)
    // console.log(data)
    // console.log("Babi")
  }

  const { handleUpdateCard } = useCards();
  const { user } = useUser();
  const { value, ...rest } = useForm(
    initialCardForm,
    cardSchema,
    handleUpdateCard,
  );


  useEffect(() => {
    handleGetCard(id); 
    // console.log(id)
  }, []);


  if (!user || !user.isBusiness) return <Navigate replace to={ROUTES.CARDS} />;

  

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardFormForEditCard
        title="Edit Card"
        onSubmit={updateCard}
        onReset={rest.handleReset}
        errors={value.errors}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleChange}
        data={value.data}
      />
    </Container>
  );
};

export default UpdateCardPage;
