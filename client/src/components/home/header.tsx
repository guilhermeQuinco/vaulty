import { CircleUserRound } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LogoPlaceholder = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
    <path d="M2 17l10 5 10-5"></path>
    <path d="M2 12l10 5 10-5"></path>
  </svg>
);

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <LogoPlaceholder />
          <span className="hidden font-bold md:block">Sua Marca</span>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-4">
          <Button className="text-sm font-medium sm:flex hidden items-center justify-center rounded-md bg-primary text-primary-foreground">
            Games
          </Button>
          <Button className="text-sm font-medium sm:flex hidden items-center justify-center rounded-md bg-primary text-primary-foreground">
            List
          </Button>

          <div className="w-full flex-1 sm:max-w-40">
            <Input
              placeholder="Search..."
              className="h-9 w-full rounded-md bg-primary px-3 text-sm text-primary-foreground placeholder:text-primary-foreground/80"
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <CircleUserRound className="h-10 w-10 flex-shrink-0 text-muted-foreground transition-colors hover:text-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Sign in</DropdownMenuItem>
              <DropdownMenuItem>Create account</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
