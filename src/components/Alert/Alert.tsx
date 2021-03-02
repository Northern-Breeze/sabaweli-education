import React from 'react'

interface Message {
    error: boolean,
    message: string,
}

interface AlertProp {
    erroState?: Message
}

export default function Alert(props: AlertProp) {
    const { erroState } = props;
    return (
        <div className="alerts">
        {
            erroState?.error ? (
                <div className="notification is-danger is-light">
                <button className="delete"></button>
                {erroState.message}
            </div>
            ): (
                erroState && (
                <div className="notification is-primary">
                    <button className="delete"></button>
                    {erroState?.message}
                </div>
            )
            )
        }
    </div>
    )
}
