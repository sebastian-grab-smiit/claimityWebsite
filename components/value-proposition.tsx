export function ValueProposition() {
  const metrics = [
    {
      value: "30%",
      label: "weniger Admin-Aufwand",
    },
    {
      value: "24h",
      label: "Reaktionszeit",
    },
    {
      value: "100%",
      label: "digitale Integration",
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 xl:px-16 2xl:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Der Mehrwert in Zahlen</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Messbare Ergebnisse durch digitale Transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-[#3FC1C9] mb-3">{metric.value}</div>
              <div className="text-base md:text-lg text-foreground font-medium">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
