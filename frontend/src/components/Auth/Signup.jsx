import { motion } from "framer-motion"
import React, { useRef, useState, useEffect } from "react";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import SelectRole from "./SelectRole";
import FormSignUp from "./FormSignUp";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


import Snackbar from '@mui/joy/Snackbar';



export default function Signup() {

  const [userData, setUserData] = useState({
    role: "",
    modelData: {}
  })

  const [view, setView] = useState("ROLE")
  const [isSnackbarOpen, setIsSnackbarOpen] = useState({
    color: "",
    message: ""
  })

  useEffect(() => {
    console.log(userData)
  }, [userData])

  const slides = [
    {
      image: "",
      title: "Credit Models",
      desc: "We use superior algo-driven credit models to curate invoices - Our credit models are much more superior & sharper than that of any other financial institution in India - And we are open to discussing with you about how they work."
    },
    {
      image: "",
      title: "Liquidation",
      desc: "Down sell your asset to another investor at a click of a button at zero cost. 100% of liquidity requests on TradeCred platform have been honoured till date."
    },
    {
      image: "",
      title: "Track Record",
      desc: "We have zero delinquency till date."
    },
    {
      image: "",
      title: "Diverse Set of Products",
      desc: "Invoice Discounting, Asset Leasing, Corporate Bonds, Sovereign Bonds"
    },
  ]

  return (
    <div className="flex flex-col h-screen bg-[#abddc4]">

      <div className="absolute top-5 left-5 flex gap-1 items-center text-3xl font-mono">
        <CurrencyBitcoinIcon className="text-[#2b5146] !text-4xl" />
        <p className="text-black">Fitex</p>
      </div>
      <section className="absolute hidden xl:block left-20 top-1/3">

        <Swiper
          direction={'vertical'}
          pagination={{
            clickable: false,
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper h-96 w-[35vw]"
        >
          {slides.map((slide, id) => {
            return (
              <SwiperSlide key={id} className="flex flex-col">
                <img alt="altText" src={slide.image} />
                <h1 className="text-[#2b5146] text-4xl mt-4">{slide.title}</h1>
                <div className="text-black/80 text-lg mt-2">{slide.desc}</div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </section>


        <div className="hidden py-44 px-8 sm:px-32 md:p-44 w-screen md:w-auto bg-white absolute top-32 bottom-0 md:right-0 rounded-t-[40px] md:rounded-tr-none md:rounded-tl-[80px] text-center sm:flex flex-col">
          <SelectRole userData={userData} setUserData={setUserData} view={view} setView={setView} />
          <FormSignUp setIsSnackbarOpen={setIsSnackbarOpen} userData={userData} setUserData={setUserData} view={view} setView={setView} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: "700px" }}
          animate={{ opacity: 1, y: ["400px", "-50px", "0px"], transition: { duration: 0.8, ease: "easeOut" } }}
          exit={{ opacity: 0, y: "700px", transition: { duration: 0.3, ease: "easeOut" } }}
          transition={{ duration: 0.3 }}
          className="sm:hidden h-max overflow-y-hidden py-44 px-8 sm:px-32 md:p-44 w-screen md:w-auto bg-white absolute top-32 bottom-0 md:right-0 rounded-t-[40px] md:rounded-tr-none md:rounded-tl-[80px] text-center flex flex-col">
          <SelectRole userData={userData} setUserData={setUserData} view={view} setView={setView} />
          <FormSignUp setIsSnackbarOpen={setIsSnackbarOpen} userData={userData} setUserData={setUserData} view={view} setView={setView} />
        </motion.div>


        <Snackbar
          autoHideDuration={4000}
          open={isSnackbarOpen}
          variant={"outlined"}
          color={isSnackbarOpen.color}
          onClose={(event, reason) => {
            if (reason === 'clickaway') {
              return;
            }
            setIsSnackbarOpen(false);
          }}
        >
          {isSnackbarOpen.message}
        </Snackbar>
    </div>
  );
}

