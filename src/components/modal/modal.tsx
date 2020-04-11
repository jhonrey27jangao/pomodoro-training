import React from "react";
import styled from "styled-components";

type ModalProps = {
  onClose?: any;
  modalTitle?: string;
  children?: any;
  width?: number;
};

const StyledModal = styled.div<ModalProps>`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  z-index: 4;
`;

const ModalContent = styled.div<ModalProps>`
  color: #333;
  border-radius: 20px;
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: ${(props) => props.width || "700"}px;
`;

const CloseButton = styled.div`
  position: absolute;
  cursor: pointer;
  top: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  font-weight: 700;
  font-family: arial;
  font-size: 10px;
  background: #333;
  text-align: center;
  color: #fff;
  border-radius: 100%;
  padding: 5px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const renderModal = ({ onClose, modalTitle, width, children }: ModalProps) => {
  return (
    <StyledModal onClose={onClose} modalTitle={modalTitle} width={width}>
      <ModalContent width={width}>
        <h2
          style={{
            textAlign: "center",
            fontWeight: "bold",
            margin: "2px",
          }}
        >
          {modalTitle}
        </h2>
        {children}
        <CloseButton onClick={onClose}>X</CloseButton>
      </ModalContent>
    </StyledModal>
  );
};

export const Modal: React.FC<ModalProps> = ({
  onClose,
  modalTitle,
  children,
  width,
}) => {
  return (
    <>
      {renderModal({
        onClose,
        modalTitle,
        width,
        children,
      })}
    </>
  );
};
