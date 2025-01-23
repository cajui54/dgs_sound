"use client";
import React, { useEffect } from "react";
import { ManagerMenu } from "./manager-menu";
import { Link, scrollSpy } from "react-scroll";

const NavbarComponent = ({ menuManager, setMenuManager }: ManagerMenu) => {
  const handleSetActive = (to: string) => {
    console.log(to);
  };
  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <nav
      className={`${
        !menuManager && "overflow-hidden !w-0"
      }  menuLinks navbarScreenMD w-[100%] flex flex-col items-center absolute top-20 left-0 !bg-neutral-950`}
    >
      <Link
        to="ancorHome"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        activeClass="active"
        onSetActive={handleSetActive}
        onClick={() => setMenuManager(false)}
      >
        Home
        <div className="delayTransition"></div>
      </Link>

      <Link
        to="ancorAbout"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        activeClass="active"
        onSetActive={handleSetActive}
        onClick={() => setMenuManager(false)}
      >
        Sobre à DGS <div className="delayTransition"></div>
      </Link>

      <Link
        to="ancorLocation"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        activeClass="active"
        onSetActive={handleSetActive}
        onClick={() => setMenuManager(false)}
      >
        Contatos
        <div className="delayTransition"></div>
      </Link>

      <Link
        to="ancorAltoFalantes"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        activeClass="active"
        onSetActive={handleSetActive}
        onClick={() => setMenuManager(false)}
      >
        Alto Falantes
        <div className="delayTransition"></div>
      </Link>

      <Link
        to="ancorRecond"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        activeClass="active"
        onSetActive={handleSetActive}
        onClick={() => setMenuManager(false)}
      >
        Recondicionamentos
        <div className="delayTransition"></div>
      </Link>
      <Link
        to="ancorProject"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        onClick={() => setMenuManager(false)}
        activeClass="active"
        onSetActive={handleSetActive}
      >
        Projetos
        <div className="delayTransition"></div>
      </Link>
    </nav>
  );
};

export default NavbarComponent;
