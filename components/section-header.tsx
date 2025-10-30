interface SectionHeaderProps {
  overline?: string
  title: string
  description?: string
}

export function SectionHeader({ overline, title, description }: SectionHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {overline && <div className="text-sm font-semibold text-[#3FC1C9] uppercase tracking-wider mb-3">{overline}</div>}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">{title}</h2>
      {description && <p className="text-lg text-muted-foreground text-pretty">{description}</p>}
    </div>
  )
}
