import {NavLink} from "react-router-dom";
import {HorizontalBar} from "../HorizontalBar";

type NavigationLink = {
    path: string,
    label: string,
};

export const headerNavLinks: NavigationLink[] = [
    {
        path: '/',
        label: 'Quendless'
    },
    {
        path: "/groups",
        label: "Группы"
    },
    {
        path: "/queues",
        label: "Очереди"
    },
    {
        path: '/profile',
        label: "Профиль"
    },
];

export function PageHeader(props: any) {
    const items = props.items.map((item: NavigationLink) => {
        return <NavLink to={item.path}>{item.label}</NavLink>;
    })
    return (
        <HorizontalBar>
            {items}
        </HorizontalBar>
    )
}