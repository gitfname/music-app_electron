import NavItem from "../NavItem/NavItem";

interface LinkOptions {
    id: string;
    title: string;
    path: string;
}

interface Props {
    title: string;
    links: Array<LinkOptions>
}

function LinkGroup({ links, title }: Props) {
    return (
        <div>
            <p
                className="text-xs font-normal tracking-wide text-white/30 mb-3"
            >
                {title}
            </p>

            <div
                className="flex flex-col gap-y-3 pl-3"
            >
                {
                    links?.map(link => (
                        <NavItem
                            key={link.id}
                            text={link.title}
                            path={link.path}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default LinkGroup