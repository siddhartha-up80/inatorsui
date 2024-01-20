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
    <div className="w-full">
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