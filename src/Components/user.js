import React, { useEffect } from 'react';

const User = ({ user, setUser }) => {
    const fetchData = async () => {
        try {
          const response = await fetch('https://mocki.io/v1/4288cac4-bfcc-4cde-a976-b5b1c7ccd842',
          {
              method: 'GET',
          });
          const data = await response.json(); // Your API call here
          setUser(data); // Dispatch action to store user data in Redux
        } catch (error) {
          console.log(error);
        }
      };

     


useEffect(()=>{
    fetchData()
}, [])


  return (
    <div>
      {user?.name}
      {user?.age}
      {user?.gender}

    <button onClick={fetchData} >Button</button>
    </div>
  );
};

export default User;