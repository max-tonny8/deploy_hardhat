import { Brand } from "./Brand"
import { Navbar } from "./Navbar"

export const Header = () => {
  return (   
    <header className="h-[70px] bg-[#1e2328] flex items-center justify-between overflow-hidden px-5">
      <Brand />
      <Navbar />
    </header>
  )
}
