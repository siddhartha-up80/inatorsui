import Contactaddress from "@/components/inatorscomponents/contact/contactaddress";
import Contactbigmap from "@/components/inatorscomponents/contact/contactbigmap";
import Contactsimple from "@/components/inatorscomponents/contact/contactsimple";
import Contactsmallmap from "@/components/inatorscomponents/contact/contactsmallmap";
import PreviewComponent from "@/components/previewComponent";
import React from "react";

const Page = () => {
  const Types = [
    {
      name: "Contactaddress",
      component: <Contactaddress />,
      installation: `npx shadcn-ui@latest add button textarea input label
`,
      code: `
      "use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react'

const Contactaddress = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = async () => {
    // Use these values to send data to your fake API or perform any desired action
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Message:", message);

    // Reset form fields after submission
   
    const submiturl = "https://jsonplaceholder.typicode.com/posts"; // Replace with your fake API URL
    try {
      const response = await fetch(submiturl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          message,
        }),
      });

      if (response.ok) {
        console.log("Data successfully sent to the server!");
         setFullName("");
         setEmail("");
         setMessage("");

      } else {
        console.error("Failed to send data to the server.");
      }
    } catch (error) {
      console.error("Error while sending data:", error);
    }

  };

  return (
    <div>
      <section className="py-6 shadow-md">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6 shadow-sm">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Fake address, 9999 City</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>123456789</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>contact@business.com</span>
              </p>
            </div>
          </div>
          <form
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
            onSubmit={handleSubmit}
          >
            <Label className="block">
              <span className="my-1">Full name</span>
              <Input
                type="text"
                placeholder="Leroy Jenkins"
                className="block w-full rounded-md shadow-sm focus:ring"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </Label>
            <Label className="block">
              <span className="my-1">Email address</span>
              <Input
                type="email"
                placeholder="leroy@jenkins.com"
                className="block w-full rounded-md shadow-sm focus:ring"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Label>
            <Label className="block">
              <span className="my-1">Message</span>
              <Textarea
                className="block w-full rounded-md focus:ring"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></Textarea>
            </Label>
            <Button type="button" className=" px-8 py-3 text-lg rounded ">
              Submit
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contactaddress
`,
    },
    {
      name: "Contactsimple",
      component: <Contactsimple />,
      installation: `npx shadcn-ui@latest add button textarea input label`,
      code: `"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  category: string;
  message: string;
}

const Contactsimple = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    category: "New component idea",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          category: "New component idea",
          message: "",
        });
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="h-screen w-screen items-center flex justify-center flex-col md:max-w-[40vw] mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold leading-loose tracking-tight sm:text-4xl">
            Feedback
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            If you have requests, suggestions or any other feedback, please
            leave a message below and we&apos;ll get back to you as soon as
            possible.
          </p>
        </div>

        <section className="w-full mt-10">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div className="sm:col-span-2">
              <Label
                htmlFor="name"
                className="block text-sm font-medium leading-5"
              >
                Name (optional)
                <div className="mt-1 rounded-md shadow-sm">
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 rounded-md shadow-sm  "
                  />
                </div>
              </Label>
            </div>
            <div className="sm:col-span-2">
              <Label
                htmlFor="email"
                className="block text-sm font-medium leading-5 w-full"
              >
                Email (optional)
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 mt-1 rounded-md shadow-sm "
                />
              </Label>
            </div>
            <div className="sm:col-span-2">
              <Label
                htmlFor="category"
                className="block text-sm font-medium leading-5"
              >
                Category
                <select
                  id="category"
                  name="category"
                  aria-Label="Category"
                  value={formData.category}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 mt-1 rounded-md shadow-sm border  "
                >
                  <option>New component idea</option>
                  <option>Feature request</option>
                  <option>Feedback</option>
                  <option>Bug report</option>
                  <option>Other</option>
                </select>
              </Label>
            </div>
            <div className="sm:col-span-2">
              <Label
                htmlFor="message"
                className="block text-sm font-medium leading-5"
              >
                Message
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 mt-1 shadow-sm"
                />
              </Label>
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" className="w-full font-semibold">
                Send message
              </Button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Contactsimple;
`,
    },
    {
      name: "Contactbigmap",
      component: <Contactbigmap />,
      installation: `npx shadcn-ui@latest add button input label textarea`,
      code: `"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react'

const Contactbigmap = () => {

      const [fullName, setFullName] = useState("");
      const [email, setEmail] = useState("");
      const [message, setMessage] = useState("");

      // Function to handle form submission
      const handleSubmit = async () => {
        // Use these values to send data to your fake API or perform any desired action
        console.log("Full Name:", fullName);
        console.log("Email:", email);
        console.log("Message:", message);

        // Reset form fields after submission

        const submiturl = "https://jsonplaceholder.typicode.com/posts"; // Replace with your fake API URL
        try {
          const response = await fetch(submiturl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fullName,
              email,
              message,
            }),
          });

          if (response.ok) {
            console.log("Data successfully sent to the server!");
            setFullName("");
            setEmail("");
            setMessage("");
          } else {
            console.error("Failed to send data to the server.");
          }
        } catch (error) {
          console.error("Error while sending data:", error);
        }
      };

  return (
    <div className="w-full">
      <section className=" body-font relative shadow-md">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=bhopal+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          />
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className=" text-lg mb-1 font-medium title-font">Feedback</h2>
            <p className="leading-relaxed mb-5 ">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <Label  className="leading-7 text-sm ">
                Name
              </Label>
              <Input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                id="fullName"
                name="fullName"
                className="w-full bg-white rounded border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div><div className="relative mb-4">
              <Label htmlFor="email" className="leading-7 text-sm ">
                Email
              </Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <Label htmlFor="message" className="leading-7 text-sm ">
                Message
              </Label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 h-32 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            <Button
              onClick={handleSubmit}
              className="text-white  py-2 px-6 text-lg"
            >
              Button
            </Button>
            <p className="text-xs  mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contactbigmap`,
    },
    {
      name: "Contactsmallmap",
      component: <Contactsmallmap />,
      installation: `npx shadcn-ui@latest add button label input textarea`,
      code: `"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react'

const Contactsmallmap = () => {

      const [fullName, setFullName] = useState("");
      const [email, setEmail] = useState("");
      const [message, setMessage] = useState("");

      // Function to handle form submission
      const handleSubmit = async () => {
        // Use these values to send data to your fake API or perform any desired action
        console.log("Full Name:", fullName);
        console.log("Email:", email);
        console.log("Message:", message);

        // Reset form fields after submission

        const submiturl = "https://jsonplaceholder.typicode.com/posts"; // Replace with your fake API URL
        try {
          const response = await fetch(submiturl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fullName,
              email,
              message,
            }),
          });

          if (response.ok) {
            console.log("Data successfully sent to the server!");
            setFullName("");
            setEmail("");
            setMessage("");
          } else {
            console.error("Failed to send data to the server.");
          }
        } catch (error) {
          console.error("Error while sending data:", error);
        }
      };

  return (
    <div>
      <section className=" body-font relative shadow-md">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2  rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=bhopal+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            />
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold  tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold  tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-rose-500 leading-relaxed">
                  example@email.com
                </a>
                <h2 className="title-font font-semibold  tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className=" text-lg mb-1 font-medium title-font">Feedback</h2>
            <p className="leading-relaxed mb-5 ">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <Label htmlFor="name" className="leading-7 text-sm ">
                Name
              </Label>
              <Input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border  focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <Label htmlFor="email" className="leading-7 text-sm ">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white rounded border  focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <Label htmlFor="message" className="leading-7 text-sm ">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white rounded border  focus:border-rose-500 focus:ring-2 focus:ring-rose-200 h-32 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            <Button className=" py-2 px-6  text-lg">Button</Button>
            <p className="text-xs  mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contactsmallmap`,
    },
  ];

  return (
    <div>
      {Types.map((type, index) => {
        return (
          <PreviewComponent
            code={type.code}
            installation={type.installation}
            key={index}
          >
            {type.component}
          </PreviewComponent>
        );
      })}
    </div>
  );
};

export default Page;
