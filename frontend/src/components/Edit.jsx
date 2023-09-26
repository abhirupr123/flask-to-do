import React, { useState } from 'react'
import { VStack, HStack, Text, Input,Button,useToast } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
const Edit = () => {
    const[ne,setNe]=useState('');
    const toast=useToast();
    console.log(ne);
    const params=useParams();
    const prev=params.id;
    const edit=async()=>{
        await axios.post("https://to-do-flask-app.onrender.com/edit",{ne,prev});
        toast({
            title: 'Item edited.',
              description: "Existing Item has been edited",
              status: 'success',
              duration: 9000,
              isClosable: true,
        })
    }
  return (
    <VStack justifyContent={"center"} display={"flex"} alignItems={"center"} marginTop={"5%"}>
    <Text fontSize={"4xl"} padding={"7"}>EDIT YOUR ITEM</Text>
    <HStack paddingBottom={"16"}>
    <Input width={"2xl"} onChange={(e)=>setNe(e.target.value)} value={ne} 
    placeholder='Item name' size='lg' border={"solid"} />
    <Button backgroundColor={"blackAlpha.800"} color={"white"} _hover={{backgroundColor:"black"}} 
    onClick={()=>edit()}>Edit</Button>
    </HStack>
    <Link to={'/'}>
    <Button backgroundColor={"blackAlpha.800"} color={"white"} _hover={{backgroundColor:"black"}}>Back to Home</Button>
    </Link>
    </VStack>
  )
}

export default Edit;