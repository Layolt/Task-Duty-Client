import React from "react";
import Homepageimg from "../assets/images/Homepageimg.png";

function Home() {
  return (
    <section className="home-section">
      <div className="container">
        <div className="d-flex justify-content-between ">
          <div>
            <h2 className="d-flex mt-5 ">
              Manage your Tasks on
              <br/>
           </h2>
           <h2 className="d-flex gap-3 text-primary">TaskDuty</h2>
          <p className="d-flex w-50 h-60 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et, at
              platea tempus duis non eget. Hendrerit tortor fermentum bibendum
              mi nisl semper porttitor. Nec accumsan.</p>
            <div>
            <button className=" d-flex bg-primary border-0 rounded-3 py- text-white">
          Go to My Tasks
        </button>
            </div>
          </div>

          <div className="py-0 my-2">
            <img src={Homepageimg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
  }
export default Home;
