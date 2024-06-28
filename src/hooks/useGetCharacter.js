import { useState } from "react";

const useGetCharacter = () => {
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  function handleCloseModal() {
    setOpen(false);
    setSelectedData(null);
  }

  function handleOpenModal(data) {
    setOpen(true);
    setSelectedData(data);
  }

  return { handleCloseModal, handleOpenModal, open, selectedData };
};

export default useGetCharacter;
