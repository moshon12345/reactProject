import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./routesModel";
import CardsPage from "../cards/pages/CardsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import SignUpPage from "../users/pages/SignUpPage";
import Sandbox from "../sandbox/Sandbox";
import LoginPage from "../users/pages/LoginPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import Loops from "../sandbox/loops/Loops";
import UseState from "../sandbox/hooks/useState/UseState";
import SANDBOX_ROUTES from "./sandboxRoutesModel";
import LifeCycleHooks from "../sandbox/lifeCycleHooks/LifeCycleHooks";
import UseCounter from "../sandbox/useCounter/UseCounter";
import UseCallBackComp from "../sandbox/memozation/UseCallBackComp";
import A from "../sandbox/use-context/exeTwo/components/A";
import FormTest from "../sandbox/forms/FormTest";
import MyCardsPage from "../cards/pages/MyCardsPage";
import CreateCardPage from "../cards/pages/CreateCardPage";
import CardEditPage from "../cards/pages/CardEditPage";
import UpdateCardPage from "../cards/pages/UpdateCardPage";
import CardsPageSearch from "../cards/pages/CardsPageSearch";
import CardFullDetailsPage from "../cards/components/CardFullDetailsPage";
import CardsFavoritePage from "../cards/pages/CardsFavoritePage";
import FormForEditUser from "../forms/components/FormForEditUserPage";
import FormForEditUserPage from "../forms/components/FormForEditUserPage";
import UsersPage from "../users/pages/UsersPage";
// import GoogleMap from "../googleMaps/googleMaps";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.MAY_CARDS} element={<MyCardsPage />} />
      <Route path={ROUTES.CREATE_CARD} element={<CreateCardPage />} />
      <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailsPage />} />
      {/* <Route path={`${ROUTES.CARDS_EDITS}/:id`} element={<CardEditPage />} /> */}
      <Route path={`${ROUTES.CARDS_EDITS}/:id`} element={<UpdateCardPage />} />
      <Route path={`${ROUTES.CARD_FULL_DETAILS}/:id`} element={<CardFullDetailsPage />} />
      {/* <Route path={ROUTES.CARD_FULL_DETAILS} element={<CardFullDetailsPage />} /> */}
      <Route path={`${ROUTES.CARDS_SEARCH}/:id`} element={<CardsPageSearch />} />
      <Route path={`${ROUTES.CARDS_SEARCH}`} element={<CardsPage />} />
      <Route path={`${ROUTES.FAV_CARDS}`} element={<CardsFavoritePage />} />
      <Route path={`${ROUTES.USER_EDIT}/:id`} element={<FormForEditUserPage />} />
      <Route path={ROUTES.USER_EDIT} element={<FormForEditUserPage />} />
      <Route path={`${ROUTES.USERS_PAGE}`} element={<UsersPage />} />

      <Route path={ROUTES.SANDBOX} element={<Sandbox />}>
        <Route path={SANDBOX_ROUTES.LOOPS} element={<Loops />} />
        <Route path={SANDBOX_ROUTES.USE_STATE} element={<UseState />} />
        <Route path={SANDBOX_ROUTES.HOOKS} element={<LifeCycleHooks />} />
        <Route path={SANDBOX_ROUTES.USE_COUNTER} element={<UseCounter />} />
        <Route path={SANDBOX_ROUTES.USE_CALLBACK_BTN} element={<UseCallBackComp />} />
        <Route path={SANDBOX_ROUTES.USE_CONTEXT} element={<A />} />
        <Route path={SANDBOX_ROUTES.FORMS} element={<FormTest />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
