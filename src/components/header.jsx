import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout, updateUserDetails } from "@/db/apiAuth";
import useFetch from "@/hooks/use-fetch";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Edit, LinkIcon, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { BarLoader, BeatLoader } from "react-spinners";
import { Button } from "./ui/button";
import { UrlState } from "@/context";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const { loading, fn: fnLogout } = useFetch(logout);
  const navigate = useNavigate();

  const { user, fetchUser } = UrlState();
  const [openEditModal, setOpenEditModal] = useState(false);

  const [fullName, setFullName] = useState(user?.user_metadata?.name || "");
  const [email, setEmail] = useState(user?.user_metadata?.email || "");
  const [profilePic, setProfilePic] = useState(
    user?.user_metadata?.profile_pic || null
  );

  const handleSaveChanges = async () => {
    const result = await updateUserDetails({
      name: fullName,
      email,
    });
    if (result?.user?.email) {
      setOpenEditModal(false);
      window.location.reload();
    } else {
      toast.error("Something went wrong!!", {
        position: "top-right",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setProfilePic((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };

  useEffect(() => {
    setFullName(user?.user_metadata?.name);
    setEmail(user?.user_metadata?.email);
    setProfilePic(user?.user_metadata?.profile_pic);
  }, [user]);

  return (
    <>
      <nav className="py-2 flex justify-between items-center lg:mx-[-40px] lg:mt-[-10px]">
        <Link to="/">
          <img
            src="/squeezeurl_logo.png"
            className="h-40 w-40"
            alt="Trimrr Logo"
          />
        </Link>
        <div className="flex gap-4">
          {!user ? (
            <Button onClick={() => navigate("/auth")}>Login</Button>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger
                asChild
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200"
              >
                <Avatar className="pl-3 pt-1">
                  <AvatarImage src={user?.user_metadata?.profile_pic} />
                  <AvatarFallback>S</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  {user?.user_metadata?.name}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setOpenEditModal(true)}>
                  <Link to="/dashboard" className="flex">
                    <Edit className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/dashboard" className="flex">
                    <LinkIcon className="mr-2 h-4 w-4" />
                    My Links
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    fnLogout().then(() => {
                      fetchUser();
                      navigate("/auth");
                    });
                  }}
                  className="text-red-400"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </nav>
      {loading && <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />}
      {openEditModal && (
        <Dialog
          defaultOpen={openEditModal}
          onOpenChange={(res) => {
            if (!res) setOpenEditModal(false);
          }}
        >
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="font-bold text-2xl">
                Edit Profile
              </DialogTitle>
            </DialogHeader>
            <Label className="block text-white font-medium text-0.5xl">
              Name
            </Label>
            <Input
              id="Name"
              placeholder="Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <Label className="block text-white font-medium text-0.5xl">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <div className="flex-col flex space-y-2">
              <p className="text-[14px]">Update Profile Pic</p>
              <div className="space-y-1">
                <input
                  name="profile_pic"
                  type="file"
                  accept="image/*"
                  onChange={handleInputChange}
                />
              </div>
            </div> */}
            <DialogFooter className="sm:justify-start mt-10">
              <Button
                type="button"
                variant="destructive"
                disabled={loading}
                onClick={handleSaveChanges}
              >
                {loading ? (
                  <BeatLoader size={10} color="white" />
                ) : (
                  "Save Changes"
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
          <ToastContainer />
        </Dialog>
      )}
    </>
  );
};

export default Header;
