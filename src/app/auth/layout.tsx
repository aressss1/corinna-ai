import { currentUser } from "@clerk/nextjs";

import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
    children: React.ReactNode;
}
export const Layout =  async ({
    children
}: Props) => {
    const user = await currentUser()

    if(user) redirect("/")

    return ( 
        <div className="h-screen flex w-full justify-center" >
            <div className="w-[600px] lg:w-full flex flex-col items-start p-6" >
                <Image 
                    src="/images/logo.png"
                    alt="logo"
                    sizes="100vw"
                    style={{
                        width: "20%",
                        height: 'auto'
                    }}
                    width={0}
                    height={0}
                />
                {children}
            </div>
            <div className="hidden lg:flex glex-1 w-full max-h-full max-w-4000px overflow-hidden relative bg-cream flex-col pt-10 pl-24 gap-3" >
                    <h2 className="text-gravel md:text-4xl font-bold" >
                        Hi, I&apos;m your AI powered sales assistant, Corinna!
                    </h2>
                    <p className="text-iridium md:text-sm mb-10" >
                        Corinna is capable of capturing lead information without a a form...{''}
                        <br />
                        something never done before
                    </p>
                    <Image 
                        src="/images/app-ui.png"
                        alt="logo"
                        loading="lazy"
                        sizes="30"
                        className="absolute shrink-0 !w-[1600px] top-48"
                        width={0}
                        height={0}
                    />
            </div>
        </div>
    );
}
