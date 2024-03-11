"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Role } from "@prisma/client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

import { RegisterSchema, RegisterSchemaType } from "@/schemas";

type RegisterFormProps = {};

export const RegisterForm = ({}: RegisterFormProps) => {
  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      firstname: "",
      lastname: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [role, setRole] = useState<Role>(Role.PATIENT);

  const onSubmit = (values: RegisterSchemaType) => {
    console.log("register", values);
  };
  return (
    <Form {...form}>
      <div className="flex items-center justify-around gap-4 mb-4 text-sm font-medium [&_label]:cursor-pointer">
        <div className="flex flex-row-reverse gap-1 items-center">
          <label htmlFor="patient">As Patient</label>
          <Checkbox
            id="patient"
            checked={role === Role.PATIENT}
            value={"patient"}
            onCheckedChange={() => setRole(Role.PATIENT)}
          />
        </div>
        <div className="flex flex-row-reverse gap-1 items-center">
          <label htmlFor="doctor">As Doctor</label>
          <Checkbox
            id="doctor"
            checked={role === Role.DOCTOR}
            value={"doctor"}
            onCheckedChange={() => setRole(Role.DOCTOR)}
          />
        </div>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Firstname</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lastname</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="JohnDoe@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="1234567890" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="JohnDoe@123"
                    autoComplete="on"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {form.getValues("password") && (
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Confirm" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Mysuru"
                    autoComplete="on"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid-cols-12 mt-3">
          <Button type="submit">Register</Button>
        </div>
      </form>
    </Form>
  );
};
