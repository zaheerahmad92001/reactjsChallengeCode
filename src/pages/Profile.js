import React, { useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import {
  sendUpdateUserProfileRequest,
  sendGetUserProfileRequest,
} from "../services/codeChallenge";
import Sectors from "../components/sectors";
import Typography from "../components/Typography";
import { useSelector, useDispatch } from "react-redux";
import { updateUserInfo } from "../redux-config/reducers/user";

function Profile() {
  useEffect(() => {
    const loadUserData = async () => {
      const res = await sendGetUserProfileRequest();
      // not using any token. suppose i have single user in database
    };
    loadUserData();
  }, []);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const schema = yup.object({
    name: yup
      .string()
      .min(2, "Must be at least 2 characters long")
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    sectors: yup.string().required(),
    checkbox: yup.boolean().isTrue().required("Required"),
  });

  const handleSubmitForm = async (values) => {
    alert("caa");
    try {
      
      // store data into redux temporarily  
      dispatch(
        updateUserInfo({
          name: values.name,
          sectors: values.sectors,
        })
      );
      // we have to use api cal here and will update redux store. when we use api call then save api response in redux store 
      const res = await sendUpdateUserProfileRequest(values);
      // suppose getting api response in success then update store

    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmitForm}
      initialValues={{
        name: user.name,
        checkbox: false,
        sectors: user.sectors,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <div id="app">
          <section id="services">
            <div className="flex-container">
              <div className="showcase-form card">
                <p className="text-xl font-mono">Edit Form</p>
                <form>
                  <label className="mt-10 font-mono">Name:</label>
                  <input
                    name="name"
                    className="sm:ml-0 md:ml-1 py-0 px-2 w-1/4 font-mono"
                    type={"text"}
                    placeholder={"Enter your name"}
                    value={`${values.name}`}
                    onChange={handleChange}
                  />
                  <Typography error={errors.name} touched={touched.name} />

                  <label className="font-mono">Sectors:</label>
                  <Sectors
                    values={values}
                    defaultValue={values.sectors}
                    handleChange={handleChange}
                  />
                  <Typography
                    error={errors.sectors}
                    touched={touched.sectors}
                  />

                  <input type="submit" value="Submit" onClick={handleSubmit} />
                </form>
              </div>
            </div>
          </section>
        </div>
      )}
    </Formik>
  );
}
export default Profile;
