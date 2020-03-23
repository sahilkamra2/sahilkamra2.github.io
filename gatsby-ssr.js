// const React = require("react")
import React from 'react';

export const onRenderBody=({ setHeadComponents })=> {
 setHeadComponents([
    
   
   //  <script
   //  dangerouslySetInnerHTML={{
   //     __html:`
   //    alert("dumboooooo")
   //   `
   //  }}
   //  />,
//     <script
//     dangerouslySetInnerHTML={{
//        __html:`
//        !function(w, d, t, u) {
//         if (w.__ls) return; var f = w.__ls = function() { f.push ? f.push.apply(f, arguments) : f.store.push(arguments)};
//         if (!w.__ls) w.__ls = f; f.store = []; f.v = "1.0";

//         var ls = d.createElement(t); ls.async = true; ls.src = u;
//         var s = d.getElementsByTagName(t)[0]; s.parentNode.insertBefore(ls, s);
//     }(window, document, 'script', ('https:' == window.location.protocol ? 'https://' : 'http://') + 'cdn.livesession.io/track.js');

//     __ls("setOptions", { accountID: "479a641e", websiteID: "5f993442" });
//     __ls("newPageView") 
//      `
//     }}
//     />
//   ,
//   <script type="application/javascript" src="https://sdki.truepush.com/sdk/v2.0.2/app.js" async />,
// <script
// dangerouslySetInnerHTML={{
// __html:`

// var truepush = window.truepush || [];
// truepush.push(function(){
//     truepush.Init({
//         id: "5e75a7e8c56a2c47145a7ca7"
//         }, function(error){
//           if(error) console.error(error);
//         })
//     })
// `

// }}

// />
//   ,
    
  ]);
}