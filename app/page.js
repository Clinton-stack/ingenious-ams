import BarChart from "@/components/BarChart";
import DonutChart from "@/components/DonutChart";
import GaugeChart from "@/components/GuageChart";
import MultiLevelDoughnutChart from "@/components/MultiDonutChart";
import TableChart from "@/components/TableChart";
import { Box, Button, Flex, HStack, Image, Select, Spacer, Stack, Text, VStack, Wrap } from "@chakra-ui/react";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaUserAlt, FaUsers, FaUserSecret } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Dashboard = () => {
  const boxStyles = {
    borderRadius: "12px",
    h: "47px",
    w: "187px",
    alignItems: "center",
  };
  const iconCircle = {
    border: "2px solid white",
    borderRadius: "50%",
    padding: "5px",
    marginLeft: "15px",
    marginRight: "10px",
  };


  return (
    <main>
      <Box bgColor="white" mt="20px" p="10px" borderRadius="5px">
        <Text as="h3" size="sm" fontWeight="bold">
          Admin Dashboard
        </Text>
        <Wrap spacing="15px">
          <Flex sx={boxStyles} bgGradient="linear(to-tr, #F4D126, #FBED3D)">
            <Box sx={iconCircle}>
              <FaUserAlt className="dashboard-icons" />
            </Box>
            <Text color="white" lineHeight="15px">
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                24500
              </span>
              <br />
              <span style={{ fontSize: "13px" }}>All Users</span>
            </Text>
          </Flex>

          <Flex sx={boxStyles} bgGradient="linear(to-tr, #FE4B4B, #FE6F6F)">
            <Box sx={iconCircle}>
              <Image src="icons/assets-icon.svg" boxSize="20px" alt='Assets icon' />
            </Box>
            <Text color="white" lineHeight="15px">
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>823</span>
              <br />
              <span style={{ fontSize: "13px" }}>Assets</span>
            </Text>
          </Flex>

          <Flex sx={boxStyles} bgGradient="linear(to-tr, #4B9EDF, #7ADBF3)">
            <Box sx={iconCircle}>
              <Image src="icons/assets-manager-icon.svg" boxSize="20px" alt="assest manager icon" />
            </Box>
            <Text color="white" lineHeight="15px">
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>200</span>
              <br />
              <span style={{ fontSize: "13px" }}>Assets Managers</span>
            </Text>
          </Flex>

          <Flex sx={boxStyles} bgGradient="linear(to-tr, #1A535C, #2C8D9D)">
            <Box sx={iconCircle}>
              <Image src="icons/collaborators-icon.svg" boxSize="20px" alt="collaborators " />
            </Box>
            <Text color="white" lineHeight="15px">
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>200</span>
              <br />
              <span style={{ fontSize: "13px" }}>Collaborators</span>
            </Text>
          </Flex>

          <Flex sx={boxStyles} bgGradient="linear(to-tr, #5C1A55, #942A89)">
            <Box sx={iconCircle}>
              <FaUserSecret className="dashboard-icons" />
            </Box>
            <Text color="white" lineHeight="15px">
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>200</span>
              <br />
              <span style={{ fontSize: "13px" }}>Facility Managers</span>
            </Text>
          </Flex>

          <Flex sx={boxStyles} bgGradient="linear(to-tr, #6C6C6C, #AAAAAA)">
            <Box sx={iconCircle}>
              <FaUsers className="dashboard-icons" />
            </Box>
            <Text color="white" lineHeight="15px">
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>200</span>
              <br />
              <span style={{ fontSize: "13px" }}>Consumers</span>
            </Text>
          </Flex>
          <Flex sx={boxStyles} bgGradient="linear(to-tr, #19BE0A, #27E20F)">
            <Box sx={iconCircle}>
              <BsCurrencyDollar className="dashboard-icons" />
            </Box>
            <Text color="white" lineHeight="15px">
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>200</span>
              <br />
              <span style={{ fontSize: "13px" }}>Accounts</span>
            </Text>
          </Flex>
        </Wrap>
      </Box>
      <Flex wrap='wrap' gap={2} mt='20px' w='100%'>
        <Flex direction='column' bgColor='#ffff' p='10px' w={{ base: '100%', md: '100%', lg: '49%' }}
          align={{ base: 'center', md: 'center', lg: 'flex-start' }} >
          <Stack direction="row" w='100%'>
            <Text as="h3" size="sm" fontWeight="bold" mb='10px' >
              Assets
            </Text>
            <Spacer />
            <Select  size='sm' variant='unstyled' w='fit-content' bgColor='gray.200' p='2px'> 
              <option value='Last 30 days'>Last 30 days</option>
              <option value='Last 20 days'>Last 20 days</option>
              <option value='Last 10 days'>Last 10 days</option>
            </Select>
          </Stack>

          <Text fontSize='10px' >
            Top Assets
          </Text>
          <DonutChart />
        </Flex>
        <Flex direction='column' bgColor='#ffff' p='10px' w={{ base: '100%', md: '100%', lg: '49%' }}
          align={{ base: 'center', md: 'center', lg: 'flex-start' }}>
          <Stack direction="row" w='100%'>
            <Text as="h3" size="sm" fontWeight="bold" mb='10px' >
              Assets Managers
            </Text>
            <Spacer />
            <Select  size='sm' variant='unstyled' w='fit-content' bgColor='gray.200' p='2px'> 
              <option value='Last 30 days'>Last 30 days</option>
              <option value='Last 20 days'>Last 20 days</option>
              <option value='Last 10 days'>Last 10 days</option>
            </Select>
          </Stack>
          <Text fontSize='10px' >
            Top Assets Managers
          </Text>
          <BarChart />
        </Flex>
      </Flex>
      <Flex wrap='wrap' gap={2} mt='20px' w='100%'>
        <Flex direction='column' bgColor='#ffff' p='10px' w={{ base: '100%', md: '100%', lg: '49%' }} align={{ base: 'center', md: 'center', lg: 'flex-start' }}>
          <Stack direction="row" w='100%'>
            <Text as="h3" size="sm" fontWeight="bold" mb='10px' >
              Collaborators
            </Text>
            <Spacer />
            <Select  size='sm' variant='unstyled' w='fit-content' bgColor='gray.200' p='2px'> 
              <option value='Last 30 days'>Last 30 days</option>
              <option value='Last 20 days'>Last 20 days</option>
              <option value='Last 10 days'>Last 10 days</option>
            </Select>
          </Stack>

          <GaugeChart />
        </Flex>
        <Flex direction='column' bgColor='#ffff' p='10px' w={{ base: '100%', md: '100%', lg: '49%' }}
          align={{ base: 'center', md: 'center', lg: 'flex-start' }}>
          <Text as="h3" size="sm" fontWeight="bold" mb='10px' >
            Recent Activities
          </Text>
          <TableChart />
        </Flex>
      </Flex>

      <Flex wrap='wrap' gap={2} mt='20px' w='100%'>
        <Flex direction='column' bgColor='#ffff' p='10px' w={{ base: '100%', md: '100%', lg: '49%' }}
          align={{ base: 'center', md: 'center', lg: 'flex-start' }}>
          <Text as="h3" size="sm" fontWeight="bold" mb='10px' >
            Accounts
          </Text>
          <MultiLevelDoughnutChart />
        </Flex>

      </Flex>

    </main>
  );
};

export default Dashboard;
