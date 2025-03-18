import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { storeContactDetails } from "@/db/apiContact";
import useFetch from "@/hooks/use-fetch";

const ContactUsPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleClear = () => {
    setFullName("")
    setEmail("")
    setSubject("")
    setMessage("")
  }

  const {
    loading,
    data: url,
    fn:fnContactUs,
    error,
  } = useFetch(storeContactDetails, { fullName, email, subject, message });

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleClear()
    await fnContactUs()
  };

  return (
    <div className="flex items-center justify-center py-12 px-4">
      <div className="p-8 rounded-lg shadow-lg max-w-lg w-full">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          Contact Us
        </h2>
        <div className="space-y-4">
          <div>
            <Label className="block text-white font-medium text-0.5xl">
              Name
            </Label>
            <Input
              type="text"
              name="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mt-3"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div>
            <Label
              htmlFor="email"
              className="block text-white font-medium text-0.5xl"
            >
              Email
            </Label>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mt-3"
              placeholder="Enter your email"
            />
          </div>

          {/* Subject Field */}
          <div>
            <Label className="block text-white font-medium text-0.5xl">
              Subject
            </Label>
            <Input
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mt-3"
              placeholder="Enter subject"
            />
          </div>

          {/* Message Field */}
          <div>
            <Label className="block text-white font-medium text-0.5xl">
              Message
            </Label>
            <Textarea
              placeholder="Type your message here."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              rows="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mt-3"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="h-full rounded-2xl px-10 py-3"
            variant="destructive"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
