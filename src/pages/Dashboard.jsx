import React, { useState } from "react";
import { Link } from "react-router-dom";
import Img from "../assets/image.png";
const Dashboard = () => {
    
    const [selectedCandidate, setSelectedCandidate] = useState(null);
  const allCandidate = [
    { id: 1, partyImg: Img, partyName: "PDP"},
    { id: 2, partyImg: Img, partyName: "APC"},
    { id: 3, partyImg: Img, partyName: "LP"},
    { id: 4, partyImg: Img, partyName: "APGA"},
    { id: 5, partyImg: Img, partyName: "NNPP"},
    { id: 6, partyImg: Img, partyName: "SDP"},
    { id: 7, partyImg: Img, partyName: "YPP"},
    { id: 8, partyImg: Img, partyName: "ADC"},
    { id: 9, partyImg: Img, partyName: "SQI"},
  ];

  const handleSelection = (id) => {
    setSelectedCandidate((prevSelected) => (prevSelected === id ? null : id));
  };
  return (
    <>
      <div>
        
        <div className=" pt-5  container">
          <div className="mt-5 px-3 col-md-6 shadow rounded-5 mx-auto pb-3 ">
            <h5 className="text-center  py-3">CHOOSE YOUR VOTE</h5>

            <div className="rounded-4 py-3 px-3 bg-body-secondary shadow ">
              <div className="">
                <div className="row">
                  {allCandidate.map((item, i) => (
                    <>
                      <div  key={item.id} className="mt-3 row">
                        <div className="col-3">{i + 1}</div>
                        <div className="col-3">
                          <img
                            className="col-5  rounded-5"
                            src={item.partyImg}
                            alt=""
                          />
                        </div>
                        <div className="col-3">{item.partyName}</div>
                        <div className="col-3">
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              role="switch"
                              id={`${item.id}`}
                              checked={selectedCandidate === item.id}
                              onChange={() => handleSelection(item.id)}
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
