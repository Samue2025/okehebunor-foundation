"use client"
import React, { useState, useContext} from "react";

const ModalContext = React.createContext();

const AppProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setSelectedTeamMember(null);
    setModalOpen(false);
  };

  const isModalClose = () => {
    setShowModal(false);
  };

  const isModalOpen = () => {
    setShowModal(true);
  };
  return <ModalContext.Provider value={{ modalOpen, isModalClose, isModalOpen, showModal }}>{children}</ModalContext.Provider>;
};
// Custom Hook
export const useGlobalContext = () => {
  return useContext(ModalContext);
};

export { ModalContext, AppProvider };
