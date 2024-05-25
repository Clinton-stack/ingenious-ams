'use client';
import { Box, Flex, VStack } from '@chakra-ui/react'
import React, { useMemo, useState, useEffect } from 'react'
import assets_data from '../../data/assets_data.json'
import BasicTable from '@/components/usersComponents/BasicTable'
import dynamic from 'next/dynamic'
const MapComponent = dynamic(() => import('@/components/AssetsComponents/MapComponent'), { ssr: false });

export default function Assets() {
    const data = useMemo(() => assets_data, [])
    const position = [51.505, -0.09]

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);
  
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
            <BasicTable data={data} columns={columns} tableName="Assets"/>
        </Box>
        <VStack w={{base: '100%', md: '100%', lg:'37%'}} mt='10px' >
            <Box h='500px' w='100%' bg='#fff' p='10px'>
                <MapComponent/>

            </Box>
            <Box>

            </Box>
            <Box>

            </Box>
            <Box>

            </Box>

        </VStack>

    </Flex>
  )
}
