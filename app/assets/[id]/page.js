import { Box, Flex, Grid, GridItem, HStack, Image, Select, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaStar, FaHandshake, FaUsers, FaUserSecret } from 'react-icons/fa'
import { IoLocationSharp } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { FcBusinessman } from "react-icons/fc";
import PieChart from '@/components/AssetsComponents/PieChart';



const icons = {
  color: '#6C6C6C',
  width: '15px',
  height: '15px',
}


export default function page() {
  return (
    <div>
      <Grid templateColumns={{ sm: '1fr', md: '1fr', lg: 'repeat(3, 1fr)' }}
        w='100%' bg='#fff' p='10px' borderRadius='5px' mt='10px'  gap={4}>
        <GridItem colSpan={{ sm: 1, md: 1, lg: 2 }}>
          <HStack spacing={5} wrap='wrap' align='center'h='100%'>
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
            <PieChart />
          </Box>
        </GridItem>

      </Grid>
    </div>
  )
}
