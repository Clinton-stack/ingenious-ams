'use client'
import { Box, Center, Flex, Grid, GridItem, HStack, Image, Select, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React, { useMemo } from 'react'
import { FaStar, FaHandshake, FaUsers, FaUserSecret } from 'react-icons/fa'
import { IoLocationSharp } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { FcBusinessman } from "react-icons/fc";
import PieChart from '@/components/AssetsComponents/PieChart';
import LineChart from '@/components/AssetsComponents/LineChart';
import BarChart from '@/components/DasboardComponents/BarChart';
import consumer from '../../../data/consumer.json'
import collaborators from '../../../data/assets_data.json'
import BasicTable from '@/components/usersComponents/BasicTable';
import TableChart from '@/components/DasboardComponents/TableChart';

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


export default function Asset() {
  const data = useMemo(() => consumer, [])
    /** @type import('@tanstack/react-table).ColumnDef<any>*/
    const columns = [
      {
        header: "ID",
        accessorKey: "id",
      },
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Unit Number",
        accessorKey: "unit_number",
      },
      {
        header: "Unit Value",
        accessorKey: "unit_value",
      },
      {
        header: "Status",
        accessorKey: "status",
      },
      {
        header: "Type of occupancy",
        accessorKey: "type_of_occupancy",
      }
    ];
    const data1 = useMemo(() => collaborators, [])
  /** @type import('@tanstack/react-table).ColumnDef<any>*/
  const columns1 = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Service Type",
      accessorKey: "type",
    },
  
  ];

  return (
    <div>
      <Grid templateAreas={{
        base: `"header header"
          "income income"
        "chart chart"
        "consumers consumers"
        "recent recent "
        "collaborators collaborators"
        "network network"`,
        lg: `"header header"
          "income chart"
        "consumers chart"
        "consumers recent"
        "collaborators recent"
        "network network"`
      }}
        templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
        templateRows='auto'
        gap={3}
        mt='10px'
        w='100%'
        overflowX='auto'
      >
        <GridItem borderRadius='5px' bgColor='#fff' p='10px' area='header'>
          <HStack spacing={5} wrap='wrap' align='center' justify='space-between'>
            <HStack spacing={5} wrap='wrap' align='center' >
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
            <Box >
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
          </HStack>


        </GridItem>
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
          <Box w='100%' h='100%'>
            <LineChart />
          </Box>
        </GridItem>

        <GridItem borderRadius='5px' bgColor='#fff' p='10px' area='consumers'>
          <Text fontSize='14px' as='h3'>Consumers List </Text>

          <Box w='100%' h='100%'>
            <BasicTable data={data} columns={columns} />
          </Box>
        </GridItem>

        <GridItem borderRadius='5px' bgColor='#fff' p='10px' area='recent'>
          <Text fontSize='14px' as='h3'>Recent Activities </Text>

          <Box w='100%' h='100%'>
            <TableChart/>
          </Box>
        </GridItem>

        <GridItem borderRadius='5px' bgColor='#fff' p='10px' area='collaborators'>
          <Text fontSize='14px' as='h3'>Collaborators </Text>

          <Box w='100%' h='100%'>
            <BasicTable data={data1} columns={columns1}/>
          </Box>
        </GridItem>
        <GridItem borderRadius='5px' bgColor='#fff' p='10px' area='network'>
          <Text fontSize='14px' as='h3'>Networks </Text>

          <Box w='100%' h='100%'>
            <Text>Type of Connection: Fibre</Text>
            <Text>Download: 60bps</Text>
            <Text>Upload: 70bps</Text>
          </Box>
        </GridItem>

      </Grid>
    </div>
  )
}
