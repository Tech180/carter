'use client';

import React from 'react';
import Header from '@/app/frontend/UI/headers/home-header';
import Footer from '@/app/frontend/UI/footers/footer';
//import Parallax from '@/app/frontend/UI/home-parallax';
import FadeIn from '@/app/frontend/UI//body/home-body';
function Home() {
  return (
    <>
      <Header />
      <FadeIn />
      <Footer />
    </>
  );
}

export default Home;
