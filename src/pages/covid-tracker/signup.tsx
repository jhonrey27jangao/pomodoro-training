import React from "react";
import * as types from "./types";
import { Form, Field, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "../../components/button/button";
import { InputContainer, StyledErrorMessage } from "./styles";

const SignUpForm: React.FC = () => {
  const formikInput = ({ field, props, title, placeholder, id }: any) => (
    <InputContainer>
      <span>{title}</span>
      <input {...field} {...props} id={id} placeholder={placeholder} />
    </InputContainer>
  );

  const intialValues: types.SignUpProps = {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("The above field is required"),
    middleName: Yup.string().required("The above field is required"),
    lastName: Yup.string().required("The above field is required"),
    email: Yup.string()
      .required("The above field is required")
      .email("The above field must be email bro!"),
    userName: Yup.string()
      .required("The above field is required")
      .min(7, "Must be minimum of 7 characters")
      .max(12, "Must be minimum of 12 characters"),
    password: Yup.string()
      .required("The above field is required")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
      .required("The above field is required"),
  });

  return (
    <>
      <Formik
        initialValues={intialValues}
        validationSchema={validationSchema}
        onSubmit={() => {}}
        validateOnBlur={true}
      >
        {(formikBag: any) => (
          <Form>
            <Field
              name="firstName"
              id="firstName"
              component={formikInput}
              placeholder="Ricardo"
              title="Enter your first name:"
            />
            <StyledErrorMessage>
              <ErrorMessage name="firstName" />
            </StyledErrorMessage>
            <Field
              name="middleName"
              id="middleName"
              component={formikInput}
              placeholder="Dance"
              title="Enter your middle name:"
            />
            <StyledErrorMessage>
              <ErrorMessage name="middleName" />
            </StyledErrorMessage>
            <Field
              name="lastName"
              id="lastName"
              component={formikInput}
              placeholder="Milos"
              title="Enter your last name:"
            />
            <StyledErrorMessage>
              <ErrorMessage name="lastName" />
            </StyledErrorMessage>
            <Field
              name="email"
              id="email"
              component={formikInput}
              placeholder="ricardomilos@gmail.com"
              title="Enter your e-mail:"
            />
            <StyledErrorMessage>
              <ErrorMessage name="email" />
            </StyledErrorMessage>
            <Field
              name="userName"
              id="userName"
              component={formikInput}
              placeholder="I<3Ricardo123Milos"
              title="Enter your user name:"
            />
            <StyledErrorMessage>
              <ErrorMessage name="userName" />
            </StyledErrorMessage>
            <Field
              name="password"
              id="password"
              type="password"
              component={formikInput}
              placeholder="**************"
              title="Enter your password:"
            />
            <StyledErrorMessage>
              <ErrorMessage name="password" />
            </StyledErrorMessage>
            <Field
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              component={formikInput}
              placeholder="**************"
              title="confirm your password:"
            />
            <StyledErrorMessage>
              <ErrorMessage name="confirmPassword" />
            </StyledErrorMessage>
            <Button theme="success" onClick={() => formikBag.submitForm()}>
              Sign-Up
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUpForm;
