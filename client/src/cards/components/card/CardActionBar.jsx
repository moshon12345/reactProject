import React, { useEffect, useState } from "react";
import { Box, CardActions, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { func, string } from "prop-types";
import { useUser } from "../../../users/providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import { changeLikeStatus } from "../../services/cardService";
// import useCards from "..//..//..//cards//hooks//useCards"
import useCards from "..//..//..//cards//hooks//useCards"
import { useParams } from "react-router-dom";

const CardActionBar = ({ card ,cardId, onLike, onDelete, onEdit, userId }) => {

const navigate = useNavigate ();
const { handleDeleteCard } = useCards();
const { handleGetCards } = useCards();

const [changeColor, setChangeColor] = useState(false)
const handleClickColor = () => {
  setChangeColor(!changeColor)
  changeLikeStatus(cardId)
}
 
const checkIfThisUserLikeThisCard = () => {
  if (user) {
  for (let i in card.likes) {
    if (card.likes[i] == user._id) {
      setChangeColor(!changeColor)
      isUserLikedIt = true;
    }
  }
 }
}

const checkIfThisCardAllReadyDeleted = (cardId) => {
  // console.log("Lufi !!")
  // console.log(cardId)
  // console.log(cards)
}

const handleClickEdit = () => {
  navigate (`${ROUTES.CARDS_EDITS}/${cardId}`)
}


const handleClickDelete = () => {
  // // handleGetCards(cardId)
  // console.log(cards)
  // checkIfThisCardAllReadyDeleted(cardId)
  handleDeleteCard(cardId);
  navigate (ROUTES.CARDS)
}

const { user } = useUser();
const { cards } = useCards();

let isUserLikedIt = false

useEffect(() => {

if (card) {
  checkIfThisUserLikeThisCard();
}

}, []);

  return (
    <>
      <CardActions
        disableSpacing
        sx={{ pt: 0, justifyContent: "space-between" }}
      >
        <Box>
          {user && (user?._id === userId || user.isAdmin) && (
            <IconButton onClick={handleClickDelete} aria-label="delete">
              <DeleteIcon />
            </IconButton>
          )}
          {user && user?._id === userId && (
            <IconButton onClick={handleClickEdit}>
              <EditIcon />
            </IconButton>
          )}
        </Box>
        <Box>
          <IconButton aria-label="call">
            <CallIcon />
          </IconButton>
          {!isUserLikedIt && (
              <IconButton onClick={handleClickColor}>
              <FavoriteIcon color={changeColor ? "error" : "default"}/>
              </IconButton>
          )}
          {isUserLikedIt && (
               <IconButton onClick={handleClickColor}>
               <FavoriteIcon color={changeColor ? "default" : "error"}/>
               </IconButton>
          )}
        </Box>
      </CardActions>
      
    </>
  );
};

CardActionBar.propTypes = {
  cardId: string.isRequired,
  onLike: func.isRequired,
  onDelete: func.isRequired,
  onEdit: func.isRequired,
};

export default CardActionBar;
