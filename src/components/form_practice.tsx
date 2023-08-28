import React, { useState } from "react";
import { useForm } from "react-hook-form";
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  password1: string;
  extraError?: string;
};
// interface FormData {
//   [key: string]: string;
//   }
function ToDoListPractice() {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>();
  //handleSubmit = validation기능
  //data가 유효하다면 onValid호출
  const onValid = (data: FormData) => {
    if (data.password !== data.password1) {
      setError(
        "password",
        {
          type: "require",
          message: "Password are not the same",
        },
        { shouldFocus: true }
      );
      // setError("extraError", { message: "Server dwon" });
    }
  };
  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit(onValid)}
    >
      <span>{errors?.extraError?.message}</span>
      <input
        {...register("email", {
          required: "Email is Required",
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
            message: "Only naver.com emails allowed",
          },
        })}
        placeholder="Email"
      />
      <span>{errors?.email?.message}</span>

      <input
        {...register("firstName", {
          required: "TEST",
          validate: (value) => (value.includes("kk") ? "true" : "fasle"),
        })}
        placeholder="First Name"
      />
      {errors?.firstName?.message}
      <input
        {...register("lastName", { required: true })}
        placeholder="Last Name"
      />
      <input
        {...register("username", { required: true })}
        placeholder="Username"
      />
      <input
        {...register("password", { required: true })}
        placeholder="Password"
      />
      <input
        {...register("password1", { required: true })}
        placeholder="Password1"
      />
      <span>{errors?.password?.message}</span>

      <button>Add</button>
    </form>
  );
}

export default ToDoListPractice;
