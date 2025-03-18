import FaqsComponent from "@/components/faqs";
import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="pb-10 pt-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            About SqueezeURL
          </h1>

          {/* Description */}
          <p className="text-white mt-[60px] text-lg">
            SqueezeURL is a powerful and efficient URL shortening service that
            helps you transform long, complex links into short, easy-to-share
            URLs. Whether you need to share links on social media, track click
            analytics, or manage branded URLs, SqueezeURL makes it simple and
            effective.
          </p>

          {/* Features Section */}
          <div className="mt-[5rem] text-left">
            <h2 className="text-2xl font-semibold text-white">
              Why Choose SqueezeURL?
            </h2>
            <ul className="list-disc mt-6 pl-6 text-white space-y-5">
                <p className="text-[16px]">🚀 <b>Fast & Reliable</b> - Instantly shorten links with high
                availability.</p>
                <p className="text-[16px]">📊 <b>Analytics Tracking</b> - Monitor link performance with
                real-time data.</p>
                <p className="text-[16px]">🔗 <b>Custom URLs</b> - Create branded and memorable short
                links.</p>
                <p className="text-[16px]">🛡️ <b>Secure & Private</b> - Ensure safe and encrypted URL
                redirections.</p>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto">
        <FaqsComponent />
      </div>
      <div className="mt-20 text-center justify-center">
        <Button onClick={()=>navigate("/")} type="submit" className="h-full rounded-2xl px-10 py-5" variant="destructive">
          Get Started!
        </Button>
      </div>
    </div>
  );
};

export default AboutUs;
