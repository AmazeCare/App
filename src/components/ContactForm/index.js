import React from 'react';
import { useForm } from 'react-hook-form';

function ContactForm() {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data)

  return (
    <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">
        <div> NAME </div>
        <input {...register('name', { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
      </label>
      <label htmlFor="email">
        <div> EMAIL ADDRESS </div>
        <input {...register('email', { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
      </label>
      <label htmlFor="contact">
        <div> PREFFERED METHOD OF CONTACT </div>
        <input {...register('contact', { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
      </label>
      <label htmlFor="care">
        <div> TYPE OF CARE </div>
        <input {...register('care', { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
      </label>
      <label htmlFor="aboutus">
        <div> HOW DID YOU HEAR ABOUT US </div>
        <input {...register('aboutus', { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
      </label>
      <label htmlFor="kind">
        <div> WHAT KIND OF CARE ARE YOU LOOKING FOR </div>
        <input {...register('kind', { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
      </label>
      <input type="submit" className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0" />
    </form>
  )
}

export default ContactForm
