import React from "react";
import "./table.css";

const TabeList = (props) => {
  const { columnData } = props;

  const handleCall = () => {
    console.log("I am being called");
  };
  return (
    <div className="container">
      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Image</th>
        </tr>

        {columnData &&
          columnData.map((item, index) => {
            const { id, title, url } = item;
            return (
              <tr>
                <td>
                  <p onClick={handleCall} style={{ cursor: "pointer" }}>
                    <input type="checkbox" />
                    <span> {id}</span>
                  </p>
                </td>
                <td>{title}</td>
                <td>
                  <img className="imageStyle" src={url} alt="profile" />
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default TabeList;
