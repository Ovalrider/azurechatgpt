import { LogIn } from "@/components/login/login";
import { Card } from "@/components/ui/card";
import { userSession } from "@/features/auth/helpers";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export default async function Home() {
  // const user = await userSession();
  const user2 = await getSession()
  // console.log(user2)

  return (<>
  <a href="/api/auth/login">Login</a>
  {user2 && <a href="/profile-server">User Profile</a>}
  </>
    // <Card className="h-full flex-1 overflow-hidden relative items-center justify-center flex">
    //   <LogIn />
    // </Card>
  );
}
