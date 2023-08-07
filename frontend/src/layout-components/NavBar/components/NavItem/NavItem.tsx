
import { NavLink } from "react-router-dom"

interface Props {
    path: string;
    text: string;
}

function NavItem({ path, text }: Props) {
    return (
        <NavLink
            to={path}
            className={({isActive}) => `
            w-full text-xs font-normal text-white/80 transition-colors duration-300 cursor-pointer
            border-r-2 border-r-transparent ${isActive?`!border-r-cyan-500 !text-cyan-600
            flex items-center`:""}
            `}
        >
            {text}
        </NavLink>
    )
}

export default NavItem