import React from "react";
import { features } from "../data/Data";

export default function Features() {
  return (
    <>
      <div className="container-fluid featurs py-5">
        <div className="container py-5">
          <div className="row g-4">
            {features.map((val, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="featurs-item text-center rounded bg-light p-4">
                  <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                    {val.icon}
                  </div>
                  <div className="featurs-content text-center">
                    <h5>{val.title}</h5>
                    <p className="mb-0">{val.descript}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
