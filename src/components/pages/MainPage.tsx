import React from 'react';
import {NavLink} from 'react-router-dom';

export function MainPage(props: any) {
    return (
        <div className="bg-opacity-50 flex-column">
            <div className="d-flex col-9 row flex-row justify-content-left align-content-center text-start p-3 text-white">
                <h1>Quendless</h1>
                <h4>И все знают, кто последний</h4>
                <p>Приложение для организации очередей</p>
                <p>Создавайте очереди, приглашайте товарищей по несчастью и следите за движением к цели</p>
                <button className="btn btn-sm btn-outline-primary col-2 p-1 m-3 bg-opacity-75 bg-light">
                    <NavLink to='/profile'>Хочу попробовать</NavLink>
                </button>
            </div>
        </div>
    );
}