'use client'

import { useAuthContextHook } from "@/context/use-auth-context";
import { Spinner, SpinnerProps } from "@/components/spinner";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { TypeSelectionForm } from "./type-selection-form";
import dynamic, { DynamicOptionsLoadingProps } from 'next/dynamic';

type Props = {
 
}
  
const SpinnerWrapper = (props: DynamicOptionsLoadingProps) => {
    const spinnerProps: SpinnerProps = {
      noPadding: true, 
    };
  
    return <Spinner {...spinnerProps} />;
};


const DetailForm = dynamic(() => import('./account-details-form'), {
    ssr: false,
    loading: SpinnerWrapper,
})

const OTPForm = dynamic(() => import('./otp-form'), {
    ssr: false,
    loading: SpinnerWrapper,
})

export const RegistrationFormStep = ({}: Props) => {
    const {
        register,
        formState: { errors },
        setValue
    } = useFormContext()
    const { currentStep } = useAuthContextHook()
    const [onOTP, setOnOTP] = useState<string>('')
    const [onUserType, setOnUserType] = useState<'owner' | 'student'>('owner')

    setValue('otp' , onOTP)

    switch (currentStep) {
        case 1:
            return (
                <TypeSelectionForm 
                    register={register}
                    userType={onUserType}
                    setUserType={setOnUserType}
                />
            )
        case 2: 
            return (
                <DetailForm 
                    errors={errors}
                    register={register}
                />
            )
        case 3:
            return (
                <OTPForm
                    onOTP={onOTP}
                    setOTP={setOnOTP}
                />
            )
    }


    return ( 
        <></>
    );
}