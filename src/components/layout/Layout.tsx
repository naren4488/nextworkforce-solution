import { Outlet, useLocation } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { ContactFormSection } from "@/components/sections/ContactFormSection"

export function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === "/"

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      {isHome ? (
        <Footer includeContactSection />
      ) : (
        <>
          <ContactFormSection />
          <Footer />
        </>
      )}
    </div>
  )
}
