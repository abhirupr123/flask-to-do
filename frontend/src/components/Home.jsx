import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Button, Input, VStack, Text, HStack} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react' 
const Home = () => {
    const [item,setItem]=useState('');
    const toast=useToast();
    const submit=async()=>{
    await axios.post("https://to-do-flask-app.onrender.com/new",{item});
    toast({
        title: 'Item created.',
          description: "New To-Do Item has been created",
          status: 'success',
          duration: 9000,
          isClosable: true,
    })
}
return (
    <VStack justifyContent={"center"} display={"flex"} alignItems={"center"} 
    marginTop={"5%"}>
    <Text fontSize={"4xl"} padding={"7"}>CREATE NEW ITEM</Text>
    <HStack paddingBottom={"16"}>
    <Input width={"2xl"} onChange={(e)=>setItem(e.target.value)} value={item} 
    placeholder='Item name' size='lg' border={"solid"} />
    <Button backgroundColor={"blackAlpha.800"} color={"white"} _hover={{backgroundColor:"black"}} 
    onClick={submit}>Create</Button>
    </HStack>
    <Link to={'/lists'}>
    <Button backgroundColor={"blackAlpha.800"} color={"white"} _hover={{backgroundColor:"black"}}>List all Items</Button>
    </Link>
    </VStack>
  )
}

export default Home;