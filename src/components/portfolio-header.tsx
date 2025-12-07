type HeaderProps = {
  name: string;
  headline: string;
};

export default function PortfolioHeader({ name, headline }: HeaderProps) {
  return (
    <div className="space-y-1 animate-in-up" style={{ animationDelay: "0ms" }}>
      <h1 className="text-lg font-medium tracking-tight text-foreground">
        {name}
      </h1>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
        {headline}
      </p>
    </div>
  );
}
