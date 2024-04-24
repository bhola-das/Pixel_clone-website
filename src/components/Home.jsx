import React from 'react'

const Home = ({image}) => {
  return (
    <>
    <h1 class="bh">Bhola</h1>
    <div className="container-fluid">
        <div className="flex">
        {
          image.map((imgp)=>(
            <div key={imgp.id} className="items">
                <img src={imgp.src.medium} />
                </div>
          )
          )
        }
     </div>
    </div>
    </>
  );
};

export default Home