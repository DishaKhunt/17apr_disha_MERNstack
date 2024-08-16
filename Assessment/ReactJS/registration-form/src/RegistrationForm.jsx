import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function Validation() {
  // Destructuring of form data
  const [formdata, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    address: "",
    town: "",
    region: "",
    country: "",
    postcode: ""
  });

  // Destructuring of errors
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const errors = {};

    if (!formdata.email) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailRegex.test(formdata.email)) {
        errors.email = 'Please enter a valid email';
      }
    }

    if (!formdata.phone) {
      errors.phone = 'Please enter your phone number';
    }

    if (!formdata.password) {
      errors.password = 'Please enter your password';
    } else if (formdata.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (!formdata.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (formdata.confirmPassword !== formdata.password) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (!formdata.firstName) {
      errors.firstName = 'Please enter your first name';
    } else if (formdata.firstName.length > 4) {
      errors.firstName = 'First name must be 4 characters or less';
    }

    if (!formdata.lastName) {
      errors.lastName = 'Please enter your last name';
    } 

    if (!formdata.address) {
      errors.address = 'Please enter your address';
    }

    if (!formdata.town) {
      errors.town = 'Please enter your town';
    }

    if (!formdata.region) {
        errors.region = 'Please enter your region'; 
      }
  

    if (!formdata.country) {
      errors.country = 'Please enter your country';
    }

    if (!formdata.postcode) {
      errors.postcode = 'Please enter your postcode';
    }

    return errors;
  };

  // Handle onChange event
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    if (Object.keys(errors).length === 0) {
      Swal.fire({
        title: "Thanks",
        text: "Data successfully added",
        icon: "success"
      });

      console.log(formdata);
      e.target.reset();
      setFormData({}); // Reset form data
    } else {
      setErrors(errors);
    }
  };

  return (
    <div>
      <Container className='p-5 shadow mt-5 w-50 mx-auto bg-secondary bg-opacity-10'>
        <p>Registration here</p>
        <h2>User Registration</h2>
        <p>Fields marked with <span className='text-danger'>*</span> are required.</p>
        <form onSubmit={handleSubmit}>
          

          <div className='form-group mt-3'>
            <label htmlFor='email' className='fw-bold'>Email <span className='text-danger'>*</span></label>
            <input
              type='text'
              name='email'
              value={formdata.email}
              onChange={handleChange}
              className='form-control'
              placeholder='Enter your email'
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>

          <div className='form-group mt-3'>
            <label htmlFor='phone' className='fw-bold'>Phone  <span className='text-danger'>*</span></label>
            <input
              type='text'
              name='phone'
              value={formdata.phone}
              onChange={handleChange}
              placeholder='Enter your phone number'
              className='form-control'
            />
            {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
          </div>

          <div className='form-group mt-3'>
            <label htmlFor='password' className='fw-bold'>Password  <span className='text-danger'>*</span></label>
            <input
              type='password'
              name='password'
              value={formdata.password}
              onChange={handleChange}
              placeholder='Enter your password'
              className='form-control'
            />
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
          </div>

          <div className='form-group mt-3'>
            <label htmlFor='confirmPassword' className='fw-bold'>Confirm Password  <span className='text-danger'>*</span></label>
            <input
              type='password'
              name='confirmPassword'
              value={formdata.confirmPassword}
              onChange={handleChange}
              placeholder='Confirm your password'
              className='form-control'
            />
            {errors.confirmPassword && (
              <p style={{ color: "red" }}>{errors.confirmPassword}</p>
            )}
          </div>

          <div className='form-group mt-3'>
            <label htmlFor='firstName' className='fw-bold'>First Name  <span className='text-danger'>*</span></label>
            <input
              type='text'
              name='firstName'
              value={formdata.firstName}
              onChange={handleChange}
              placeholder='Enter your first name'
              className='form-control'
            />
            {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}
          </div>

          <div className='form-group mt-3'>
            <label htmlFor='lastName' className='fw-bold'>Last Name  <span className='text-danger'>*</span></label>
            <input
              type='text'
              name='lastName'
              value={formdata.lastName}
              onChange={handleChange}
              placeholder='Enter your last name'
              className='form-control'
            />
            {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
          </div>

          <div className='form-group mt-3'>
            <label htmlFor='address' className='fw-bold'>Address  <span className='text-danger'>*</span></label>
            <input
              type='text'
              name='address'
              value={formdata.address}
              onChange={handleChange}
              placeholder='Enter your address'
              className='form-control'
            />
            {errors.address && <p style={{ color: "red" }}>{errors.address}</p>}
          </div>

          <div className='form-group mt-3'>
            <label htmlFor='town' className='fw-bold'>Town </label>
            <input
              type='text'
              name='town'
              value={formdata.town}
              onChange={handleChange}
              placeholder='Enter your town'
              className='form-control'
            />
            {errors.town && <p style={{ color: "red" }}>{errors.town}</p>}
          </div>

          <div className='form-group mt-3'>
            <label htmlFor='region' className='fw-bold'>Region <span className='text-danger'>*</span></label>
            <input
              type='text'
              name='region'
              value={formdata.region}
              onChange={handleChange}
              placeholder='Enter your region'
              className='form-control'
            />
            {errors.region && <p style={{ color: "red" }}>{errors.region}</p>}
          </div>

          <div className='form-group mt-3'>
            <label htmlFor='postcode' className='fw-bold'>Postcode  <span className='text-danger'>*</span></label>
            <input
              type='text'
              name='postcode'
              value={formdata.postcode}
              onChange={handleChange}
              placeholder='Enter your postcode'
              className='form-control'
            />
            {errors.postcode && <p style={{ color: "red" }}>{errors.postcode}</p>}
          </div>

          <div className='form-group mt-3'>
            <label htmlFor='country' className='fw-bold'>Country  <span className='text-danger'>*</span></label>
            <input
              type='text'
              name='country'
              value={formdata.country}
              onChange={handleChange}
              placeholder='Enter your country'
              className='form-control'
            />
            {errors.country && <p style={{ color: "red" }}>{errors.country}</p>}
          </div>

      

          <div className='form-group mt-3'>
            <input
              type='submit'
              value="Register"
              className='btn btn-success fw-bold text-white'
            />
          </div>
        </form>
      </Container>
    </div>
  )
}
