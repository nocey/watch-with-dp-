import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Auth() {
    var [user , setUser] = useState();
    useEffect(() => {
        if(!user){
            setUser(sessionStorage.getItem('user'))
        }
    })

    const logout = () => {
        console.log('2')
        sessionStorage.removeItem('user')
        setUser('');
    }

  if (user != '') {
    return <div>
        <div onClick={logout} className="btn bg-color-button text-white">
            Logout
        </div>
    </div>;
  } else {
    return (
      <Link href="/auth/login">
        <a className="btn bg-color-button text-white">Login</a>
      </Link>
    );
  }
}
