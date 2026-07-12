import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { nanoid } from "nanoid";

const Productcards = ({ updateData, setProduct, product, setToggle }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: updateData,
  });

  let formSubmit = (data) => {
    if (updateData) {

      setProduct(prev=>{
        return prev.map(value=>{
          return value.id===updateData.id?{...data}:value;
        });
      });

    } else {
      let arr = [...product, { ...data, id: nanoid() }];
      setProduct(arr);
      localStorage.setItem("products", JSON.stringify(arr));
    }

    reset();
    console.log(JSON.parse(localStorage.getItem("products")));

    setToggle((prev) => !prev);
  };

  return (
    <div className="w-100 rounded-3xl bg-slate-200 p-8 shadow-2xl">
      <h2 className="text-3xl font-bold text-slate-900">Add Product</h2>

      <p className="mt-2 text-sm text-slate-500">Fill in the details below.</p>

      <form
        className="mt-8 flex flex-col gap-5"
        onSubmit={handleSubmit(formSubmit)}
      >
        <input
          {...register("name", { required: "Invalid Name" })}
          type="text"
          placeholder="Product Name"
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
        />

        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}

        <input
          {...register("email", {
            required: "Invalid email",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Email Invalid",
            },
          })}
          type="email"
          placeholder="Email"
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
        />

        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}

        <input
          {...register("mobile", {
            required: "Invalid number",
            minLength: {
              value: 10,
              message: "Minimum 10 digits",
            },
            maxLength: {
              value: 10,
              message: "Maximum 10 digits",
            },
          })}
          type="number"
          placeholder="Mobile Number"
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
        />

        {errors.mobile && (
          <p className="text-sm text-red-500">{errors.mobile.message}</p>
        )}

        <input
          {...register("image", { required: "Invaid URL" })}
          type="url"
          placeholder="Image URL"
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
        />

        {errors.image && (
          <p className="text-sm text-red-500">{errors.image.message}</p>
        )}

        <button className="mt-2 rounded-xl bg-violet-600 py-3 font-semibold text-white transition-all duration-200 hover:bg-violet-500 active:scale-95">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Productcards;
