import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface Props {
  content: React.ReactElement;
  button: React.ReactElement;
}

export const DropdownCustom = ({ content, button }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{button}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <>{content}</>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
