import React from "react";

const Card = () => {
  return (
    <div>
      <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
        <img
          src="..."
          className="card-img-top"
          alt="..."
          style={{ height: "120px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">card title</h5>
          <p className="card-text">
            This is some random text. This is description.
          </p>
          <div className="container w-100 p-0" style={{ height: "38px" }}>
            <select className="m-2 h-100 w-20 bg-success text-black rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 w-20 bg-success text-black rounded">
              <option value="half">half</option>
              <option value="full">full</option>
            </select>
            <div className=" d-inline ms-2 h-100 w-20 fs-5">totalPrice</div>
          </div>
          {/* <button className={`btn btn-danger justify-center ms-2 ${btnEnable ? "" : "disabled"}`} onClick={handleRemoveCart}>Remove</button> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
