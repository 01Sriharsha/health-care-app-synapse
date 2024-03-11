import CardWrapper from "@/components/auth/card-wrapper";
import React from "react";
import { RegisterForm } from "../_components/register-form";

export default function RegisterPage() {
  return (
    <div>
      <CardWrapper
        cardTitle="Create an account"
        navigateDescription="Already have an account?"
        navigateText="Login"
        navigateUrl="/auth/login"
        registerAs="Doctor"
      >
        <RegisterForm />
      </CardWrapper>
    </div>
  );
}
