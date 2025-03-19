import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
const FaqsComponent = () => {
  return (
    <Accordion
    type="multiple"
    collapsible
    className="w-full px-4 sm:px-11 md:px-11 mt-5 border-2 border-white/60 rounded-3xl"
  >
    <AccordionItem value="item-1">
      <AccordionTrigger className="hover:no-underline">
        🔗 What is SqueezeURL?
      </AccordionTrigger>
      <AccordionContent>
        SqueezeURL is a fast and reliable URL shortener that helps you
        create concise and shareable links with ease.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger className="hover:no-underline">
        🔗 How does SqueezeURL work?
      </AccordionTrigger>
      <AccordionContent>
        Simply paste your long URL into our platform, click the shorten
        button, and get a compact link that’s easy to share.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger className="hover:no-underline">
        🔗 Is SqueezeURL free to use?
      </AccordionTrigger>
      <AccordionContent>
        Yes! Our basic URL shortening service is free. We also offer premium
        features for advanced analytics and custom branding.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4">
      <AccordionTrigger className="hover:no-underline">
        🔗 Can I customize my shortened URL?
      </AccordionTrigger>
      <AccordionContent>
        Yes! With our premium plan, you can create custom short links that
        match your brand or campaign.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-5">
      <AccordionTrigger className="hover:no-underline">
        🔗 Do SqueezeURL links expire?
      </AccordionTrigger>
      <AccordionContent>
        By default, links do not expire. However, you can set expiration
        dates for links if needed.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-6">
      <AccordionTrigger className="hover:no-underline">
        🔗 Does SqueezeURL provide link analytics?
      </AccordionTrigger>
      <AccordionContent>
        Absolutely! You can track clicks, locations, devices, and referral
        sources through our analytics dashboard.
      </AccordionContent>
    </AccordionItem>
  </Accordion>

  )
}

export default FaqsComponent