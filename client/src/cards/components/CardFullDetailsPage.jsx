import React, { useEffect } from "react";
import useCards from "../hooks/useCards"
import { useParams } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";
import { Divider } from '@mui/material';

const CardFullDetailsPage = ({}) =>
{
const { id } = useParams();
const { pending, error, card, handleGetCard } = useCards();
useEffect(() => {
  handleGetCard(id); 
}, []);

if (card) {
return (
<Container>
<Divider></Divider>
<Divider></Divider>
<Divider></Divider>
<Divider></Divider>
<Divider></Divider>
<Divider></Divider>
<Divider></Divider>
<Divider>
  </Divider>
    <Typography variant="h6" align="center">Title:</Typography>
    <Typography variant="h6" align="center">{card.title}</Typography>
  <Divider>
</Divider>

<Divider sx={{
  height: "5px"
}}
style={{ background: '#757575' }}
></Divider>
<Divider>
  </Divider>
    <Typography variant="h6" align="center">Subtitle:</Typography>
    <Typography variant="h6" align="center">{card.subtitle}</Typography>
  <Divider>
</Divider>

<Divider sx={{
  height: "5px"
}}
style={{ background: '#757575' }}
></Divider>
<Divider>
  </Divider>
    <Typography variant="h6" align="center">Description:</Typography>
    <Typography variant="h6" align="center">{card.description}</Typography>
  <Divider>
</Divider>

<Divider sx={{
  height: "5px"
}}
style={{ background: '#757575' }}
></Divider>
<Divider>
  </Divider>
    <Typography variant="h6" align="center">Phone:</Typography>
    <Typography variant="h6" align="center">{card.phone}</Typography>
  <Divider>
</Divider>

<Divider sx={{
  height: "5px"
}}
style={{ background: '#757575' }}
></Divider>
<Divider>
  </Divider>
    <Typography variant="h6" align="center">Email:</Typography>
    <Typography variant="h6" align="center">{card.email}</Typography>
  <Divider>
</Divider>

<Divider sx={{
  height: "5px"
}}
style={{ background: '#757575' }}
></Divider>
<Divider>
  </Divider>
    <Typography variant="h6" align="center">Web:</Typography>
    <Typography variant="h6" align="center">{card.image.url}</Typography>
  <Divider>
</Divider>

<Divider sx={{
  height: "5px"
}}
style={{ background: '#757575' }}
></Divider>
<Divider>
  </Divider>
    <Typography variant="h6" align="center">Image Url:</Typography>
    <Typography variant="h6" align="center">{card.image.url}</Typography>
  <Divider>
</Divider>

<Divider sx={{
  height: "5px"
}}
style={{ background: '#757575' }}
></Divider>
<Divider>
  </Divider>
    <Typography variant="h6" align="center">Image Alt:</Typography>
    <Typography variant="h6" align="center">{card.image.alt}</Typography>
  <Divider>
</Divider>

<Divider sx={{
  height: "5px"
}}
style={{ background: '#757575' }}
></Divider>
<Divider>
  </Divider>
    <Typography variant="h6" align="center">State:</Typography>
    <Typography variant="h6" align="center">{card.address.state}</Typography>
  <Divider>
</Divider>

<Divider sx={{
  height: "5px"
}}
style={{ background: '#757575' }}
></Divider>
<Divider>
  </Divider>
    <Typography variant="h6" align="center">Country:</Typography>
    <Typography variant="h6" align="center">{card.address.country}</Typography>
  <Divider>
</Divider>

<Divider sx={{
  height: "5px"
}}
style={{ background: '#757575' }}
></Divider>
<Divider>
  </Divider>
    <Typography variant="h6" align="center">City:</Typography>
    <Typography variant="h6" align="center">{card.address.city}</Typography>
  <Divider>
</Divider>

<Divider sx={{
  height: "5px"
}}
style={{ background: '#757575' }}
></Divider>
<Divider>
  </Divider>
    <Typography variant="h6" align="center">Street:</Typography>
    <Typography variant="h6" align="center">{card.address.street}</Typography>
  <Divider>
</Divider>

<Divider sx={{
  height: "5px"
}}
style={{ background: '#757575' }}
></Divider>
<Divider>
  </Divider>
    <Typography variant="h6" align="center">House number:</Typography>
    <Typography variant="h6" align="center">{card.address.houseNumber}</Typography>
  <Divider>
</Divider>

<Divider sx={{
  height: "5px"
}}
style={{ background: '#757575' }}
></Divider>
<Divider>
  </Divider>
    <Typography variant="h6" align="center">Zip:</Typography>
    <Typography variant="h6" align="center">{card.address.zip}</Typography>
  <Divider></Divider>
</Container>
);}}
export default React.memo(CardFullDetailsPage);
