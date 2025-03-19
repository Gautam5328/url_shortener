/* eslint-disable react/prop-types */
import { Copy, Download, Eye, LinkIcon, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import useFetch from "@/hooks/use-fetch";
import { deleteUrl } from "@/db/apiUrls";
import { BeatLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";

const LinkCard = ({ url = [], fetchUrls }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsSmallScreen(window.innerWidth < 760);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const downloadImage = () => {
    const imageUrl = url?.qr;
    const fileName = url?.title;

    const anchor = document.createElement("a");
    anchor.href = imageUrl;
    anchor.download = fileName;

    document.body.appendChild(anchor);

    anchor.click();

    // Remove the anchor from the document
    document.body.removeChild(anchor);
  };

  const { loading: loadingDelete, fn: fnDelete } = useFetch(deleteUrl, url.id);

  const handleCopy = async () => {
    if (!url?.short_url || !url?.custom_url) return;

    try {
      await navigator.clipboard.writeText(
        `https://squeezeurl.netlify.app/${
          url?.custom_url ? url?.custom_url : url?.short_url
        }`
      );
      toast.success("Link Copied!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-5 border p-4 bg-gray-800 rounded-lg">
      <div className="flex flex-row">
        <img
          src={url?.qr}
          className="h-32 object-contain ring ring-blue-500 self-start"
          alt="qr code"
        />
        {isSmallScreen ? (
          <Link className="flex mx-auto my-auto" to={`/link/${url?.id}`}>
            <Eye className="size-[50px]"/>
          </Link>
        ) : null}
      </div>
      <Link to={`/link/${url?.id}`} className="flex flex-col flex-1">
        <span className="text-3xl font-extrabold hover:underline cursor-pointer">
          {url?.title}
        </span>
        <span className="md:text-2xl sm:text-xl text-blue-400 font-bold hover:underline cursor-pointer xs:max-w-[280px] break-words">
          https://squeezeurl.netlify.app/
          {url?.custom_url ? url?.custom_url : url.short_url}
        </span>
        <span className="flex items-center gap-1 hover:underline cursor-pointer">
          <LinkIcon className="p-1" />
          <span className="xs:max-w-[280px] break-words">
            {url?.original_url}
          </span>
        </span>
        <span className="flex items-end font-extralight text-sm flex-1">
          {new Date(url?.created_at).toLocaleString()}
        </span>
      </Link>
      <div className="flex gap-2">
        <Button variant="ghost" onClick={handleCopy}>
          <Copy />
        </Button>
        <Button variant="ghost" onClick={downloadImage}>
          <Download />
        </Button>
        <Button
          variant="ghost"
          onClick={() => fnDelete().then(() => fetchUrls())}
          disable={loadingDelete}
        >
          {loadingDelete ? <BeatLoader size={5} color="white" /> : <Trash />}
        </Button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LinkCard;
