import React from "react";
import { Card, CardActionArea, Divider, Typography } from "@mui/material";
import cardType from "../../models/types/cardType";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import { func } from "prop-types";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import useCards from "../../hooks/useCards";

const CardComponent = ({ card, onLike, onDelete, onEdit }) => {
  const navigate = useNavigate();

  const moveToDetailsPage = () => {
    navigate(`${ROUTES.CARD_FULL_DETAILS}/${card._id}`)
  }

  return (
    <Card sx={{ maxWidth: 280 }}>

      <CardActionArea
        onClick={() => navigate(`${ROUTES.CARD_INFO}/${card._id}`)}
      >

        <CardHead image={card.image} />
        <CardBody card={card} />
      </CardActionArea>

      <CardActionBar
        onLike={onLike}
        onDelete={onDelete}
        onEdit={onEdit}
        cardId={card._id}
        userId={card.user_id}
        card={card}
      />

<Divider />
      <Typography 
      onClick={moveToDetailsPage}
             fontWeight={900}
              component="span"
              sx={{ 
                color: "blue",
                ":hover": {
                  bgcolor: "#AF5",
                  color: "white"
                },
                margin: "13px",
                cursor: "pointer"
              }}
               >
              Click for full details...
        </ Typography>
<Divider />

    </Card>
  );
};

CardComponent.propTypes = {
  card: cardType.isRequired,
  onLike: func.isRequired,
  onDelete: func.isRequired,
  onEdit: func.isRequired,
};

export default CardComponent;
