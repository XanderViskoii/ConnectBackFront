import React from 'react';
import { useState } from 'react';
import '../RegistrationForm.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    step: 1,
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    profilePicture: null,
    enrollment: '', // Hidden enrollment field
    contact: '',
    dob: '',
    currentYear: '',
    
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'profilePicture' ? files[0] : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.step === 1) {
      if (!formData.username.trim()) {
        newErrors.username = 'Username is required';
      }

      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^\S+@xyzkumar\.ac\.in$/.test(formData.email)) {
        newErrors.email = 'Email must be from @xyzkumar.ac.in domain';
      }

      if (formData.enrollment.trim() !== '' && !/^\d{4}$/.test(formData.enrollment)) {
        newErrors.enrollment = 'Enrollment must be a 4-digit number';
      }

      if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters long';
      }

      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    } else if (formData.step === 2) {
      // Validation for optional fields in step 2
      // For example, contact, dob, currentYear
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateForm()) {
      setFormData((prevData) => ({ ...prevData, step: prevData.step + 1 }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (formData.step === 1) {
      // Additional processing for step 1

      if (validateForm()) {
        // Proceed to step 2
        handleNextStep();
      }
    } else if (formData.step === 2) {
      // Send the form data to the server for registration
      // You can use fetch or Axios to make a POST request to your server

      const formDataToSend = new FormData();
      formDataToSend.append('username', formData.username);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('password', formData.password);
      formDataToSend.append('picture', formData.profilePicture);
      formDataToSend.append('enrollment', formData.enrollment);

      // Include other optional fields in the formDataToSend as needed

      fetch('/auth/register', {
        method: 'POST',
        body: formDataToSend,
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the registration response here
          console.log(data);
        })
        .catch((error) => {
          // Handle errors here
          console.error(error);
        });
    }
  };

  return (
    <div className="registration-form">
      <h2>Register for CAMEO</h2>
      <form onSubmit={handleSubmit}>
        {formData.step === 1 && (
          <div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
              {errors.username && <span className="error">{errors.username}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              {errors.confirmPassword && (
                <span className="error">{errors.confirmPassword}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="enrollment">Enrollment</label>
              <input
                type="text"
                id="enrollment"
                name="enrollment"
                value={formData.enrollment}
                onChange={handleInputChange}
              />
              {errors.enrollment && <span className="error">{errors.enrollment}</span>}
            </div>
          </div>
        )}
        {formData.step === 2 && (
          <div>
            <div className="form-group">
              <label htmlFor="contact">Contact</label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
              />
              {/* Validation and error handling for contact field */}
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
              />
              {/* Validation and error handling for dob field */}
            </div>
            <div className="form-group">
              <label htmlFor="currentYear">Current Year Studying</label>
              <input
                type="text"
                id="currentYear"
                name="currentYear"
                value={formData.currentYear}
                onChange={handleInputChange}
              />
              {/* Validation and error handling for currentYear field */}
            </div>
          </div>
        )}
        <button type="button" onClick={handleNextStep}>
          Next
        </button>
        {formData.step === 2 && (
          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        )}
      </form>
    </div>
  );
}

export default RegistrationForm;
