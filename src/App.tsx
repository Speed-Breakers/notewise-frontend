import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Upload from './pages/Upload';
import DetailsPage from './pages/DetailsPage';
import axios from 'axios';

function App() {
  return (
    <Box minH="100vh" bg="#000" pos="relative">
      <Box pos="absolute" zIndex={1} top="0px" left="0px" w="100vw" h="100vh" background="linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(128,45,253,0.5) 100%)"></Box>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/file/:fileId/:title' element={<DetailsPage />} />
        </Routes> 
      </Router>
    </Box>
  );
}

export default App;
