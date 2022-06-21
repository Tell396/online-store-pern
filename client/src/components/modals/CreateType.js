import React from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input
} from '@chakra-ui/react';

const CreateType = ({ show, onHide }) => {
  const finalRef = React.useRef(null)

  return (
    <div>
      <Modal isOpen={show} onClose={onHide} finalFocusRef={finalRef}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Добавить тип</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder={'Введите название типа'} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onHide}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreateType;
