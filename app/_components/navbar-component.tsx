"use client";
import Link from "next/link";
import React from "react";
import { ManagerMenu } from "./manager-menu";

const NavbarComponent = ({ menuManager, setMenuManager }: ManagerMenu) => {
  return (
    <nav
      className={`${
        !menuManager && "overflow-hidden !w-0"
      }  menuLinks navbarScreenMD w-[100%] flex flex-col items-center h-[100vh] absolute top-20 left-0 !bg-neutral-950`}
    >
      <Link href={""} onClick={() => setMenuManager(false)}>
        Home
        <div className="delayTransition "></div>
      </Link>
      <Link href={""} onClick={() => setMenuManager(false)}>
        Sobre à DGS <div className="delayTransition"></div>
      </Link>
      <Link href={""} onClick={() => setMenuManager(false)}>
        Localização
        <div className="delayTransition"></div>
      </Link>
      <Link href={""} onClick={() => setMenuManager(false)}>
        Contatos
        <div className="delayTransition"></div>
      </Link>
      <Link href={""} onClick={() => setMenuManager(false)}>
        Alto Falantes
        <div className="delayTransition"></div>
      </Link>
      <Link href={""} onClick={() => setMenuManager(false)}>
        Recondicionamentos
        <div className="delayTransition"></div>
      </Link>
      <Link href={""} onClick={() => setMenuManager(false)}>
        Projetos
        <div className="delayTransition"></div>
      </Link>
    </nav>
  );
};

export default NavbarComponent;
