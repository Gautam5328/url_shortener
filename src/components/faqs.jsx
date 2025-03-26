import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "🔗 What is SqueezeURL?",
    answer:
      "SqueezeURL is a fast and reliable URL shortener that helps you create concise and shareable links with ease.",
  },
  {
    question: "🔗 How does SqueezeURL work?",
    answer:
      "Simply paste your long URL into our platform, click the shorten button, and get a compact link that’s easy to share.",
  },
  {
    question: "🔗 Is SqueezeURL free to use?",
    answer:
      "Yes! Our basic URL shortening service is free. We also offer premium features for advanced analytics and custom branding.",
  },
  {
    question: "🔗 Can I customize my shortened URL?",
    answer:
      "Yes! With our premium plan, you can create custom short links that match your brand or campaign.",
  },
  {
    question: "🔗 Do SqueezeURL links expire?",
    answer:
      "By default, links do not expire. However, you can set expiration dates for links if needed.",
  },
  {
    question: "🔗 Does SqueezeURL provide link analytics?",
    answer:
      "Absolutely! You can track clicks, locations, devices, and referral sources through our analytics dashboard.",
  },
  {
    question: "🔗 Are my shortened links safe?",
    answer:
      "Yes! We actively monitor and block malicious links to ensure a secure experience for all users.",
  },
  {
    question: "🔗 Can I delete a shortened link?",
    answer: "Yes, you can delete or deactivate a link anytime from your dashboard.",
  },
  {
    question: "🔗 Does SqueezeURL store my data?",
    answer:
      "We prioritize privacy and only collect minimal data necessary for link tracking. You can review our privacy policy for more details.",
  },
];

const FaqsComponent = () => {
  return (
    <Accordion
      type="multiple"
      collapsible
      className="w-full px-4 sm:px-11 md:px-11 mt-5 border-2 border-white/60 rounded-3xl"
    >
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger className="hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqsComponent;
