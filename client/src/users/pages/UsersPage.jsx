import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { UserProvider, useUser } from "../providers/UserProvider";
import useForm from "../../forms/hooks/useForm";
import useUsers from "./../hooks/useUsers";
import signUpSchema from "../models/joi-schema/signUpSchema";
import UserForm from "../components/UserForm";
import initialSignUpForm from "../helpers/initial-forms/initialSignUpForm";
import PageHeader from "../../components/PageHeader";
import {useNavigate} from 'react-router-dom';
import {useSnack} from '..//..//..//src//providers//SnackbarProvider';

const UsersPage = () => {


const {setSnack} = useSnack ();
  const { user } = useUser();
  const { handleGetUsers, users } = useUsers();
  const { handleIsBusinessUser, handleDeleteUser } = useUsers();
  const[render, setRender] = useState("null"); 
  const { id } = useParams();
  const navigate = useNavigate ();

 const ChangeIsBusiness = (userID) => {
    handleIsBusinessUser(userID)
    window.location.reload(false);
}


 const DeleteUser = (userID) => {
    handleDeleteUser(userID)
    localStorage.setItem("IsDeleted", "YES");
    window.location.reload(false);
}

  useEffect(() => {
    if(localStorage.getItem("IsUpdated")) {
        setSnack ('success', 'User IsBusiness been updated');
        localStorage.removeItem("IsUpdated");
    }
    else if(localStorage.getItem("IsDeleted")) {
        setSnack ('success', 'User has been deleted');
        localStorage.removeItem("IsDeleted");
    }
    handleGetUsers()
  }, []);
  

  if (users) {
    return (
<Container>
<PageHeader
        title="Users Page"
        subtitle="On this page you can find all the users mr admin"
      />
        <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">First Name:</TableCell>
              <TableCell align="left">Last Name:</TableCell>
              <TableCell align="left">Email:</TableCell>
              <TableCell align="left">Phone:</TableCell>
              <TableCell align="left">Country:</TableCell>
              <TableCell align="left">City:</TableCell>
              <TableCell align="left">Zip:</TableCell>
              <TableCell align="left">IsBusiness (Click To Change Status)</TableCell>
              <TableCell align="left">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(
                (user) => (
              <TableRow
                hover={true}
                key={user._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{user.name.first}</TableCell>
                <TableCell align="left">{user.name.last}</TableCell>
                <TableCell align="left">{user.email}</TableCell>
                <TableCell align="left">{user.phone}</TableCell>
                <TableCell align="left">{user.address.country}</TableCell>
                <TableCell align="left">{user.address.city}</TableCell>
                <TableCell align="left">{user.address.zip}</TableCell>
                <TableCell align="left" variant="head">

                {!user.isAdmin && (
                <Button 
                variant="contained" 
                href="#contained-buttons"
                onClick={() => {
                    // setSnack ('success', 'User IsBusiness been updated');
                    ChangeIsBusiness(user._id, user.isBusiness)}}
                >
                {`${user.isBusiness}`}
                </Button>
                )}
                </TableCell>
                <TableCell  align="left" variant="head">
                {!user.isAdmin && (
               <Button 
               onClick={() => {
                // setSnack ('success', 'User has been deleted');
                DeleteUser(user._id)}
            }
               variant="contained" 
               color="error">Delete
               </Button>
             )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
</Container>
      );
};
}

export default UsersPage;


