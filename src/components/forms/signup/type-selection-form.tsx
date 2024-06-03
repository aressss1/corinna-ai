import { FieldValues, UseFormRegister } from "react-hook-form";
import { UserTypeCard } from "./user-type-card";

type Props = {
    register: UseFormRegister<FieldValues>
    userType: 'owner' | 'student'
    setUserType: React.Dispatch<React.SetStateAction<'owner' | 'student'>>
}
export const TypeSelectionForm = ({
    register,
    userType,
    setUserType
}: Props) => {
    return ( 
        <>
            <h2 className="text-gravel md:text-4xl font-bold " >
                Create an account
            </h2>   
            <p className="text-iridium md:text-sm" >
                Tell us about yourself! What do you do? let&apos;s tailor your
                <br /> experience so it best suits you.
            </p>
            <UserTypeCard 
                register={register}
                setUserType={setUserType}
                userType={userType}
                title="I own a business"
                value="owner"
                text="Setting up my acount for my company."
            />
            <UserTypeCard 
                register={register}
                setUserType={setUserType}
                userType={userType}
                title="I'm a student"
                value="student"
                text="Looking to learn about the tool."
            />
        </>
    );
}