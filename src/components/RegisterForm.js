import React, { useState, useEffect, useReducer } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import foodMgmtApi from '../api';
import { logIn } from '../actions';

import './RegisterForm.css';

const NOT_SELECTED = 'NOT_SELECTED';
const ORG_NAME = 'ORG_NAME';
const EMAIL = 'EMAIL';
const PASSWORD = 'PASSWORD';
const IS_NGO = 'IS_NGO';
const CITY = 'CITY';
const STATE = 'STATE';
const PINCODE = 'PINCODE';
const ADDRESS = 'ADDRESS';
const PHONE_NUMBER = 'PHONE_NUMBER';
const PROFILE_IMG_URL = 'PROFILE_IMG_URL';

const DEFAULT_PROFILE_IMG_URL =
  'https://res.cloudinary.com/dc2o7coc1/image/upload/v1608568048/food-waste-mgmt/Username.png';
const MESS_PROFILE_IMG_URL =
  'https://res.cloudinary.com/dc2o7coc1/image/upload/v1608633900/food-waste-mgmt/mess.jpg';
const NGO_PROFILE_IMG_URL =
  'https://res.cloudinary.com/dc2o7coc1/image/upload/v1608633900/food-waste-mgmt/ngo.jpg';

function registerFormReducer(state, action) {
  switch (action.type) {
    case EMAIL:
      return { ...state, email: action.payload };

    case PASSWORD:
      return { ...state, password: action.payload };

    case ORG_NAME:
      return { ...state, orgName: action.payload };

    case IS_NGO:
      return { ...state, isNGO: action.payload };

    case CITY:
      return { ...state, city: action.payload };

    case STATE:
      return { ...state, state: action.payload };

    case PINCODE:
      return { ...state, pincode: action.payload };

    case ADDRESS:
      return { ...state, address: action.payload };

    case PHONE_NUMBER:
      return { ...state, phoneNumber: action.payload };

    case PROFILE_IMG_URL:
      return { ...state, profileImageUrl: action.payload };

    default: {
      // helps us avoid typos!
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const stateOptions = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttarakhand',
  'Uttar Pradesh',
  'West Bengal'
];

const categoryValue = (isNGO) => {
  if (typeof isNGO === 'boolean') {
    return isNGO ? 'NGO' : 'Mess';
  }
  return NOT_SELECTED;
};

const RegisterForm = (props) => {
  const [formState, dispatch] = useReducer(registerFormReducer, {
    email: '',
    password: '',
    orgName: '',
    isNGO: null,
    address: '',
    phoneNumber: '',
    city: '',
    state: '',
    pincode: '',
    profileImageUrl: ''
  });

  const [uploadWidget, setUploadWidget] = useState(null);

  const history = useHistory();

  useEffect(() => {
    setUploadWidget(
      window.cloudinary.createUploadWidget(
        {
          cloudName: 'dc2o7coc1',
          uploadPreset: 'ow32ylc6'
        },
        async (err, result) => {
          if (result.event === 'success') {
            console.log(result.info.secure_url);
            dispatch({
              type: PROFILE_IMG_URL,
              payload: result.info.secure_url
            });
          }
        }
      )
    );
  }, []);

  const showWidget = () => {
    uploadWidget.open();
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    let { profileImageUrl, isNGO, email, password } = formState;
    if (profileImageUrl.length === 0) {
      profileImageUrl = isNGO ? NGO_PROFILE_IMG_URL : MESS_PROFILE_IMG_URL;
    }

    foodMgmtApi
      .post('/register', { ...formState, profileImageUrl })
      .then(() => {
        return foodMgmtApi.post('/login', {
          email,
          password
        });
      })
      .then((res) => {
        const {
          tokens: { access_token, refresh_token },
          orgName,
          isNGO
        } = res.data;

        sessionStorage.setItem('accessToken', access_token);
        sessionStorage.setItem('refreshToken', refresh_token);
        props.logIn({ isNGO, orgName });

        history.push('/dashboard');
      })
      .catch((err) => console.log(err));

    console.log(formState);
  };

  const {
    email,
    password,
    orgName,
    isNGO,
    address,
    phoneNumber,
    city,
    state,
    pincode,
    profileImageUrl
  } = formState;

  return (
    <>
      <div style={{ paddingBottom: '15px' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="mt-3">
              <div className="border border-success rounded p-5">
                <div className="form-group">
                  <label htmlFor="inputName">Organization Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    placeholder="ABC"
                    value={orgName}
                    onChange={(e) =>
                      dispatch({ type: ORG_NAME, payload: e.target.value })
                    }
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      value={email}
                      onChange={(e) =>
                        dispatch({ type: EMAIL, payload: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                      value={password}
                      onChange={(e) =>
                        dispatch({ type: PASSWORD, payload: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                    value={address}
                    onChange={(e) =>
                      dispatch({ type: ADDRESS, payload: e.target.value })
                    }
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="exampleFormControlSelect1">
                      Select Category
                    </label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      value={categoryValue(isNGO)}
                      onChange={(e) =>
                        dispatch({
                          type: IS_NGO,
                          payload: e.target.value === 'NGO'
                        })
                      }
                    >
                      <option value={NOT_SELECTED}>Choose...</option>
                      {['Mess', 'NGO'].map((category) => (
                        <option value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPNumber">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPNumber"
                      value={phoneNumber}
                      onChange={(e) =>
                        dispatch({
                          type: PHONE_NUMBER,
                          payload: e.target.value
                        })
                      }
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label htmlFor="inputCity">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                      value={city}
                      onChange={(e) =>
                        dispatch({ type: CITY, payload: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputState">State</label>
                    <select
                      id="inputState"
                      className="form-control"
                      value={state === '' ? NOT_SELECTED : state}
                      onChange={(e) =>
                        dispatch({ type: STATE, payload: e.target.value })
                      }
                    >
                      <option value={NOT_SELECTED}>Choose...</option>
                      {stateOptions.map((option) => (
                        <option value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputPin">PIN Code</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPin"
                      value={pincode}
                      onChange={(e) =>
                        dispatch({ type: PINCODE, payload: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="form-row image-class">
                  <div className="form-group col-md-6">
                    <label htmlFor="exampleFormControlSelect1">
                      Upload photograph of your organization
                    </label>
                  </div>
                  <div className="form-group col-md-6">
                    <button onClick={showWidget}>Click here to upload</button>
                    {/* <label htmlFor="inputPNumber">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPNumber"
                      value={phoneNumber}
                      onChange={(e) =>
                        dispatch({
                          type: PHONE_NUMBER,
                          payload: e.target.value
                        })
                      }
                    /> */}
                  </div>
                </div>
                <div className="form-row">
                  <div
                    className="form-group col-md-6"
                    style={{ margin: 'auto' }}
                  >
                    <img
                      src={
                        profileImageUrl.length > 0
                          ? profileImageUrl
                          : DEFAULT_PROFILE_IMG_URL
                      }
                      className="image-dimension"
                    ></img>
                  </div>
                </div>
                <button
                  onClick={onFormSubmit}
                  className="btn btn-primary btn-lg mt-4"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(null, { logIn })(RegisterForm);
