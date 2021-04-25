import * as React from 'react'
import { useHistory } from 'react-router-dom';

import './Summarize.scss';

export default function Summary(): JSX.Element {
    const history = useHistory();
    return (
        <div className="container">
                <div className="card">
                <header className="header">Summarize Notes</header>
                <div className="context">
                    <p className="content">
                            The summarize notes feature allows you to upload a text document of your notes to the system and 
                            the system will generate a summarized version off that notes. You can also type/copy paste in the editor and generate from there
                    </p>
                </div>
                <div className="action">
                    <button 
                        className="button"
                        onClick={() => {
                            history.push('/profile')
                        }}
                        >Get Started</button>
                </div>
                </div>
        </div>
    )
}
