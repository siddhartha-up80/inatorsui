"use client"

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

export default Contactbigmap