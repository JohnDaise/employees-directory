import React from "react";
import "../styles/DataBody.css";

function DataBody({ users }) {
  function formatDate(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
  }

  return (
    <tbody>
      {users[0] !== undefined && users[0].name !== undefined ? (
        users.map(({ id, name, image, occupation, location, email, phone, dob }) => {
          return (
            <tr key={id}>
              <td data-th="Image" className="align-middle">
                <img
                  src={image}
                  alt={"profile image for " + name}
                  className="img-thumbnail"
                />
              </td>
              <td data-th="Name" className="name-cell align-middle">
                {name}
              </td>
              <td data-th="Phone" className="align-middle">
                {phone}
              </td>
              <td data-th="Location" className="align-middle">
                <a href={"mailto:" + email} target="__blank">
                  {email}
                </a>
              </td>
              <td data-th="Location" className="align-middle">
                {formatDate(dob)}
              </td>
            </tr>
          );
        })
      ) : (
        <></>
      )}
    </tbody>
  );
}

export default DataBody;
