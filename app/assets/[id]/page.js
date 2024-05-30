import { Box, Center, Flex, Grid, GridItem, HStack, Image, Select, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaStar, FaHandshake, FaUsers, FaUserSecret } from 'react-icons/fa'
import { IoLocationSharp } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { FcBusinessman } from "react-icons/fc";
import PieChart from '@/components/AssetsComponents/PieChart';
import LineChart from '@/components/AssetsComponents/LineChart';
import BarChart from '@/components/DasboardComponents/BarChart';



const icons = {
  color: '#6C6C6C',
  width: '15px',
  height: '15px',
}
const incomePills = {
  borderRadius: '5px',
  height: '60px',
  width: '180px'
}


export default function page() {
  return (
    <div>
      <Grid templateColumns={{ sm: '1fr', md: '1fr', lg: 'repeat(3, 1fr)' }}
        w='100%' bg='#fff' p='10px' borderRadius='5px' mt='10px' gap={4}>
        <GridItem colSpan={{ sm: 1, md: 1, lg: 2 }}>
          <HStack spacing={5} wrap='wrap' align='center' h='100%'>
            <Image src="/images/victoriafalls.png" alt='Victoria falls' w={{ sm: '200px', md: '300px' }} h='auto' />
            <Box lineHeight={5} >
              <Text as='h3' fontSize='14px'> Victoria falls Estate IN103</Text>
              <HStack spacing={0} mb='5px'>
                <FaStar color='#EDCC1C' />
                <FaStar color='#EDCC1C' />
                <FaStar color='#EDCC1C' />
                <FaStar color='#EDCC1C' />
                <FaStar color='#EDCC1C' />
              </HStack>
              <HStack>
                <IoLocationSharp className='assets_icons' />
                <Text fontSize='10px'>Plot No. 17, Moshono Ward, Harare City, Harare Region, Zimbabwe.</Text>
              </HStack>
              <HStack>
                <FaUserSecret className='assets_icons' />
                <Text fontSize='10px'> <b>Asset Manager:</b> Serena Hotels</Text>
              </HStack>
              <HStack>
                <FaUsers className='assets_icons' />
                <Text fontSize='10px'><b>Consumers:</b> 0200</Text>
              </HStack>
              <HStack>
                <FcBusinessman className='assets_icons' />
                <Text fontSize='10px'><b>Facility Manager:</b>  Ablem Ablem M. </Text>
              </HStack>
              <HStack>
                <FaHandshake className='assets_icons' />
                <Text fontSize='10px'><b>Collaborators:</b>  0023 </Text>
              </HStack>
              <HStack>
                <BsCurrencyDollar className='assets_icons' />
                <Text fontSize='10px'><b>Total Earnings:</b>  $3,000,000 </Text>
              </HStack>
            </Box>
          </HStack>
        </GridItem>

        <GridItem colSpan={1}>
          <Box w='100%'>
            <Flex justify='space-between' wrap='wrap'>
              <Text fontSize='14px' as='h3' wordBreak='break-word' >Total Income Generated from Collaborators </Text>
              <Select size='sm' variant='unstyled' w='fit-content' bgColor='gray.200' p='2px'>
                <option value='Last 30 days'>Last 30 days</option>
                <option value='Last 20 days'>Last 20 days</option>
                <option value='Last 10 days'>Last 10 days</option>
              </Select>
            </Flex>
            <Box w='100%'>
              <PieChart />
            </Box>
          </Box>
        </GridItem>
      </Grid>
      
      <Grid
        templateAreas={{
          base: `"income income"
        "chart chart"
        "consumers consumers"
        "recent recent "
        "collaborators collaborators"
        "Network Network"`,
          lg: `"income chart"
        "consumers chart"
        "consumers recent"
        "collaborators recent"
        "network network"`
        }}
        templateColumns={{base: '1fr', lg: 'repeat(2, 1fr)'}}
        templateRows='auto'
        gap={3}
        mt='10px'
        w='100%'
      >
        <GridItem borderRadius='5px' bgColor='#fff' p='10px' area='income'>
          <Flex justify='space-between' wrap='wrap' w='100%'>
            <Text fontSize='14px' as='h3'  >Income </Text>
            <Select size='sm' variant='unstyled' w='fit-content' bgColor='gray.200' p='2px'>
              <option value='Last 30 days'>Last 30 days</option>
              <option value='Last 20 days'>Last 20 days</option>
              <option value='Last 10 days'>Last 10 days</option>
            </Select>
          </Flex>
          <Flex mt='10px' justify='space-between' wrap='wrap' gap={2}>
            <Center flexDirection='column' bgGradient="linear(to-tr, #F4D126, #FBED3D)" sx={incomePills}>
              <Text fontSize='11px' color='#fff'> Total Income Generated</Text>
              <Text fontSize='18px' color='#fff' fontWeight='600'> $30,000,000</Text>
            </Center>
            <Center flexDirection='column' bgGradient="linear(to-tr, #FE4B4B, #FE6F6F)" sx={incomePills}>
              <Text fontSize='11px' color='#fff'> Total Running Cost</Text>
              <Text fontSize='18px' color='#fff' fontWeight='600'> $8,000,000</Text>
            </Center>
            <Center flexDirection='column' bgGradient="linear(to-tr, #4B9EDF, #7ADBF3)" sx={incomePills}>
              <Text fontSize='11px' color='#fff'> Total Profit</Text>
              <Text fontSize='18px' color='#fff' fontWeight='600'> $12,000,000</Text>
            </Center>
          </Flex>
        </GridItem>
        <GridItem borderRadius='5px' bgColor='#fff' p='10px' area='chart'>
        <Flex justify='space-between' wrap='wrap'>
              <Text fontSize='14px' as='h3' wordBreak='break-word' >Income Generated Vs Running Cost</Text>
              <Select size='sm' variant='unstyled' w='fit-content' bgColor='gray.200' p='2px'>
                <option value='Last 30 days'>Last 30 days</option>
                <option value='Last 20 days'>Last 20 days</option>
                <option value='Last 10 days'>Last 10 days</option>
              </Select>
            </Flex>
            <Box w='100%'>
              <BarChart />
            </Box>
        </GridItem>

        <GridItem borderRadius='5px' bgColor='#fff' p='10px' area='consumers'>
          <Flex justify='space-between' wrap='wrap'>
            <Text fontSize='14px' as='h3'>Consumers List </Text>
            <Select size='sm' variant='unstyled' w='fit-content' bgColor='gray.200' p='2px'>
              <option value='Last 30 days'>Last 30 days</option>
              <option value='Last 20 days'>Last 20 days</option>
              <option value='Last 10 days'>Last 10 days</option>
            </Select>
          </Flex>
          <BarChart/>
        </GridItem>

      </Grid>
    </div>
  )
}
