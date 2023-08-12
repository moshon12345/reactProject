import React, { useEffect } from "react";
import { func, object, string } from "prop-types";
// import Form from "../../forms/components/Form";
import FormForEditCard from "../../forms/components/FormForEditCard";
import Input from "../../forms/components/Input";
import useCards from "..//..//cards//hooks//useCards"
import { useParams } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";
import normalizeCard from '../helpers/normalization/normalizeCard';

const CardFormForEditCard = (
  { 
  onSubmit,
  onReset,
  errors,
  onFormChange,
  onInputChange,
  data,
  title,
}) =>
{

const { id } = useParams();
const { pending, error, card, handleGetCard } = useCards();
const { handleUpdateCard } = useCards();

const checkIt = () => {
handleUpdateCard(data, card._id, card.user_id)
}

const sendDataToEditCard = () => {
  let dataConstructionCompareToCard = [
    card.title,
    card.subtitle,
    card.description,
    card.phone, 
    card.email, 
    card.web, 
    card.image.url, 
    card.image.alt, 
    card.address.state, 
    card.address.country, 
    card.address.city, 
    card.address.street, 
    card.address.houseNumber, 
    card.address.zip,
  ];
  

  let counter = 0

for (let i in data) {
    if (data[i] == "") {
    data[i] = dataConstructionCompareToCard[counter]
    counter++
    } else {
      counter++
    }
  }
handleUpdateCard(data, card._id, card.user_id)
}

useEffect(() => {
  handleGetCard(id); 
}, []);

if (card) {

return (
  <FormForEditCard
    onSubmit={sendDataToEditCard}
    onReset={onReset}
    errors={errors}
    onChange={onFormChange}
    styles={{ maxWidth: "800px" }}
    title={title}
  >

<Container >
    <Typography 
          variant="h6">Edit Title
    </Typography>
    <Input 
      name="title"
      label={card.title}
      error={errors.title}
      onChange={onInputChange}
      data={data}
      sm={16}
      mb={3}
    />
</Container>

<Container>
    <Typography 
          variant="h6">Edit Subtitle
    </Typography>
    <Input
      name="subtitle"
      label={card.subtitle}
      error={errors.subtitle}
      onChange={onInputChange}
      data={data}
      sm={16}
      mb={3}
    />
</Container>

<Container>
    <Typography 
          variant="h6">Edit Description
    </Typography>
     <Input
      name="description"
      label={card.description}
      error={errors.description}
      onChange={onInputChange}
      data={data}
      sm={16}
      mb={3}
    />
</Container>

<Container>
    <Typography 
          variant="h6">Edit Phone
    </Typography>
    <Input
      name="phone"
      label={card.phone}
      type="phone"
      error={errors.phone}
      onChange={onInputChange}
      data={data}
      sm={16}
      mb={3}
    />
</Container>  

<Container>
    <Typography 
          variant="h6">Edit Email
    </Typography>
    <Input
      name="email"
      label={card.email}
      type="email"
      error={errors.email}
      onChange={onInputChange}
      data={data}
      sm={16}
      mb={3}
    />
</Container>

<Container>
    <Typography 
          variant="h6">Edit WebUrl
    </Typography>
    <Input
      name="webUrl"
      label={card.web}
      error={errors.webUrl}
      onChange={onInputChange}
      data={data}
      sm={16}
      mb={3}
      required={false}
    />
</Container>  

<Container>
    <Typography 
          variant="h6">Edit ImageUrl
    </Typography>
    <Input
      name="imageUrl"
      label={card.image.url}
      error={errors.imageUrl}
      onChange={onInputChange}
      data={data}
      sm={16}
      mb={3}
      required={false}
    />
</Container>  

<Container>
    <Typography 
          variant="h6">Edit ImageAlt
    </Typography>
    <Input
      name="imageAlt"
      label={card.image.alt}
      error={errors.imageAlt}
      onChange={onInputChange}
      data={data}
      sm={16}
      mb={3}
      required={false}
    />
</Container>  

<Container>
    <Typography 
          variant="h6">Edit State
    </Typography>
    <Input
      name="state"
      label={card.address.state}
      error={errors.state}
      onChange={onInputChange}
      data={data}
      sm={16}
      mb={3}
      required={false}
    />
</Container>  

<Container>
    <Typography 
          variant="h6">Edit Country
    </Typography>
    <Input
      name="country"
      label={card.address.country}
      error={errors.country}
      onChange={onInputChange}
      data={data}
      sm={16}
      mb={3}
    />
</Container>  

<Container>
    <Typography 
          variant="h6">Edit City
    </Typography>
    <Input
      name="city"
      label={card.address.city}
      error={errors.city}
      onChange={onInputChange}
      data={data}
      sm={16}
      mb={3}
    />
</Container>  

<Container>
    <Typography 
          variant="h6">Edit Street
    </Typography>
    <Input
      name="street"
      label={card.address.street}
      error={errors.street}
      onChange={onInputChange}
      data={data}
      sm={16}
      mb={3}
    />
</Container>  

<Container>
    <Typography 
          variant="h6">Edit House Number
    </Typography>
    <Input
      name="houseNumber"
      label={card.address.houseNumber}
      type="number"
      error={errors.houseNumber}
      onChange={onInputChange}
      data={data}
      sm={16}
      mb={3}
    />
</Container>  

<Container>
    <Typography 
          variant="h6">Edit Zip
    </Typography>
    <Input
      name="zip"
      label={card.address.zip}
      type="number"
      error={errors.zip}
      onChange={onInputChange}
      data={data}
      sm={16}
      mb={3}
      required={false}
    />
</Container>  
</FormForEditCard>
);
}
};

CardFormForEditCard.propTypes = {
  onSubmit: func.isRequired,
  onReset: func.isRequired,
  errors: object.isRequired,
  onFormChange: func.isRequired,
  onInputChange: func.isRequired,
  data: object.isRequired,
  title: string.isRequired,
};

export default React.memo(CardFormForEditCard);
