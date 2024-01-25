"use client"

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

export default Contactsmallmap