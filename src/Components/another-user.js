// UserProfile.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAnotherUser } from '../Redux/Actions/anotherUserActions';

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetch('https://mocki.io/v1/4288cac4-bfcc-4cde-a976-b5b1c7ccd842',
        {
            method: 'GET',
        }); // Your API call here
        const response = await userData.json();
        // console.log(response, "response");
        dispatch(setAnotherUser(response)); // Dispatch action to store user data in Redux
      } catch (error) {
        // Handle errors
      }
    };

    fetchData();
  }, [dispatch]);
console.log(user, "User");
  return (
    <div>
      {/* Render or use user data in this component */}
      {user ? (
        <div>
          <h2>User Profile:</h2>
          <p>Name: {user.user?.name}</p>
          <p>Email: {user.user?.email}</p>
          {/* Display other relevant user data */}
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
  );
};

export default UserProfile;
