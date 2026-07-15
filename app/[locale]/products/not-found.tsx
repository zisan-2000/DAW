export default function ProductNotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center bg-surface-ink px-4 text-center text-surface-ink-foreground">
      <p className="text-xs tracking-[0.16em] text-accent uppercase">404</p>
      <h1 className="font-display mt-3 text-3xl font-semibold">
        Product page not found
      </h1>
      <p className="mt-3 max-w-md text-sm text-surface-ink-foreground/55">
        The product or audience you requested is unavailable. Check the Products
        menu for valid destinations.
      </p>
    </div>
  )
}
