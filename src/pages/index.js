import ParallaxHeader from "@/components/parallaxHeader/Main";
import MainPersonSkils from "@/components/pesonSkils/main";
import Container from "@/container/main";
import React from "react";

const index = () => {
  return (
    <Container>
      <ParallaxHeader />
      <MainPersonSkils />
    </Container>
  );
};

export default index;
