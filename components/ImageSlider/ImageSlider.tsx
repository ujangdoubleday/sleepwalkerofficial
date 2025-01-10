import React, { useState } from "react";
import Image from "next/image";
import { 
  Box, 
  IconButton, 
  HStack 
} from "@/lib/ui";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface ImageSliderProps {
  images: string[];
  alt: string;
  onImageClick: (image: string) => void;
}

export function ImageSlider({ images, alt, onImageClick }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <Box position="relative" w="100%" h="500px">
      <Box
        position="relative"
        w="100%"
        h="100%"
        cursor="pointer"
        onClick={() => onImageClick(images[currentIndex])}
      >
        <Image
          alt={`${alt} - ${currentIndex + 1}`}
          src={images[currentIndex]}
          layout="fill"
          objectFit="cover"
        />
      </Box>

      <HStack
        position="absolute"
        bottom={4}
        left="50%"
        transform="translateX(-50%)"
        spacing={2}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            w="8px"
            h="8px"
            borderRadius="full"
            bg={currentIndex === index ? "white" : "whiteAlpha.500"}
          />
        ))}
      </HStack>

      <IconButton
        aria-label="Previous image"
        icon={<ChevronLeftIcon />}
        position="absolute"
        left={2}
        top="50%"
        transform="translateY(-50%)"
        onClick={handlePrevious}
        colorScheme="blackAlpha"
        size="sm"
        isRound
      />

      <IconButton
        aria-label="Next image"
        icon={<ChevronRightIcon />}
        position="absolute"
        right={2}
        top="50%"
        transform="translateY(-50%)"
        onClick={handleNext}
        colorScheme="blackAlpha"
        size="sm"
        isRound
      />
    </Box>
  );
}
