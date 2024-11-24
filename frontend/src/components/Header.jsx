import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignIn,
} from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";
import { usePermissions } from "@/hooks/usePermission";
import { PERMISSIONS } from '../constants/permissions';
import { useLocation } from "react-router-dom";



const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const { pathname } = useLocation();
  const [search, setSearch] = useSearchParams();

  const { hasPermission } = usePermissions();

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({});
    }
  };

  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link to="/">
          <img src="/jobWayyLogo.png" className="h-10" alt="JobWaYY Logo" />
        </Link>

        <div className="flex gap-8">
          <SignedOut>
            <Button variant="outline" onClick={() => setShowSignIn(true)}>
              Login
            </Button>
          </SignedOut>
          <SignedIn>
            {hasPermission(PERMISSIONS.JOBS.CREATE) &&
              <Link to="/post-job">
                <Button variant="destructive" className="rounded-full">
                  <PenBox size={20} className="mr-2" />
                  Post a Job
                </Button>
              </Link>}
            {hasPermission(PERMISSIONS.USERS.VIEW) &&
              pathname === "/admin-panel" &&
              <Link to="/">
                <Button variant='outline' className='rounded-full'>
                  Home
                </Button>
              </Link>}
            {hasPermission(PERMISSIONS.USERS.VIEW) &&
              pathname !== "/admin-panel" &&
              <Link to="/admin-panel">
                <Button variant="outline" className="rounded-full">
                  Admin Panel
                </Button>
              </Link>}
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            >

              <UserButton.MenuItems>
                <UserButton.Link
                  label="My Jobs"
                  labelIcon={<BriefcaseBusiness size={15} />}
                  href="/my-jobs"
                />
                {hasPermission(PERMISSIONS.SAVED_JOBS.VIEW) &&
                  <UserButton.Link
                    label="Saved Jobs"
                    labelIcon={<Heart size={15} />}
                    href="/saved-jobs"
                  />
                }

                <UserButton.Action label="manageAccount" />
              </UserButton.MenuItems>


            </UserButton>
          </SignedIn>
        </div>
      </nav>

      {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleOverlayClick}
        >
          <SignIn
            signUpForceRedirectUrl="/onboarding"
            fallbackRedirectUrl="/onboarding"
          />
        </div>
      )}
    </>
  );
};

export default Header;
