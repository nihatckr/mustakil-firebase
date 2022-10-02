import NextLink from "next/link";
import NextImage from "next/image";
import { VStack, Box, Heading, Text, Link, Flex, Icon } from "@chakra-ui/react";

const CircleIcon = (props) => (
  <Icon viewBox={props.viewBox} {...props}>
    <path fill={props.fillColor} d={props.d} />
  </Icon>
);
const HomeSlider = ({ currentImage, index, nextImage, previousImage }) => {
  console.log(currentImage);
  return (
    <VStack>
      {currentImage.map((image, imageIndex) => {
        const { id, largeURL, title, services, content, subtitle } = image;

        let opacity = 0;
        let transform = "0";

        if (imageIndex === index) {
          opacity = 1;
        }
        if (
          imageIndex === index - 1 ||
          (index === 0 && imageIndex === currentImage.length - 1)
        ) {
          transform = "100%";
        }
        if (
          imageIndex === index + 1 ||
          (index === 0 && imageIndex === currentImage.length + 1)
        ) {
          transform = "-100%";
        }
        return (
          <Flex
            top={0}
            left={0}
            right={0}
            bottom={0}
            position={"absolute"}
            key={id}
            opacity={opacity}
            transition={"all 0.8s ease-in-out"}
            transform={`translateX(${transform})`}
          >
            <VStack flexDir={"column"}>
              <NextImage
                src={`/images/slider/${largeURL}.png`}
                alt={title}
                layout='fill'
                height={"100%"}
                width={"100%"}
                objectFit='contain'
                transition='all 0.9s ease-in-out'
              />
            </VStack>
            <VStack>
              <Heading>
                <span />
                {services}
              </Heading>
              <Heading>
                {title}
                <br />
                {subtitle}
              </Heading>
              <Text>{content}</Text>

              <Link as={NextLink} href='/projects'>
                All Project
              </Link>
            </VStack>
          </Flex>
        );
      })}

      <VStack position={"absolute"} bottom={0} right={"0"} zIndex={1}>
        <Flex
          flexDir={"row"}
          width={"60px"}
          justifyContent={"center"}
          marginBottom={"10px"}
        >
          <Icon onClick={previousImage} boxSize={22}>
            <CircleIcon
              viewBox={"0 0 256 512"}
              fillColor={"#2D3748"}
              d={
                "M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"
              }
            />
          </Icon>
          <Icon onClick={nextImage} boxSize={22}>
            <CircleIcon
              viewBox={"0 0 256 512"}
              fillColor={"#2D3748"}
              d={
                "M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
              }
            />
          </Icon>
        </Flex>
      </VStack>
      <Box
        height={"full"}
        w={"60px"}
        bgColor={"white"}
        position={"absolute"}
        bottom={0}
        right={0}
        zIndex={0}
      />
    </VStack>
  );
};

export default HomeSlider;
