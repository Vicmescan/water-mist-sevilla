// import React from "react";
// import { useEffect } from "react";
// import CardCarousel from "../components/inicio/CardCarousel";
// import Info from "../components/inicio/Info";
// import { motion } from "framer-motion";
// import CookieConsent from "react-cookie-consent";
// import giralda from "../assets/videos/giralda.mp4";
// import toldo from "../assets/videos/toldo.mp4";

// const Inicio = () => {
//   const [infoVideo, setInfoVideo] = React.useState(giralda);

//   /* changing the video depending the width */
//   useEffect(() => {
//     if (window.innerWidth < 576) {
//       setInfoVideo(giralda);
//     } else {
//       setInfoVideo(toldo);
//     }
//   }, []);

//   return (
//     <motion.div
//       className="inicio"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { duration: 1 } }}
//       exit={{ opacity: 0 }}
//     >
//       <video src={infoVideo} autoPlay loop muted className="info-video">
//         {" "}
//       </video>
//       <div className="snap-container">
//         <div>
//           <CardCarousel />
//         </div>
//         <div>
//           <Info />
//         </div>
//       </div>
//       <CookieConsent
//         location="bottom"
//         buttonText="Aceptar"
//         cookieName="myAwesomeCookieName2"
//         style={{ background: "#2B373B" }}
//         buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
//         expires={150}
//       >
//         Esta página web utiliza cookies para mejorar la experiencia del usuario.
//       </CookieConsent>
//     </motion.div>
//   );
// };

// export default Inicio;
