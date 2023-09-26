import { HStack, VStack, Box, Spinner, Text, Select, Button, useToast } from '@chakra-ui/react';
import { IconButton } from '@mui/material';
import axios from 'axios';
import React, {useEffect, useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Link } from 'react-router-dom';

const List = () => {
    const[item,setItem]=useState([]);
    const[option,setOption]=useState('');
    const[load,setLoad]=useState(true);
    const toast=useToast();
    useEffect(() => {
        const fetchtodo=async()=>{
      const {data}=await axios.get("https://to-do-flask-app.onrender.com/display");
      setItem(data);
        }
        fetchtodo();
        setLoad(false);
    }, []);

    const del=async(i)=>{
        await axios.delete(`https://to-do-flask-app.onrender.com/${i}`);
        toast({
            title: 'Item deleted.',
              description: "Item deletion is successful",
              status: 'success',
              duration: 9000,
              isClosable: true,
        })
        window.location.reload();
    }
    useEffect(() => {
        if(option==='option 1')
        {
            const az=item.sort();
            setItem(az);
        }
        else
        {
            const za=item.sort().reverse();
            setItem(za);
        }
}, [option,item]);
if(load===true)
    {
        return(
            <VStack h="90vh" justifyContent={"center"}>
              <Box transform={"scale(3)"}>
              <Spinner size={"xl"}/>
              </Box>
          </VStack>
          )
    }
  return (
    <VStack>
    <Select placeholder='Sort Items' id='sort' justifyContent={"center"} 
    display={"flex"} alignItems={"center"} marginBottom={"10"}
    width={"2xl"} marginTop={"12"} onChange={(e)=>setOption(e.target.value)} border={"2px"}>
        <option value='option 1'>A-Z</option>
        <option value='option 2'>Z-A</option>
    </Select>
    {item.map((i)=>(
        <HStack shadow={"lg"} borderRadius={"8"} p={"4"} 
        width={"2xl"} marginLeft={"30%"} marginRight={"55%"} transition={"all 0.3s"}
        css={{"&:hover":{transform:"scale(1.1)"}}} marginTop={"16"} border={"solid"}>
            <Text width={"lg"}>{i.Item}</Text>
            <Box display={"flex"} justifyContent={"flex-end"}>
            <Link to={`/edit/${i.Item}`}>
            <IconButton >
                <EditIcon/>
            </IconButton>
            </Link>
            <IconButton onClick={()=>del(i.Item)}>
                <DeleteIcon/>
            </IconButton>
            </Box>
        </HStack>
    ))}
    <Link to={"/"}>
    <Button justifyContent={"center"} display={"flex"} 
    backgroundColor={"blackAlpha.800"} color={"white"} _hover={{backgroundColor:"black"}}
    alignItems={"center"} marginTop={"7"}>Back to Home</Button>
    </Link>
    </VStack>
  )
}

export default List;