import React from 'react'
import { HStack, Text} from '@chakra-ui/react';
import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
  return (
    <HStack bgColor={"black"} marginTop={"80"} display={"flex"} 
    justifyContent={"center"} alignItems={"center"} height={"36"}>
        <Text color={"white"} fontSize={"xl"} 
        padding={"5"}>Made by Abhirup Roy</Text>
        <IconButton href='https://www.linkedin.com/in/abhirup-roy-595501241/'>
            <LinkedInIcon color='primary'/>
        </IconButton>
        <IconButton href='https://github.com/abhirupr123'>
            <GitHubIcon color='primary'/>
        </IconButton>
    </HStack>
  )
}

export default Footer;