import React from "react";
import Image from "next/image";
import { ExternalLinkIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <footer className="">
      <section className="bg-[#252c3a] flex items-start justify-around p-16">
        <div className="flex flex-col gap-4 items-start w-1/4 p-4">
          <a href="">
            <Image
              src="/logo-footer.png"
              alt="footer logo"
              height={44}
              width={177}
              loading="lazy"
            />
          </a>

          <p className="text-gray-500 text-md">
            Edumodo focuses on creating magnificent education websites with
            ease. Take the lead in the race with Learned.{" "}
          </p>

          <div className="flex items-center gap-4 mt-4">
            <a href="">
              <ExternalLinkIcon className="h-6 w-6 text-gray-500 hover:text-blue-500" />
            </a>
            <a href="">
              <ExternalLinkIcon className="h-6 w-6 text-gray-500 hover:text-blue-500" />
            </a>
            <a href="">
              <ExternalLinkIcon className="h-6 w-6 text-gray-500 hover:text-blue-500" />
            </a>
            <a href="">
              <ExternalLinkIcon className="h-6 w-6 text-gray-500 hover:text-blue-500" />
            </a>
          </div>
        </div>

        <div className="flex items-start justify-around">
          <div className="flex flex-col gap-2 items-start w-1/4 p-4">
            <p className="text-gray-300 text-xl hover:text-white font-bold">
              FEATURED PROGRAMS
            </p>
            <a className="text-gray-500 hover:text-blue-500 text-md">
              Edumodo focuses
            </a>
            <a className="text-gray-500 hover:text-blue-500 text-md">
              Edumodo focuses
            </a>
            <a className="text-gray-500 hover:text-blue-500 text-md">
              Edumodo focuses
            </a>
            <a className="text-gray-500 hover:text-blue-500 text-md">
              Edumodo focuses
            </a>
          </div>

          <div className="flex flex-col gap-2 items-start w-1/4 p-4">
            <p className="text-gray-300 text-xl hover:text-white font-bold">
              LEARNING
            </p>
            <p className="text-gray-500 text-md hover:text-blue-500">
              Edumodo focuses
            </p>
            <p className="text-gray-500 text-md hover:text-blue-500">
              Edumodo focuses
            </p>
            <p className="text-gray-500 text-md hover:text-blue-500">
              Edumodo focuses
            </p>
            <p className="text-gray-500 text-md hover:text-blue-500">
              Edumodo focuses
            </p>
          </div>

          <div className="flex flex-col gap-2 items-start w-1/4 p-4">
            <p className="text-gray-300 text-xl font-bold">SUPPORT FORM</p>
            <p className="text-gray-500 text-md">
              Write your email into below field and join our quick support
              forum.
            </p>

            <form action="" className="mt-12">
              <input
                type="text"
                className="p-2 outline-none"
                placeholder="Email"
              />
              <button className="text-white bg-orange-600 p-2 mt-2">GET HELP</button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-[#1d232e] flex items-center justify-around p-4">
        <p className="text-sm text-gray-500">Copyright © 2019 Learned</p>
        <div className="flex items-center gap-8">
          <a href="" className="text-sm text-gray-500">
            Site Map
          </a>
          <a href="" className="text-sm text-gray-500">
            Privacy Policy
          </a>
          <a href="" className="text-sm text-gray-500">
            Website use Policy
          </a>
          <a href="" className="text-sm text-gray-500">
            Cookie Policy
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
