import { Box } from '@chakra-ui/react'
import React from 'react'
// import NoteInput from '../components/NoteInput'
import NoteList from '../components/NoteList'
import Navbar from './Navbar'
import { motion } from 'framer-motion' 
import NoteInputModal from '../components/NoteInputModal'
// import notesPic from "../assets/notesbg.jpg"
import { useSelector } from 'react-redux'

const NotesApp = () => {


  const notesData=useSelector((store)=>store.appReducer.notesData)

  return (
    <motion.div
     initial={{width:0}}
     animate={{width:"100%"}}
     exit={{x:window.innerWidth,transition:{duration:0.5}}}>
      <Navbar/>
    <Box  backgroundImage={"https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} backgroundSize="cover" height={notesData.length>4?"auto":"100vh"} mt={"2%"} width={"100%"} >
   
        <NoteInputModal/>
        <NoteList/>
    </Box>
    </motion.div>
  )
}

export default NotesApp