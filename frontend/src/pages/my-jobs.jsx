import CreatedApplications from "@/components/CreatedApplications";
import CreatedJobs from "@/components/CreatedJobs";
import { useUserRole } from "@/hooks/useUserRole";

const MyJobs = () => {
    const { userRole} = useUserRole();

    return (
        <div>
            <h1 className="gradient-title font-extrabold text-5xl sm:text-7xl text-center pb-8">

                {userRole === "candidate"
                    ? "My Applications"
                    : "My Jobs"}
            </h1>
            {userRole === "candidate" ? (
                <CreatedApplications />
            ) : (
                <CreatedJobs />
            )}
        </div>
    );
};

export default MyJobs;
