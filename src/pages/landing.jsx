import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FaqsComponent from "@/components/faqs";

const LandingPage = () => {
  const [longUrl, setLongUrl] = useState("");
  const navigate = useNavigate();

  const handleShorten = (e) => {
    e.preventDefault();
    if (longUrl) navigate(`/auth?createNew=${longUrl}`);
  };

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  
  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
        The Ultimate URL shortener
        <br /> simple, fast, and reliable! 🔗
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
          className="h-full flex-1 py-4 px-4 placeholder:text-lg placeholder: font-semibold"
        />
        <Button type="submit" className="h-full" variant="destructive">
          Shorten!
        </Button>
      </form>
      <img
        src="/banner3.png"
        srcSet="/banner3-small.png 600w, /banner3.png 1200w"
        sizes="(max-width: 600px) 600px, 1200px"
        alt="Banner"
        className="w-full my-12 md:px-11"
        loading="lazy"
      />
      <h1 className="text-4xl font-semibold">FAQ's</h1>
      <FaqsComponent/>
    </div>
  );
};

export default LandingPage;
