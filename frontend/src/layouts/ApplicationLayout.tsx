
import { ReactNode } from "react"
import NavBar from "../layout-components/NavBar"

interface Props {
    children: ReactNode
}

function ApplicationLayout({children}: Props) {
  return (
    <div
        className="w-full h-screen overflow-hidden grid
        grid-cols-[13rem_calc(100%-13rem)] grid-rows-1 bg-zinc-900"
    >

        {/* navbar */}
        <div className="border-r border-r-white/5">
            <NavBar />
        </div>


        {/* main section */}
        <div className="overflow-y-auto">
            {children}
        </div>

    </div>
  )
}

export default ApplicationLayout