import {
  Avatar,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { BiLogOut } from "react-icons/bi";
import { RiNotification4Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";


export default function Navbar() {
  return (
    <div>
      <Stack
        direction="row"
        h="40px"
        bgColor="#FFFFFF"
        boxShadow="5px 5px 5px"
        pl="20px"
        display="flex"
        alignItems="center"
        spacing={7}
        pr="20px"
        justifyContent="space-between"
      >
        <Heading as="h3" size="xs">
          Hello Obi
        </Heading>
        <InputGroup size="xs" maxW="600px" ml="auto" mr="auto">
          <InputLeftElement pointerEvents="none">
            <CiSearch color="gray.300"  />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search"
            borderRadius="20px"
            bg="#F5F5F5"
          />
        </InputGroup>
        <Stack direction="row" alignItems="center">
          <IconButton
            variant="unstyled"
            className="navIcons"
            aria-label="Notification"
            icon={<RiNotification4Line />}
          />
          <Avatar size="xs" />
          <IconButton
            variant="unstyled"
            className="navIcons"
            aria-label="Logout"
            icon={<BiLogOut />}
          />
        </Stack>
      </Stack>
    </div>
  );
}
