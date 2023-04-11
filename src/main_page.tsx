import React from 'react';

function MainPage(props: any) {
    return (
        <div className="bg-opacity-50 flex-column">
            <div className="d-flex col-9 row flex-row justify-content-center align-content-center text-start p-3">
                <div className="d-flex col flex-column justify-content-center align-content-center text-white">
                    <h1>Quendless</h1>
                    <h4>И все знают, кто последний</h4>
                    <button className="btn btn-sm btn-primary col-2 p-1 m-3 bg-opacity-75 bg-primary">Хочу попробовать</button>
                </div>
            </div>
            <div className="col-12 text-light fs-5">
                <p>Приложение для организации очередей</p>
                <p>Создавайте очереди, приглашайте товарищей по несчастью и следите за движением к цели</p>
            </div>
        </div>
    );
}

export default MainPage;