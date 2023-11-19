import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

  const navigate=useNavigate()

  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0,transition:{duration:0.5}}}
      >
    <Box 
     height={"100vh"}
     backgroundImage={"https://cdn.pixabay.com/photo/2017/04/19/13/16/computer-2242264_1280.jpg"}
     backgroundSize="cover"
     overflowY="hidden">
        <Button size={"lg"} colorScheme="cyan" mt={"5%"} color="white" pt={"10px"} pb="20px" fontSize="4xl">Notes Application</Button>
      <Button size={"lg"} colorScheme="blackAlpha" position={"absolute"} bottom="40%"
        left={"45%"}
       onClick={()=>navigate("/notes")}>Get Started</Button>  
    </Box>
    </motion.div>
  )
}

export default HomePage