import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCounter, startNewEvent, viewEvent } from "../redux/newEvent";
import Style from "../Admin/CreateEvent.module.css";


const style = {
  width: "250px",
};

const AdminMenu = () => {
  const dispatch = useDispatch();

  const createNewEvent = useSelector((state) => state);
  console.log(createNewEvent.newEvent.createEvent);

  return (
    <>
      <div className={Style.admin}>
        <div className="mt-5  text-success">
          <a className={Style.loginstyle} href="/">
            <i
              className={`fa-solid fa-house fa-xl mx-1 my-2 ${Style.icons}`}
              style={{ color: "green" }}
            ></i>
            <h5 className={`fw-bold ${Style.menuactions}`}>Home</h5>
          </a>
        </div>
        <div
          onClick={() => dispatch(startNewEvent())}
          className={`mt-5  ${Style.loginstyle}`}
        >
          <i
            className="icons fa-regular fa-calendar-days fa-2xl mx-1 my-2"
            style={{ color: "green" }}
          ></i>
          <h5 className="fw-bold menu-actions">New Events</h5>
        </div>
        <div
          onClick={() => dispatch(addCounter())}
          className={`mt-5  ${Style.loginstyle}`}
        >
          <i
            className={`${Style.icons} fa-solid fa-users fa-2xl mx-1 my-3`}
            style={{ color: "green" }}
          ></i>
          <h5 className={`fw-bold ${Style.menuactions}`}>Add Counters</h5>
        </div>
        <div
          onClick={() => dispatch(viewEvent())}
          className={`mt-5  ${Style.loginstyle}`}
        >
          <i
            className={`${Style.icons} fa-solid fa-eye fa-xl mx-1 my-2`}
            style={{ color: "green" }}
          ></i>
          <h5 className={`fw-bold ${Style.menuactions}`}>View Events</h5>
        </div>
        <div className="mt-5  text-success ">
          <a className={Style.loginstyle} href="/counterlogin">
            <i
              className={`${Style.icons} fa-solid fa-right-to-bracket fa-2xl mx-1 my-4`}
              style={{ color: "green" }}
            ></i>
            <h5 className={`fw-bold ${Style.menuactions}`}>Counter LogIn</h5>
          </a>
        </div>
        <div className="mt-5  text-success">
          <a className={Style.loginstyle} href="/countcoordinatorlogin">
            <i
              className={`${Style.icons} fa-solid fa-right-to-bracket fa-2xl mx-1 my-4`}
              style={{ color: "green" }}
            ></i>
            <h5 className={`fw-bold ${menu-actions}`}>Count-Coodinator</h5>
          </a>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
