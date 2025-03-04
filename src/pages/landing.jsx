import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  const [longUrl, setLongUrl] = useState("");
  const navigate = useNavigate();

  const handleShorten = (e) => {
    e.preventDefault();
    if (longUrl) navigate(`/auth?createNew=${longUrl}`);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
        The Ultimate URL shortener<br /> simple, fast, and reliable! 🔗
      </h2>
      <form
        onSubmit={handleShorten}
        className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2"
      >
        <Input
          type="url"
          placeholder="Enter your loooong URL"
          value={longUrl}
          autoFocus
          onChange={(e) => setLongUrl(e.target.value)}
          className="h-full flex-1 py-4 px-4"
        />
        <Button type="submit" className="h-full" variant="destructive">
          Shorten!
        </Button>
      </form>
      <img
        src="/banner3.png" // replace with 2 in small screens
        className="w-full my-12 md:px-11"
      />
      <h1 className="text-4xl font-semibold">FAQ's</h1>
      <Accordion type="multiple" collapsible className="w-full md:px-11 mt-5 border-2 border-white/60 rounded-3xl">
        <AccordionItem value="item-1">
          <AccordionTrigger className = "hover:no-underline">
          🔗 What is SqueezeURL?
          </AccordionTrigger>
          <AccordionContent>
            SqueezeURL is a fast and reliable URL shortener that helps you create concise and shareable links with ease.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className = "hover:no-underline">
          🔗 How does SqueezeURL work?
          </AccordionTrigger>
          <AccordionContent>
            Simply paste your long URL into our platform, click the shorten button, and get a compact link that’s easy to share.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className = "hover:no-underline">
          🔗  Is SqueezeURL free to use?
          </AccordionTrigger>
          <AccordionContent>
            Yes! Our basic URL shortening service is free. We also offer premium features for advanced analytics and custom branding.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className = "hover:no-underline">
          🔗 Can I customize my shortened URL?
          </AccordionTrigger>
          <AccordionContent>
            Yes! With our premium plan, you can create custom short links that match your brand or campaign.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className = "hover:no-underline">
          🔗 Do SqueezeURL links expire?
          </AccordionTrigger>
          <AccordionContent>
            By default, links do not expire. However, you can set expiration dates for links if needed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className = "hover:no-underline">
          🔗 Does SqueezeURL provide link analytics?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely! You can track clicks, locations, devices, and referral sources through our analytics dashboard.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default LandingPage;
