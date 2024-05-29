'use client';
import { Box, Flex, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React, { useMemo, useState, useEffect } from 'react'
import assets_data from '../../data/assets_data.json'
import BasicTable from '@/components/usersComponents/BasicTable'
import dynamic from 'next/dynamic'
import { geoLocation } from '../../utils/geoLocation';
const MapComponent = dynamic(() => import('@/components/AssetsComponents/MapComponent'), { ssr: false });

export default function Assets() {
    const data = useMemo(() => assets_data, [])

    const [mounted, setMounted] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [coordinates, setCoordinates] = useState([9.077751, 8.6774567]); // Default coordinates
    useEffect(() => {
      setMounted(true);
    }, []);

    useEffect(() => {
      if (selectedRow && selectedRow.location) {
        geoLocation(selectedRow.location)
          .then(coords => {
            setCoordinates(coords);
          })
          .catch(error => {
            console.error("Error fetching coordinates:", error);
            setCoordinates([51.505, -0.09]); // Fallback coordinates
          });
      }
    }, [selectedRow]);
  
    if (!mounted) {
      return null;
    }
  

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
      header: "Type",
      accessorKey: "type",
    },
    {
      header: "Location",
      accessorKey: "location",
    },
    {
      header: "Consumers",
      accessorKey: "consumers",
    },
    {
      header: "Assets Manager",
      accessorKey: "assets_manager",
    }
  ];
  return (
    <Flex gap={2} wrap='wrap'>
        <Box w={{base: '100%', md: '100%', lg:'60%'}}>
            <BasicTable data={data} columns={columns} tableName="Assets" onRowSelect={setSelectedRow}/>
        </Box>
        <VStack w={{base: '100%', md: '100%', lg:'37%'}} mt='10px' >
            <Box h='500px' w='100%' bg='#fff' p='10px' borderRadius='2px'>
                <MapComponent coordinates={coordinates}/>
            </Box>
            {selectedRow && (
                <HStack bg='#fff' p='10px' w='100%'>
                <Image src='/images/victoriafalls.png' alt={selectedRow?.name} w='103px' borderRadius='2px'/>
                <Box mr='10px' borderRight='1px solid #D8D8D8' pr='3px'>
                  <Heading as='h3' fontSize='14px'>{selectedRow?.name}</Heading>
                  <Text fontSize='10px' mb='2px'>{selectedRow?.location}</Text>
                  <Text fontSize='10px'> <b>Assets Manager: </b> {selectedRow?.assets_manager}</Text>
                </Box>
                <Box>
                  <Text fontSize='10px'> <b>Consumer: </b> {selectedRow?.consumers}</Text>
                  <Text fontSize='10px'> <b>Type: </b> {selectedRow?.type}</Text>
                  <Text fontSize='10px'> <b>Facility Manager: </b> {selectedRow?.name}</Text>
                  <Text fontSize='10px'> <b>Total Earnings: </b> {selectedRow?.type}</Text>
                </Box>
            </HStack>
            )}
          
            <Box bg='#fff' p='10px' w='100%'>
              <HStack mb={'5px'}>
              <Heading as='h3' fontSize='14px'>Earnings</Heading>
              <Text  fontSize='10px'> Mar. 20233 - Mar. 2023</Text>
              </HStack>
              <HStack  w='100%' spacing='40px'>
                <VStack spacing={0}>
                <Text fontSize='10px'> Avg. Monthly Income Earnings: </Text>
                <Text as='h3' fontSize='15px'>$87,000</Text>
                </VStack>
                <VStack spacing={0}>
                <Text fontSize='10px'> Total Expenses: </Text>
                <Text as='h3' fontSize='15px'>$230,200</Text>
                </VStack>
                <VStack spacing={0}>
                <Text fontSize='10px'> Total Income: </Text>
                <Text as='h3' fontSize='15'>$901,200</Text>
                </VStack>
              </HStack>
            </Box>
            <Box>

            </Box>

        </VStack>

    </Flex>
  )
}
