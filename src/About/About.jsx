import React from 'react'
import { useEffect } from 'react';

const About = () => {

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/cart");
    const apiData = await data.json();
    console.log(apiData);
    
  };
  return (
    <div>
      this is about page
    </div>
  )
}

export default About
