type HeaderProps = {
  name: string;
  headline: string;
};

export default function PortfolioHeader({ name, headline }: HeaderProps) {
  return (
    <header className="space-y-1 sm:space-y-2 flex-1 min-w-0">
      <h1 className="text-header truncate">{name}</h1>
      <h2 className="text-subtitle">{headline}</h2>
    </header>
  );
}

