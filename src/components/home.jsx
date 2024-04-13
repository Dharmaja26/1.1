import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Movie from './movie';

const Home = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const logout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/movie')
  }

  const user = useSelector((state) => state.user.user);

  return (
    <>
      <div style={{backgroundColor:'palegreen',justifyContent:'space-evenly',display:'flex'}}> 
          <h1>Blogger Page</h1>
          <input type='text' style={{backgroundColor:'palegreen',borderColor:'palegreen'}}  placeholder='Search Here...' ></input>
          <button style={{backgroundColor:'green',color:'white',padding:'14px 20px',borderColor:'wheat', height:'40px',borderRadius:'15px'}}>Login</button>
          <button style={{backgroundColor:'green',color:'white',padding:'14px 20px',borderColor:'wheat', height:'40px',borderRadius:'15px'}}>Books</button>
          <button style={{backgroundColor:'green',color:'white',padding:'14px 20px',borderColor:'wheat', height:'40px',borderRadius:'15px'}}>Food</button>
          <button style={{backgroundColor:'green',color:'white',padding:'14px 20px',borderColor:'wheat', height:'40px',borderRadius:'15px'}}>Series and Movies</button>
          <button style={{backgroundColor:'green',color:'white',padding:'14px 20px',borderColor:'wheat', height:'40px',borderRadius:'15px'}}>Travel</button>
          <button style={{backgroundColor:'green',color:'white',padding:'14px 20px',borderColor:'wheat', height:'40px',borderRadius:'15px'}}>Design</button>
          <button style={{backgroundColor:'green',color:'white',padding:'14px 20px',borderColor:'wheat', height:'40px',borderRadius:'15px'}}>Relationship</button>
    {/* <div style={{backgroundImage:`url(beach.jpg)`, color:'white',backgroundRepeat:'no-repeat', backgroundSize:'cover',height : '900px', justifyContent:'center', alignItems:'center',display:'flex'}}> */}
      {/* <h2 style={{color:'black'}}>Welcome to MALDIVES {user}!</h2> */}
            {/* <p style={{color:'black' }}>This is he official Website for Tourists.</p> */}
       </div>
    <div style={{backgroundImage:`url(blog3.jpg)`,backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'1000px'}}>
    <h1 style={{color:'black'}}>SHARE YOUR STORY WITH THE WORLD</h1>
    </div>
    <div style={{backgroundColor:'black' , marginLeft:'20px' ,display:'flex',justifyContent:'space-around'}}>
      <h4>Expert Co-Authorized Articles</h4>
      <a href="#">
      <figure class="animate fadeInRight">
      <figcaption>
      <img src='fig1.jpg' style={{height:'200px'}}></img>
      <h3>Travel</h3>
      </figcaption>
      </figure>
      </a>
      <a href="#">
      <figure class="animate fadeInRight">
      <figcaption>
      <img src='fig2.jpg' style={{height:'200px'}}></img>
      <h3>Relationship</h3>
      </figcaption>
      </figure>
      </a>
      <a href="#">
      <figure class="animate fadeInRight">
      <figcaption>
      <img src='fig3.jpg' style={{height:'200px'}}></img>
      <h3>Food</h3>
      </figcaption>
      </figure>
      </a>
      <br></br>
      <a href='#' onClick={logout} >
      <figure class="animate fadeInRight">
      <figcaption>
      <img src='fig4.jpeg' style={{height:'200px'}}></img>
      <h3>Movies and Series</h3>
      </figcaption>
      </figure>
      </a>



    </div>
    </>
  );
};

export default Home;
