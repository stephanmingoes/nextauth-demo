import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session, ...rest } = useSession();

  if (session) {
    return (
      <>
        <br />
        {/* <img src={session?.user?.image as string} alt="profile pic" /> <br /> */}

        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
