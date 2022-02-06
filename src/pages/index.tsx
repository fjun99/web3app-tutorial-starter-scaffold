// src/pages/index.tsx
import type { NextPage } from 'next'
import Head from 'next/head'
import NextLink from "next/link"
import { VStack, Heading, Box, LinkOverlay, LinkBox} from "@chakra-ui/layout"
import { Text, Button } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My DAPP</title>
      </Head>

      <Heading as="h3"  my={4}>Explore Web3</Heading>          
      <VStack>
        <Box  mb={0} p={4} w='100%' borderWidth="1px" borderRadius="lg">
          <Heading my={4}  fontSize='xl'>Task 1</Heading>
          <Text>local chain with hardhat</Text>
        </Box>

        <Box  my={4} p={4} w='100%' borderWidth="1px" borderRadius="lg">
          <Heading my={4}  fontSize='xl'>Task 2</Heading>
          <Text>DAPP with React/NextJS/Chakra</Text>
        </Box>

        <LinkBox  my={4} p={4} w='100%' borderWidth="1px" borderRadius="lg">
          <NextLink href="https://github.com/NoahZinsmeister/web3-react/tree/v6" passHref>
          <LinkOverlay>
            <Heading my={4} fontSize='xl'>Task 3 with link</Heading>
            <Text>Read docs of Web3-React V6</Text>
          </LinkOverlay>
          </NextLink>
        </LinkBox>
      </VStack>
    </>
  )
}

export default Home
