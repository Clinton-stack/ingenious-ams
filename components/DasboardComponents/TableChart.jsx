import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Box,
  Flex,
  Center,
  Image,
  Stack,
  Text,
  Circle,
} from "@chakra-ui/react";
import React from "react";
import { FaUser } from "react-icons/fa";

export default function TableChart() {
  return (
    <div>
      <TableContainer whiteSpace='break-spaces'>
        <Table variant="simple">
          <Tbody w>
            <Tr>
              <Td>
                <Circle
                  bgColor="#78B7EA"
                  size="40px" 
                >
                  <FaUser color="white" />
                </Circle>
              </Td>
              <Td>
                <Stack>
                  <Text>
                    Amaka Vibes renewed their network subscription for 1 year.
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    2 hours ago
                  </Text>
                </Stack>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Circle
                  bgColor="#78B7EA"
                  size="40px" 
                >
                  <Image
                    src="images/ingenious.png"
                    h="30px"
                    w="auto"
                    alt="Company or user logo"
                  />
                </Circle>
              </Td>
              <Td>
                <Stack>
                  <Text>Orlando Properties was added by Clinton Emenari</Text>
                  <Text fontSize="sm" color="gray.500">
                    2 hours ago
                  </Text>
                </Stack>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Circle
                  bgColor="#78B7EA"
                  size="40px"
                >
                  <Image
                    src="images/ingenious.png"
                    h="30px"
                    w="auto"
                    alt="Company or user logo"
                  />
                </Circle>
              </Td>
              <Td>
                <Stack>
                  <Text>Scopeland Buildings was added by Omada Timothy</Text>
                  <Text fontSize="sm" color="gray.500">
                    2 hours ago
                  </Text>
                </Stack>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
