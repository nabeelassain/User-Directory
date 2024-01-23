import React from "react";
import "./UserDetailsCard.css";

const UserDetailsSection = ({ users, userId, posts }) => {
  const currentUser = users.find((user) => user.id === parseInt(userId));

  if (!currentUser) {
    return <div>User not found</div>;
  }

  const { street, suite, city, zipcode, geo } = currentUser.address;

  return (
    <div>
      <span className="section-title">
        <h2>User Details</h2>
      </span>
      <div className="card">
        <div className="card-section">
          <div className="card-section-left">
            <div>
              <strong>Name:</strong> {currentUser.name}
            </div>
            <div>
              <strong>Username:</strong> {currentUser.username}
            </div>
            <div>
              <strong>Catch Phrase:</strong> {currentUser.catchPhrase}
            </div>
          </div>

          <div className="card-section-right">
            <div>
              <strong>Street:</strong> {street}
            </div>
            <div>
              <strong>Suite:</strong> {suite}
            </div>
            <div>
              <strong>City:</strong> {city}
            </div>
            <div>
              <strong>Zipcode:</strong> {zipcode}
            </div>
            <div>
              <strong>Geo:</strong> {`${geo.lat}, ${geo.lng}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsSection;
