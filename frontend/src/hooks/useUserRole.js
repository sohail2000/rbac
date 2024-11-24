import { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

export function useUserRole() {
  const { isLoaded, user } = useUser();
  const [userRole, setUserRole] = useState(undefined);
  const [roleErr, setRoleErr] = useState(null);

  useEffect(() => {
    if (isLoaded) {
      if (!user) {
        setRoleErr("No user found");
      } else if (!user.publicMetadata?.role) {
        setRoleErr("User Role is not present");
      } else {
        setUserRole(user.publicMetadata.role);
        setRoleErr(null);
      }
    }
  }, [isLoaded, user]);

  return {
    userRole,
    roleErr,
  };
}
