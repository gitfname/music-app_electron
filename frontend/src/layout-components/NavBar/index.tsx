
import { Link } from "react-router-dom"
import NavItem from "./components/NavItem/NavItem"
import { LinkGroup } from "./components/LinkGroup"

function NavBar() {
    return (
        <div className="w-full flex flex-col items-center h-full">

            <Link
                to="/"
                className="py-4 pb-6 text-white/95 font-medium tracking-wide text-lg"
            >
                Groovvy
            </Link>

            <div
                className="flex flex-col gap-y-10 gap-x-3 lg-max:hidden overflow-auto
            w-full pb-6 pl-3"
            >

                <LinkGroup
                    title="Menu"
                    links={[
                        {
                            id: "1",
                            path: "/explore",
                            title: "Explore"
                        },
                        {
                            id: "2",
                            path: "/genres",
                            title: "Genres"
                        },
                        {
                            id: "3",
                            path: "/albums",
                            title: "Albums"
                        },
                        {
                            id: "4",
                            path: "/artists",
                            title: "Artists"
                        },
                        {
                            id: "5",
                            path: "/radio",
                            title: "Radio"
                        }
                    ]}
                />

                <LinkGroup
                    title="Library"
                    links={[
                        {
                            id: "6",
                            path: "/recent",
                            title: "Recent"
                        },
                        {
                            id: "7",
                            path: "/albums",
                            title: "Albums"
                        },
                        {
                            id: "8",
                            path: "/favorites",
                            title: "Favorites"
                        },
                        {
                            id: "9",
                            path: "/local",
                            title: "Local"
                        }
                    ]}
                />
            </div>

        </div>
    )
}

export default NavBar