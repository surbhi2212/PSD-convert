import  React,{useState, useEffect, createRef} from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Header from './Header'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import Footer from './Footer'
import Divider from '@mui/material/Divider'
import CartButton from './CartButton';
import background from "./Image/blackback.webp";
import Avatar from '@mui/material/Avatar';





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
        
        margin:10,
        marginTop:40,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        borderRadius:10,
        border:'0.5px solid grey'
    }

})

var setting = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    //autoplay: true,
    //autoplaySpeed: 2000,

};

var bannerSetting = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
}

export default function Home() {

    const classes = useStyle();

    

    var CategorySlider = createRef()
  
    const ShowAllProducts=()=>{
     
     return(<div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
  
          <span style={{padding:10,margin:5}} >
         <img src="/product1.webp"  width="80%" style={{borderRadius:10}} />
        </span>
        
        <span style={{padding:10,margin:5}} >
         <img src="/product2.webp" width="80%" style={{borderRadius:10}} />
        </span>
        
        <span style={{padding:10,margin:5}} >
        <img src="/product3.webp" width="80%" style={{borderRadius:10}} />
        </span>
        
        <span style={{padding:10,margin:5}} >
        <img src="/product4.webp" width="80%" style={{borderRadius:10}} />
        </span>
        
        <span style={{padding:10,margin:5}} >
        <img src="/product5.webp" width="80%" style={{borderRadius:10}} />
        </span>    
         </div>)
    
    }
 const BannerDisplay=()=>{
        return(<div>
            <div >
                <img height="600px" width="100%" src="/one.jpg" />
                
            </div>
        </div>)  
  }

  const productView=()=>{

    return(<div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
  
    <span style={{padding:10,margin:5}} >
   <img src="/p1.webp" style={{borderRadius:10}} />
  </span>
  
  <span style={{padding:10,margin:5}} >
  <img src="/p2.webp" style={{borderRadius:10}} />
  </span>

  <span style={{padding:10,margin:5}} >
  <img src="/p3.webp" style={{borderRadius:10}} />
  </span>
   </div>)
   }

   const buyProduct=()=>{
    return(<div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
      <div className={classes.subRoot}>
  <div style={{padding:10}}>
      <img src= '/delivery1.jpg' width={200}/> 
      </div>
  <div  style={{width:240,fontWeight:'bold',display:'flex',justifyContent:'center',fontSize:20}}>
   Fast Delivery
  </div>
  <div  style={{width:240,display:'flex',justifyContent:'center',marginTop:10,marginLeft:20}}>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
  </div>
 
  
  </div>
  <div className={classes.subRoot}>
  <div style={{padding:10}}>
      <img src= '/return.png' width={180}/> 
      </div>
  <div  style={{width:240,fontWeight:'bold',display:'flex',justifyContent:'center',fontSize:20}}>
   East Return
  </div>
  <div  style={{width:240,display:'flex',justifyContent:'center',marginTop:10,marginLeft:20}}>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
  </div>
 
  
  </div>
  <div className={classes.subRoot}>
  <div style={{padding:10}}>
      <img src= '/payment.png' width={200}/> 
      </div>
  <div  style={{width:240,fontWeight:'bold',display:'flex',justifyContent:'center',fontSize:20}}>
   Secure Payment
  </div>
  <div  style={{width:240,display:'flex',justifyContent:'center',marginTop:10,marginLeft:20}}>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
  </div>
 
  
  </div>
  </div>
  )
    
   }

      
        const ShowBestSelling=()=>{
          
          return (
          <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
          <div className={classes.subdiv} style={{margin:40}}>
           
           <div style={{padding:10,display:'flex', justifyContent:'center'}}>
           <img src="/lipstick.webp" style={{width:150,height:150}}/>
           
           </div>
           <div style={{fontFamily:'Sarabun',fontWeight:'bold',fontSize:30,display:'flex', justifyContent:'center'}}>
            <span>Lipstick</span>
            
           </div>
      
           <div style={{fontSize:20,fontFamily:'Sarabun',fontWeight:500,display:'flex', justifyContent:'center',marginTop:5}}>
            <span>MRP: &#8377; 500 </span>
           </div>
      
           <div style={{display:'flex', justifyContent:'center',padding:10}}>
           <CartButton  />
           </div>
      
          </div>

          <div className={classes.subdiv} style={{margin:40}}>
           
           <div style={{padding:10,display:'flex', justifyContent:'center'}}>
           <img src="/Compact.webp" style={{width:150,height:150}}/>
           
           </div>
           <div style={{fontFamily:'Sarabun',fontWeight:'bold',fontSize:30,display:'flex', justifyContent:'center'}}>
            <span>Compact</span>
            
           </div>
      
           <div style={{fontSize:20,fontFamily:'Sarabun',fontWeight:500,display:'flex', justifyContent:'center',marginTop:5}}>
            <span>MRP: &#8377; 800 </span>
           </div>
      
           <div style={{display:'flex', justifyContent:'center',padding:10}}>
           <CartButton />
           </div>
      
          </div>
          <div className={classes.subdiv} style={{margin:40}}>
           
           <div style={{padding:10,display:'flex', justifyContent:'center'}}>
           <img src="/lipcolor.webp" style={{width:150,height:150}}/>
           
           </div>
           <div style={{fontFamily:'Sarabun',fontWeight:'bold',fontSize:30,display:'flex', justifyContent:'center'}}>
            <span>LipColor</span>
            
           </div>
      
           <div style={{fontSize:20,fontFamily:'Sarabun',fontWeight:500,display:'flex', justifyContent:'center',marginTop:5}}>
            <span>MRP: &#8377; 600 </span>
           </div>
      
           <div style={{display:'flex', justifyContent:'center',padding:10}}>
           <CartButton  />
           </div>
      
          </div>
          <div className={classes.subdiv} style={{margin:40}}>
           
           <div style={{padding:10,display:'flex', justifyContent:'center'}}>
           <img src="/cream.webp" style={{width:150,height:150}}/>
           
           </div>
           <div style={{fontFamily:'Sarabun',fontWeight:'bold',fontSize:30,display:'flex', justifyContent:'center'}}>
            <span>Cream</span>
            
           </div>
      
           <div style={{fontSize:20,fontFamily:'Sarabun',fontWeight:500,display:'flex', justifyContent:'center',marginTop:5}}>
            <span>MRP: &#8377; 400 </span>
           </div>
      
           <div style={{display:'flex', justifyContent:'center',padding:10}}>
           <CartButton  />
           </div>
      
          </div>
          <div className={classes.subdiv} style={{margin:40}}>
           
           <div style={{padding:10,display:'flex', justifyContent:'center'}}>
           <img src="/kajal.webp" style={{width:150,height:150}}/>
           
           </div>
           <div style={{fontFamily:'Sarabun',fontWeight:'bold',fontSize:30,display:'flex', justifyContent:'center'}}>
            <span>Kajal</span>
            
           </div>
      
           <div style={{fontSize:20,fontFamily:'Sarabun',fontWeight:500,display:'flex', justifyContent:'center',marginTop:5}}>
            <span>MRP: &#8377; 699 </span>
           </div>
      
           <div style={{display:'flex', justifyContent:'center',padding:10}}>
           <CartButton  />
           </div>
      
          </div>
          <div className={classes.subdiv} style={{margin:40}}>
           
           <div style={{padding:10,display:'flex', justifyContent:'center'}}>
           <img src="/foundation.webp" style={{width:150,height:150}}/>
           
           </div>
           <div style={{fontFamily:'Sarabun',fontWeight:'bold',fontSize:30,display:'flex', justifyContent:'center'}}>
            <span>Foundation</span>
            
           </div>
      
           <div style={{fontSize:20,fontFamily:'Sarabun',fontWeight:500,display:'flex', justifyContent:'center',marginTop:5}}>
            <span>MRP: &#8377; 900 </span>
           </div>
      
           <div style={{display:'flex', justifyContent:'center',padding:10}}>
           <CartButton  />
           </div>
      
          </div>
          </div>
 ) 
}
const howToUse=()=>{

  return(<div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>

  <span style={{padding:5,margin:5}} >
 <img src="/facepack1.jpg" width={200} />
</span>

<span style={{padding:5,margin:5}} >
<img src="/facepack2.jpg" width={200}  />
</span>

<span style={{padding:5,margin:5}} >
<img src="/facepack3.jpg" width={200}  />
</span>

<span style={{padding:5,margin:5}} >
<img src="/facepack4.jpg" width={200} />
</span>

<span style={{padding:5,margin:5}} >
<img src="/facepack5.jpg" width={200}  />
</span>

<span style={{padding:5,margin:5}} >
<img src="/facepack6.jpg" width={200}  />
</span>

<span style={{padding:5,margin:5}} >
<img src="/facepack7.jpg" width={200}  />
</span>


 </div>)
 }





    return (
        <div>
            
            <Header style={{width:'100%'}} />
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
        <div style={{width:'100%'}}>
            <Slider {...bannerSetting} >
              {BannerDisplay()}
            </Slider>
        </div>

        </div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}> 

<div style={{fontFamily:'Sarabun',fontSize:32,fontWeight:'bold',margin:30}}>
Skin Care
</div>
</div>
        {productView()}


      <div style={{display:'flex',flexDirection:'row',justifyContent:'center',background:'#ecf0f1'}}> 

    <div style={{fontFamily:'Sarabun',fontSize:32,fontWeight:'bold',margin:30}}>
    Featured Product
    </div>
    </div>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'center',background:'#ecf0f1'}}>
    
      <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 50,
              paddingBottom: 50,
            }}
          >
            <ArrowBackIos onClick={()=>CategorySlider.current.slickPrev()} style={{cursor:'pointer', fontSize:42,color:'#95a5a6'}} />
            </div>
        
        {ShowAllProducts()}
        <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 50,
                paddingBottom: 50,
              }}
            >
            
            <ArrowForwardIosIcon onClick={()=>CategorySlider.current.slickPrev()} style={{curson:'pointer',fontSize:42,color:'#95a5a6'}}/>
            </div>
            </div>
            <div >
                <img height="600px" width="100%" src="/two.jpg" />
                </div>

              <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>  
  <div style={{fontFamily:'Sarabun',fontSize:32,fontWeight:'bold',margin:30}}>Best Selling Products</div>
  </div>
<div style={{display:'flex',flexWrap:'wrap', justifyContent:'center'}}>
{ShowBestSelling()}
</div>
<div style={{ backgroundImage: `url(${background})`, width:'100%', height:500,padding:10}}>
 
 <div style={{fontFamily:'Sarabun',fontSize:40,fontWeight:'bolder',paddingTop:40,color:'#FFF',display:'flex',justifyContent:'center'}}>Food For Your Skin</div>
 
 
 </div>

 <div style={{display:'flex', justifyContent:'center', marginTop:50}}>
 <Avatar
        alt="Remy Sharp"
        src="/images.jpg"
        sx={{ width: 80, height: 80 }}
      />
     
 </div>
 <div style={{display:'flex', justifyContent:'center', margin:50, width:500,paddingLeft:600,fontSize:20,color:'grey'}}>
 <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 50,
              paddingBottom: 50,
            }}
          >
            <ArrowBackIos onClick={()=>CategorySlider.current.slickPrev()} style={{cursor:'pointer', fontSize:42,color:'#95a5a6'}} />
            </div>
            <div style={{marginLeft:50,marginRight:50}}>
      “I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage.
      </div>
      <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 50,
                paddingBottom: 50,
              }}
            >
            
            <ArrowForwardIosIcon onClick={()=>CategorySlider.current.slickPrev()} style={{curson:'pointer',fontSize:42,color:'#95a5a6'}}/>
            </div>
      </div>
      <Divider style={{margin:30}}/>   

 {buyProduct()}
<div style={{marginTop:50}}>
{howToUse()}
</div>
    <Footer />
    </div>
          )
}