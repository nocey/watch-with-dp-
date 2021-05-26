import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Auth() {
  var [user, setUser] = useState();
  useEffect(() => {
    console.log(sessionStorage.getItem("user"));
    if (!user && sessionStorage.getItem("user") != null) {
      setUser(sessionStorage.getItem("user"));
    }
  });

  const logout = () => {
    console.log("2");
    sessionStorage.removeItem("user");
    setUser("");
    window.location.href = "/auth/login";
  };

  if (user) {
    return (
      <div>
        <div onClick={logout} className="btn bg-color-button text-white">
          Logout
        </div>
      </div>
    );
  } else {
    return (
      <div className='w-100 d-flex flex-row justify-content-between align-items-center'>
        <Link href="/auth/login">
          <a className="btn bg-color-button text-white">Login</a>
        </Link>
        <Link href="/auth/register">
          <a className="btn bg-color-button text-white">Register</a>
        </Link>
      </div>
    );
  }
}
