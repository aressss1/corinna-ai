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
        </div>
    );
}
