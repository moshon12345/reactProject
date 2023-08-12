import React from "react";
import {useNavigate} from 'react-router-dom';

import {
  Box,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import cardType from "../../models/types/cardType";
import { blue } from "@mui/material/colors";
import ROUTES from "../../../routes/routesModel";

const clicki = () => {
  // console.log("Luki !!")
//navigate(ROUTES.SANDBOX)
}

const CardBody = ({ card }) => {
  const navigate = useNavigate ();
  const { street, houseNumber, city } = card.address;
  return (
    <>
      <CardContent >
        <CardHeader title={card.title} subheader={card.subtitle} sx={{ p: 0, mb: 1 }} />
        <Divider />
        <Box mt={1}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ display: "flex", gap: 1 }}
          >
            <Typography fontWeight={700} component="span">
              phone:
            </Typography>
            <Typography component="span">{card.phone}</Typography>
          </Typography>
          <Typography
            sx={{ display: "flex", gap: 1 }}
            variant="body2"
            color="text.secondary"
          >
            <Typography fontWeight={700} component="span">
              Adress:
            </Typography>
            <Typography component="span">
              {street} {houseNumber} {city}
            </Typography>
          </Typography>
          <Typography
            sx={{ display: "flex", gap: 1 }}
            variant="body2"
            color="text.secondary"
          >
            <Typography fontWeight={700} component="span" sx={{mb: "15px"}}>
              Card Number:
            </Typography>
            <Typography component="span">{card.bizNumber}
            </Typography>
          </Typography>

          {/* <Divider />
      <Typography 
      onClick={
        clicki}
             fontWeight={900}
              component="span"
              sx={{ 
                color: "blue",
                ":hover": {
                  bgcolor: "#AF5",
                  color: "white"
                } 
              }}
               >
              Click for full details...
            </ Typography>
            <Divider /> */}

        </Box>
      </CardContent>
    </>
  );
};

CardBody.propTypes = {
  card: cardType.isRequired,
};

export default CardBody;
