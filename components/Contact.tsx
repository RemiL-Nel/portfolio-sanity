import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) =>
    (window.location.href = `mailto:remilagr02@gmail?subject=${formData?.subject}&body=Hi, my name is ${formData?.name}. ${formData?.message} (${formData?.email})`);
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got what you need.{" "}
          <span className="decoration-[#61DBFB]/50 underline">Let's Talk</span>
        </h4>
        <div className="flex items-center space-x-5 justify-center">
          <PhoneIcon className="text-[#61DBFB] h-7 w-7 animate-pulse" />
          <p className="text-2xl">+33656666727</p>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <MapPinIcon className="text-[#61DBFB] h-7 w-7 animate-pulse" />
          <p className="text-2xl">123 Developer Lane</p>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <EnvelopeIcon className="text-[#61DBFB] h-7 w-7 animate-pulse" />
          <p className="text-2xl">remilagr02@gmail.com</p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-fit mx-auto"
      >
        <div className="flex space-x-2">
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            className="contactInput"
          />
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="contactInput"
          />
        </div>
        <input
          {...register("subject")}
          type="text"
          placeholder="Subject"
          className="contactInput"
        />
        <textarea
          {...register("message")}
          placeholder="Message"
          className="contactInput"
        />
        <button
          type="submit"
          className="bg-[#61DBFB]/50 py-5 px-10 rounded-md text-black  font-bold text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
