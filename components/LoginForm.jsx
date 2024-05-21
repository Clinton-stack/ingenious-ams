'use client'
import React from 'react'
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    Input,
  } from "@chakra-ui/react";
  import { AnimatePresence, motion } from "framer-motion";
  import { useState } from "react";


export default function LoginForm() {

    const [isVisible, setIsVisible] = useState(true);

  const toggleForms = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
        <Flex >
            <AnimatePresence>
              {isVisible ? (
                <motion.div
                  key="login-form"
                  initial={{ opacity: 0, x: "-100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "100%" }}
                  transition={{ duration: 0.5 }}
                >
                  <form>
                    <Heading as="h4" size="md" mb="15px">
                      Login
                    </Heading>
                    <FormControl mb="20px" w={{base:'100%', lg:'400px'}}>
                      <FormLabel> Username or Email Address:</FormLabel>
                      <Input
                        size="xs"
                        type="email"
                        name="email"
                        variant="flushed"
                        borderBottom="1px solid #5DADEC"
                      />
                    </FormControl>
                    <FormControl mb="10px">
                      <FormLabel>Password:</FormLabel>
                      <Input
                        size="xs"
                        type="password"
                        name="password"
                        variant="flushed"
                        borderBottom="1px solid #5DADEC"
                      />
                      <FormHelperText>
                        Forgot Password?{'  '}
                        <Button variant='link' color='#5DADEC' onClick={toggleForms}>Click Here </Button>
                      </FormHelperText>
                    </FormControl>
                    <Button type="submit" bgColor="#5DADEC" color="white">
                      Submit
                    </Button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="forgot-password-form"
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "-100%" }}
                  transition={{ duration: 0.5 }}
                >
                  <form>
                    <Heading as="h4" size="md" mb="15px">
                      Forgot Password
                    </Heading>
                    <FormControl mb="20px" w={{base:'100%', lg:'400px'}}>
                      <FormLabel> Email Address:</FormLabel>
                      <Input
                        size="xs"
                        type="email"
                        name="email"
                        variant="flushed"
                        borderBottom="1px solid #5DADEC"
                      />
                      <FormHelperText mb="10px">
                        Enter email address used to open account
                      </FormHelperText>
                      <Button type="submit" bgColor="#5DADEC" color="white">
                        Submit
                      </Button>
                      <FormHelperText>
                        Go back to Login page {'  '}
                        <Button onClick={toggleForms} variant='link' color='#5DADEC'>Click Here</Button>
                      </FormHelperText>
                    </FormControl>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </Flex>

    </div>
  )
}
