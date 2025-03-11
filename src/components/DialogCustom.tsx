import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  content: React.ReactElement;
  button: React.ReactElement;
  title?: string;
  description?: string;
}

export default function DialogCustom({
  button,
  content,
  description,
  title,
}: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <>{content}</>
      </DialogContent>
    </Dialog>
  );
}
