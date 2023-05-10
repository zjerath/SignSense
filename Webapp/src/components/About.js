import React from "react";
const About = () => {
  return (<div className="container mt-14 mb-20">
    <div className="flex flex-col justify-center">
      <h2 className="text-center font-bold text-xl mt-28 mb-10">About SignSense</h2>
      <p className="text-center w-1/2 mx-auto my-8">SignSense utilizes the Tensorflow Object Detection API to train a deep learning model. Real time detections are made using TensorflowJS. Created in 2023 at Northwestern University.</p>
      <p className="text-center mb-10">View the source code at <a href="https://github.com/zjerath/SignSense" className="text-blue-400 hover:text-purple-600" target="_blank" rel="noreferrer">github.com/zjerath/SignSense</a></p>
    </div>
  </div>);
};

export default About;
