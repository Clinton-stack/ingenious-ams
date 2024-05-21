import {
    Grid,
    GridItem,
    Heading,
    Image, VStack
  } from "@chakra-ui/react";
  import LoginForm from "../../components/LoginForm";
  
  
  export default function Login() {
    
    return (
      <>
        <Grid h="100vh" templateColumns="repeat(5, 1fr)" bg="#5DADEC" overflow='hidden'>
          <GridItem colSpan={{base: 1, md:2, lg: 2 }} h="100%">
            <VStack align="left" spacing={30} h="100%" m="20px">
              <Image
                src="/images/ingenious.png"
                alt="INGENIOUS"
                boxSize="65px"
                h= 'auto'
              ></Image>
              <Image
                src="/images/city-image.png"
                alt="Building image"
                boxSize={{ base: "200px", md: "420px", lg: "600px" }}
                position="absolute"
                top="50%"
                left={{ base: "15%", md: "30%" }}
                transform="translate(-50%, -50%)"
                zIndex={0}
                display={{ base: "none", md: "block" }}
              ></Image>
            </VStack>
          </GridItem>
          <GridItem
            colSpan={{base: 4, md:3, lg: 3 }}
            h="100%"
            bg="#D8EFFD"
            bgImage='url(images/stars3.png)'
            bgRepeat='no-repeat'
            bgPos='center'
            borderRadius="40px 0 0 40px"
            borderLeft='1px solid #85B5E7'
          >
            <VStack  spacing={200} m='20px' h="100%"  >
            <Heading as='h3' size='md'>Asset Management System </Heading>
            <LoginForm />
            </VStack>
            
          </GridItem>
        </Grid>
      </>
    );
  }
  