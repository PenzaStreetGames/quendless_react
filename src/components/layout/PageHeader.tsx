import React from "react";
import {NavLink} from "react-router-dom";
import {HorizontalBar} from "../primitives/HorizontalBar";

type NavigationLink = {
    id: number,
    path: string,
    label: string,
};

type PageHeaderProps = {
    isAuth: boolean
};

export const authUserLinks: NavigationLink[] = [
    {
        id: 0,
        path: '/',
        label: 'Quendless'
    },
    {
        id: 1,
        path: "/groups",
        label: "Группы"
    },
    {
        id: 2,
        path: "/queues",
        label: "Очереди"
    },
    {
        id: 3,
        path: '/profile',
        label: "Профиль"
    },
    {
        id: 4,
        path: '/logout',
        label: "Выйти"
    }
]

export const guestLinks: NavigationLink[] = [
    {
        id: 0,
        path: '/',
        label: 'Quendless'
    },
    {
        id: 4,
        path: '/auth',
        label: "Войти"
    }
]

export function PageHeader(props: PageHeaderProps) {
    const navLinks = (props.isAuth ? authUserLinks : guestLinks);
    const items = navLinks.map((item: NavigationLink) => {
        return <NavLink to={item.path} key={item.id}>{item.label}</NavLink>;
    })
    return (
        <HorizontalBar>
            <>
                {items}
            </>
        </HorizontalBar>
    )
}