import React,{useEffect} from "react"
import { Link } from "gatsby"
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }

  useEffect(()=>{
    const windowGlobal = typeof window !== 'undefined' && window
    windowGlobal.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        console.log("scrolling")
        document.getElementById("header").style.height = "80px";
        
      } else {
        console.log("decreased scrolling")
        document.getElementById("header").style.height = "120px";

      }
    };
    console.log("Printing")
  })
//   useEffect(()=>{
//     const targetNode = document.getElementById('head');

// // Options for the observer (which mutations to observe)
// const config = { attributes: true, childList: true, subtree: true };

// // Callback function to execute when mutations are observed
// const callback = function(mutationsList, observer) {
//     // Use traditional 'for loops' for IE 11
//     for(let mutation of mutationsList) {
//         if (mutation.type === 'childList') {
//             console.log('A child node has been added or removed.');
//         }
//         else if (mutation.type === 'attributes') {
//             console.log('The ' + mutation.attributeName + ' attribute was modified.');
//         }
//     }
// };

// Create an observer instance linked to the callback function
// const observer = new MutationObserver(callback);

// // Start observing the target node for configured mutations
// observer.observe(targetNode, config);

//   })
const preventDefault = event => event.preventDefault();
  return (
    <div>
      
<header  style={{background:"",}}>

<AppBar elevation={0} id="header" position="fixed" style={{transition:"0.2s",height:"120px",background:"white",elevation:0}}>
        <Toolbar style={{background:"",maxWidth:"850px",margin:"auto",width:"100%",marginBottom:"0px"}}>
          <IconButton edge="start"  color="inherit" aria-label="menu">
           
          </IconButton>
          
           <Link style={{whiteSpace:"nowrap",
           textDecoration:"none",boxShadow:"none",
           color:"#333",
           fontSize:"1.2rem",}}>
             Sahil Kamra
           </Link> 
      
          
          <div style={{display:"flex", justifyContent:"flex-end",width:"100%",background:"",color:"black"}}>
          
           <div > 
           <Button style={{fontSize:"1.2rem"}}>
             
             <Link to="/about" style={{fontSize:"1.2rem",
             textTransform:"none",
             textDecoration:"none",
             boxShadow:"none",
             fontSize:"16px",
             padding:"0.5em",
             margin:"0 0.5rem",whiteSpace:"nowrap",color:"rgb(0,0,0,0.6"}}>
              About me
            </Link>
               </Button>
               <Button style={{fontSize:"1.2rem",}}>
             
             <Link to="/about" style={{fontSize:"1.2rem",
             textTransform:"none",
             textDecoration:"none",
             padding:"1.rem",
             fontSize:"16px",
             padding:"0.5em",
             boxShadow:"none",whiteSpace:"nowrap",margin:"0 0.5rem",color:"rgb(0,0,0,0.6"}}>
              Articles
            </Link>
               </Button>
               <Button style={{}}>
             
             <Link to="/about" style={{fontSize:"1.2rem",margin:"0 0.5rem",
             textTransform:"none",
             fontSize:"16px",
             padding:"0.5em",
             textDecoration:"none",
             boxShadow:"none",
             whiteSpace:"nowrap",color:"rgb(0,0,0,0.6"}}>
        Contact
      </Link>
               </Button>
           </div>
         
          
          </div>

          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>

</header>
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(28),
        marginTop:"120px",
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
   
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
    </div>
  )
}

export default Layout
