import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Home() {
  const [testResult, setTestResult] = useState<string | null>(null)

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Hero section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Welcome to NextWorkforce
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Your trusted partner for workforce solutions.
        </p>
      </section>

      {/* Test section - verify Shadcn + Tailwind */}
      <section className="mx-auto max-w-md rounded-lg border border-border bg-card p-8 shadow-sm">
        <h2 className="mb-4 text-center text-xl font-semibold text-card-foreground">
          Setup verification
        </h2>
        <p className="mb-6 text-center text-sm text-muted-foreground">
          Click the button below to verify Shadcn UI and Tailwind CSS are working correctly.
        </p>
        <div className="flex flex-col items-center gap-4">
          <Button
            onClick={() =>
              setTestResult(
                testResult ? null : "Shadcn + Tailwind are working correctly."
              )
            }
            variant="default"
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Test Shadcn & Tailwind
          </Button>
          {testResult && (
            <div
              className="w-full rounded-md bg-green-500/10 px-4 py-3 text-center text-sm font-medium text-green-700 dark:text-green-400"
              role="status"
            >
              {testResult}
            </div>
          )}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          If you see a styled button above and a green message on click, both are configured correctly.
        </p>
      </section>
    </div>
  )
}
