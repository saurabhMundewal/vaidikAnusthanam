// src/features/policies/PrivacyPolicyComponent.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPrivacyPolicy } from '../features/privacyPolicySlice';

const PrivacyPolicyComponent = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.privacyPolicy);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPrivacyPolicy());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Privacy Policy</h1>
      <div>{data}</div>
    </div>
  );
};

export default PrivacyPolicyComponent;
