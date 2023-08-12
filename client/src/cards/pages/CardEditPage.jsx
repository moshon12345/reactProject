import React from "react";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import useForm from "../../forms/hooks/useForm";
import initialCardForm from "../helpers/normalization/initial-forms/initialCardForm";
import cardSchema from "../models/joi-schema/cardSchema";
import ROUTES from "../../routes/routesModel";
import { Navigate } from "react-router-dom";
import { Container } from "@mui/material";
import CardFormForEditCard from "../components/CardFormForEditCard";
// import CardDetailsPage from "./CardDetailsPage";

const CardEditPage = () => {
  const { handleCreateCard } = useCards();
  const { user } = useUser();
  const { value, ...rest } = useForm(
    initialCardForm,
    cardSchema,
    handleCreateCard
  );

  if (!user || !user.isBusiness) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    // <CardDetailsPage></CardDetailsPage>
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
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        errors={value.errors}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleChange}
        data={value.data}
      />
    </Container>
  );
};

export default CardEditPage;
// export default CardEditPage