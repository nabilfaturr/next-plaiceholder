import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ImageCardProps = {
  cardTitle: string;
  cardDescription: string;
  cardContent: React.ReactNode;
  cardFooter: string;
};

const ImageCard = ({
  cardTitle,
  cardDescription,
  cardContent,
  cardFooter,
}: ImageCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{cardTitle}</CardTitle>
        <CardDescription>{cardDescription}</CardDescription>
      </CardHeader>
      <CardContent>{cardContent}</CardContent>
      <CardFooter>
        <p>{cardFooter}</p>
      </CardFooter>
    </Card>
  );
};

export default ImageCard;
