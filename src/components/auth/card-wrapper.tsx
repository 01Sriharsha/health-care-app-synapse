import { ReactNode } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

type CardWrapperProps = {
  children: ReactNode;
  cardTitle: string;
  navigateUrl: string;
  navigateText: string;
  navigateDescription: string;
  registerAs?: string;
};

export default function CardWrapper({
  cardTitle,
  children,
  navigateUrl,
  navigateText,
  navigateDescription,
  registerAs,
}: CardWrapperProps) {
  return (
    <Card className="w-full lg:h-[90vh] flex flex-col justify-between overflow-y-scroll">
      <CardHeader>
        <h1 className="text-2xl text-center font-semibold text-primary">
          {cardTitle}
        </h1>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex items-center gap-x-2 justify-center text-sm">
        <p>{navigateDescription}</p>
        <Link href={navigateUrl} className="text-primary hover:underline">
          {navigateText}
        </Link>
      </CardFooter>
    </Card>
  );
}
