import Link from "next/link";
import React from "react";
import { footer } from "@/data/global";
import Image from "next/image";
import { CODEX_LABS, OASYS } from "@/lib/site";

function Footer() {
  return (
    <footer className="flex flex-col w-screen px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg">
      <div className="w-full max-w-4xl m-auto grid grid-cols-2 sm:grid-cols-3 justify-between items-start">
        {footer.columns.map((item, index) => {
          return (
            <div key={index} className="text-left mb-5 sm:mb-0">
              <h4 className="uppercase text-fun-gray text-sm font-bold">
                {item.title}
              </h4>
              <div>
                {item.links.map((item, index) => {
                  return (
                    <div key={index} className="my-4">
                      {item.leavesWebsite ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener"
                          className="items-center flex break-all"
                        >
                          {item.icon && (
                            <span className="pr-2 -mb-1">
                              <Image src={item.icon} width={20} height={20} alt="" />
                            </span>
                          )}
                          {item.name}
                        </a>
                      ) : (
                        <Link href={item.link}>{item.name}</Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t border-fun-pink-dark">
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="text-sm font-medium">
            © {new Date().getFullYear()} Haseeb Asad. All rights reserved.
          </p>
          <p className="text-xs">
            Software engineer at {OASYS.name}. Founder of{" "}
            <a href={`${CODEX_LABS.url}/`} target="_blank" rel="noopener" className="underline hover:text-fun-pink">
              {CODEX_LABS.name}
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
