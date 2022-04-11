import  React,{useState, useEffect} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {Button} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import Menu from '@mui/material/Menu';
import {FaFacebookF,FaInstagram} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {GrLinkedinOption} from 'react-icons/gr';
import {IoLogoYoutube} from 'react-icons/io';
import {MdContactPhone} from 'react-icons/md';

 
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Header() {

      const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);

      

  return (
    <Box sx={{ flexGrow: 1 }}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:50,width:'100%',background:'#000'}}>
            <span style={{color:'#FFF'}}><MdContactPhone/>+420 773 317 811 |  info@original-platen</span>
            <span style={{color:'#FFF',padding:'300px'}}>Today only free shipping on all orders</span>
         <span style={{color:'#FFF'}}><FaFacebookF />     <BsTwitter/>     <GrLinkedinOption/>     <FaInstagram/>     <IoLogoYoutube/></span>
      </div>
      <AppBar color='inherit' position="static">
        <Toolbar>
          <div>
            <img src='/logo1.png' width={100} /> 
          </div>

          <div  style={{display:'flex', justifyContent:'center', alignContent:'center', alignItems:'center', width:'70%'}}>
          <Button style={{fontWeight:'bolder',color:'#000',fontSize:15}}>HOME</Button>
          <Button style={{fontWeight:'bolder',color:'#000',fontSize:15}}>COSMATICS</Button>
          <Button style={{fontWeight:'bolder',color:'#000',fontSize:15}}>FACE</Button>
          <Button style={{fontWeight:'bolder',color:'#000',fontSize:15}}>LIPS</Button>
          <Button style={{fontWeight:'bolder',color:'#000',fontSize:15}}>EYES</Button>
          <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        
      </Menu>  
          </div>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <div >
               <PersonIcon />
              <ShoppingCartIcon style={{marginLeft:40}} />
         

          </div>

        </Toolbar>
      </AppBar>
      
      
    </Box>
  );
}
