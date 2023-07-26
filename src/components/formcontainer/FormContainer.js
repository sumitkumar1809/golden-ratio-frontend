import axios from 'axios';
import React, { useState } from 'react';
import swal from 'sweetalert';
import { API_URL } from '../../config';
import {
  ContactThumbnail1,
  ContactThumbnail2,
  ContactThumbnail3,
  ContactThumbnail4,
} from '../../images';
import { ContainerCustom } from '../../styles/Utils.styled';
import {
  FormChooser,
  FormChooserItem,
  FormContainerWrapper,
  FormHolder,
  FormWrapper,
} from './FormContainer.styled';

const FormContainer = () => {
  const [form, setForm] = useState(1);
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };
  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // create new object with type and values
    const { name, email, message } = values;
    const data = {
      type: form,
      name,
      email,
      message,
    };
    // send to server

    try {
      await axios.post(`${API_URL}contact`, data);
      setValues(initialValues);
      setLoading(false);
      swal('Success', 'Your message has been sent', 'success');
    } catch (error) {
      swal('Error', 'Something went wrong', 'error');
    }
  };

  const handleChange = (e) => {
    // change the state value of the input by name
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ContainerCustom>
      <FormContainerWrapper>
        <FormChooser>
          {form === 1 ? (
            <FormChooserItem active onClick={() => setForm(1)}>
              Sales and Distribution Enquiry
            </FormChooserItem>
          ) : (
            <FormChooserItem onClick={() => setForm(1)}>
              Sales and Distribution Enquiry
            </FormChooserItem>
          )}
          {form === 2 ? (
            <FormChooserItem active onClick={() => setForm(2)}>
              Marketing Enquiry
            </FormChooserItem>
          ) : (
            <FormChooserItem onClick={() => setForm(2)}>
              Marketing Enquiry
            </FormChooserItem>
          )}
          {form === 3 ? (
            <FormChooserItem active onClick={() => setForm(3)}>
              Content Pitch
            </FormChooserItem>
          ) : (
            <FormChooserItem onClick={() => setForm(3)}>
              Content Pitch
            </FormChooserItem>
          )}
          {form === 4 ? (
            <FormChooserItem active onClick={() => setForm(4)}>
              Jobs
            </FormChooserItem>
          ) : (
            <FormChooserItem onClick={() => setForm(4)}>Jobs </FormChooserItem>
          )}
        </FormChooser>

        <FormWrapper>
          <div>
            {form === 1 && (
              <img src={ContactThumbnail1} alt='Contact Thumbnail' />
            )}
            {form === 2 && (
              <img src={ContactThumbnail2} alt='Contact Thumbnail' />
            )}
            {form === 3 && (
              <img src={ContactThumbnail3} alt='Contact Thumbnail' />
            )}
            {form === 4 && (
              <img src={ContactThumbnail4} alt='Contact Thumbnail' />
            )}
          </div>
          <FormHolder onSubmit={(e) => handleSubmit(e)}>
            <input
              type='text'
              required
              placeholder='Your Name'
              name='name'
              value={values.name}
              onChange={(e) => handleChange(e)}
            />
            <input
              type='email'
              required
              placeholder='Your Email ID'
              name='email'
              value={values.email}
              onChange={(e) => handleChange(e)}
            />
            <textarea
              required
              placeholder='Enter Your Message'
              minLength={15}
              name='message'
              value={values.message}
              onChange={(e) => handleChange(e)}></textarea>
            {!loading ? (
              <button type='submit'>Submit Now</button>
            ) : (
              <button type='disabled' disabled>
                Loading...
              </button>
            )}
          </FormHolder>
        </FormWrapper>
      </FormContainerWrapper>
    </ContainerCustom>
  );
};

export default FormContainer;
