import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedImage: string | null;
}

export const ProductModal = ({
  isOpen,
  onClose,
  selectedImage,
}: ProductModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full" isCentered>
      <ModalOverlay />
      <ModalContent bg="blackAlpha.900">
        <ModalCloseButton
          position="absolute"
          top={10}
          right={5}
          color="white"
          zIndex={10}
        />
        <ModalBody display="flex" justifyContent="center" alignItems="center">
          {selectedImage && (
            <Box
              position="relative"
              w="100%"
              h="100vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src={selectedImage}
                alt="Enlarged Product"
                style={{ objectFit: "contain" }}
                fill
              />
            </Box>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
