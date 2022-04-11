import React from 'react';
import Divider from '@mui/material/Divider';
import { Grid,Button,TextField } from '@mui/material';
import { makeStyles,styled } from "@mui/styles";
import {FaFacebookF,FaInstagram} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {GrLinkedinOption} from 'react-icons/gr';
import {IoLogoYoutube} from 'react-icons/io';
import {MdContactPhone} from 'react-icons/md';

const useStyle = makeStyles({
    root:{
        display:'flex',
        alignContent:"center",
        justifyContent:"center",
        width:'100%',
        flexDirection:'row'
        
    
    },

    subRoot:{
        display:'flex',
        background:'#7ed6df',
        padding:20,
        width:500,
        marginTop:50,
    }

})


  


export default function Footer(){

    const classes = useStyle();


    
const footerComponents=()=>{

    return(
        
             <Grid container spacing={2} style={{width:'100%'}}>

<Grid item xs={12} style={{display:'flex', justifyContent:'center'}}>
<Divider style={{ background:'#FFF', width:1300}} />
</Grid>
<div  style={{marginLeft:40}} />
<Grid item xs={2}>
<p><b>Quick Links</b></p>
<p>Home</p>
<p>Cosmetics</p>
<p>Face</p>
<p>Lips</p>
<p>Eyes</p>


</Grid>

<Grid item xs={2}>
<p><b>My Account</b></p>
<p>My Account</p>
<p>Cart</p>
<p>Shop</p>
<p>CheckOut</p>

</Grid>

<Grid item xs={2}>

<p><b>Information For You </b></p>
<p>shipping and payment</p>
<p>Terms and conditions</p>
<p>Contect </p>
<p>Certificate</p>
<p>FAQ-frequently asked question</p>
<p>return and complaints</p>
</Grid>

<Grid item xs={2}>
<p><b>Contact Us</b></p>
<p>Email- info@original-platen</p>
<p>Phone- +420 773 317 811</p>


</Grid>

<Grid item xs={3}>
<p ><b>SUBSCRIBE TO OUR NEWSLETTER</b></p>
         <TextField label="Enter Your Email Address"></TextField>
         <div style={{marginTop: 30 }}>
         <Button variant="contained"  style={{background:'#000',color:'',fontWeight:'bold'}}>
            Submit
            </Button>  </div>
</Grid>
</Grid>
       
    )
}

    return(   
        <div>
        <div className={classes.root}>
            {footerComponents()}
            
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:50,width:'100%',background:'#000'}}>
        <span style={{color:'#FFF'}}><FaFacebookF />     <BsTwitter/>     <GrLinkedinOption/>     <FaInstagram/>     <IoLogoYoutube/></span>
        <span style={{color:'#FFF',padding:'300px'}}>2020 @original pilaten, all right reserved</span>
        </div>
        </div>
    )
}