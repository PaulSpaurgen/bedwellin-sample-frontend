import React from 'react';
import { StaticImages } from '@constants/StaticImages';


const Home: React.FC = () => {

  return (
    <div className="w-full  relative z-20">

      <div className=" flex flex-col  text-center   max-w-[80%] mx-auto mt-[100px] rounded-[10px] h-[500px] w-full bg-cover bg-center bg-no-repeat shadow-lg bg-blend-overlay bg-black/40" style={{ backgroundImage: `url(${StaticImages.heroBg})` }}>


        <p className="text-white text-xs font-normal mt-[120px]">STAY WITH US AND FEEL LIKE HOME</p>



        <p className="text-white text-6xl font-normal mt-[20px]">A Unique Maldives </p>
        <p className="text-white text-6xl font-normal mt-[20px]">Experience </p>







      </div>







      {/* <div className="bg-cover bg-center bg-no-repeat w-full h-auto rounded-[10px] " }}>
        

      </div> */}



    </div>
  );
};

export default Home;
