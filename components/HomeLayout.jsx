'use client';
import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { usePathname } from 'next/navigation'

export default function HomeLayout({children}) {
    const pathname = usePathname()
    const isLoginPage = pathname === "/login"
  return (
    <div>
        {isLoginPage ? children : (
            
         <Grid
            templateAreas={`"nav header"
                  "nav main"`}
            gridTemplateRows={"40px 1fr "}
            gridTemplateColumns={"auto 1fr"}
            minH="100vh"
            maxW="100vw"
            fontWeight="normal"
          >
            <GridItem bg="#F8FAFB" area={"header"}>
              <Navbar />
            </GridItem>
            <GridItem bg="#5DADEC" area={"nav"} >
              <Sidebar />
            </GridItem>
            <GridItem pl="2" pr="2" bg="#F5F5F5" area={"main"} overflowX="auto" >
              {children}
            </GridItem>
          </Grid>
        ) }
    </div>
  )
}
