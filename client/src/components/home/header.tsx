import { CircleUserRound } from "lucide-react";

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
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center space-x-2">
          <LogoPlaceholder />
          <span className="font-bold">Sua Marca</span>
        </div>

        <div className="flex items-center space-x-4">
          <CircleUserRound className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />

          <div className="hidden h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground sm:flex">
            Começar
          </div>
        </div>
      </div>
    </header>
  );
}
