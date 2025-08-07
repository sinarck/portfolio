type HeaderProps = {
  name: string;
  headline: string;
  contacts?: string;
};

export default function PortfolioHeader({
  name,
  headline,
  contacts,
}: HeaderProps) {
  return (
    <header className="space-y-2">
      <h1 className="text-header">{name}</h1>
      <h2 className="text-subtitle">{headline}</h2>
      {contacts && <div className="text-meta">{contacts}</div>}
    </header>
  );
}

