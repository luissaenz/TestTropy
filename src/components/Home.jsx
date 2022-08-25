import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [formData, setFormData] = useState({ userProfile: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.userProfile !== '') {
      navigate(`users/${formData.userProfile}`);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>GitHub User</Form.Label>
          <Form.Control
            type="text"
            name="userProfile"
            placeholder="Enter a GitHub User"
            onChange={handleChange}
          />

          {!formData.userProfile ? (
            <Form.Text className="text-muted">Required field.</Form.Text>
          ) : (
            ''
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Search profile
        </Button>
      </Form>
    </div>
  );
};

export default Home;
