import { ButtonHandler } from "@/components/forms/signup/button-handler";
import { SignUpFormProvider } from "@/components/forms/signup/form-provider";
import { RegistrationFormStep } from "@/components/forms/signup/registration-step";

type Props = {
 
}

const SignUp = ({}: Props) => {
    return ( 
        <div className="flex-1 py-24 md:px-16 w-full" >
            <div className="flex lfex-col h-full gap-3" >
                <SignUpFormProvider>
                    <div className="flex flex-col gap-3" >
                        <RegistrationFormStep />
                        <ButtonHandler />
                    </div>
                </SignUpFormProvider>
            </div>
        </div>
    );
}

export default SignUp