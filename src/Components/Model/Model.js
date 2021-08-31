// import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useSelector } from "react-redux";

const Model = ({ modal, toggle }) => {
  const data = useSelector((state) => state.search);
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className="headmine">
          page ID: {data.pageId} <br />
          Title: {data.title}
        </ModalHeader>

        <ModalBody>{data.para}</ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            onClick={() => {
              toggle();
            }}
          >
            close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Model;
