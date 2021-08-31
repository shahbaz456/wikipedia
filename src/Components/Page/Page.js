import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../Loading";
import { GrPowerReset } from "react-icons/all";

export default function Page({ myRef }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.search);
  return data.isLoading ? (
    <h2>
      <Loading />
    </h2>
  ) : (
    data.title && (
      <div ref={myRef}>
        <button className="btnn" onClick={() => dispatch({ type: "RESET" })}>
          <GrPowerReset color="white" />
        </button>
        <h3> page ID: {data.pageId}</h3>
        <h3>Title: {data.title}</h3>
        <p>{data.para}</p>
      </div>
    )
  );
}
