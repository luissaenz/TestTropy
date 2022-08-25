import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import UserDetail from './UserDetail';
import Loading from './Loading';
import NotFound404 from './NotFound404';

const User = () => {
  const params = useParams();
  const userName = params.userName;
  const [userData, setUserData] = useState([]);
  const [LoadingUser, setLoadingUser] = useState(true);
  const [LoadingError, setLoadingError] = useState(false);

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://api.github.com/users/${userName}`,
    })
      .then((res) => {
        setUserData(res.data);
        setLoadingUser(false);
      })
      .catch((error) => {
        setLoadingError(true);
      });
  }, []);

  return (
    <>
      {!LoadingError ? (
        !LoadingUser ? (
          <UserDetail userData={userData} />
        ) : (
          <Loading />
        )
      ) : (
        <NotFound404
          Message="User not found"
          ButtonText="Search New User"
          Path="/"
        />
      )}
    </>
  );
};

export default User;
