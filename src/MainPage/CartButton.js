import React,{useState} from 'react'
import { Avatar } from '@material-ui/core';
import {Button} from '@mui/material'

import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    root:{
        display:"flex",
        alignContent:"center",
        justifyContent:"center"
    },

    subRoot:{
        display:'flex',
        background:'#FFF',
        padding:20,
        width:250,
        height:300,
        margin:10,
        marginTop:50,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        borderRadius:2,
        border:'0.5px solid #636e72'
    }

})


export default function CartButton(props){

    const classes = useStyle()

    const [qty,setQty] = useState(0)

    const handlePlus=()=>{
        var v = qty
        if(v<10){
        setQty(v+1)
        }
    }

    const handleMinus=()=>{
        var v = qty
        if(v>0){
        setQty(v-1)
        }
    }


    
    return(<>
        {qty==0?<div style = {{display:'flex',alignItems:'center', padding:2, margin:2}} >
        <Button style={{background:'#000',color:"#FFF"}} onClick={()=>handlePlus()} varient="contained" >ADD TO CART</Button> </div>:
        <div style = {{display:'flex',alignItems:'center', padding:2, margin:2}} >
            <Avatar style={{background:'#000',color:"#FFF", marginRight:15}} onClick={()=>handleMinus()} varient='contained' variant="square" >
                -
            </Avatar>

            <span>
                {qty}
            </span>

            <Avatar style={{background:'#000',color:"#FFF", marginLeft:15}} onClick={()=>handlePlus()} varient='contained' variant='square' >
                +
            </Avatar>
        </div>}
        </>
    )
}