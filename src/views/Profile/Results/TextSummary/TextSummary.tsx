import * as React from 'react'
import { useHistory } from 'react-router-dom';

import Template from '../../../Template';
import './TextSummary.scss';


type Props = {
    textSummary: string
}

export default function TextSummary(props: Props): JSX.Element  {
    const { textSummary } = props;
    const history = useHistory();
    React.useEffect(() => {
        if(textSummary === ''){
            history.push('/profile');
        }
    },[history, textSummary]);

    const downloadText = async () => {
        window.open('data:application/txt,' + encodeURIComponent(textSummary), "_self")
    }
    
    return (
        <Template>
            <div className="text-summary">
                <textarea 
                    className="textarea"
                    defaultValue={textSummary}
                    >
                </textarea>
                <div className="controls">
                    <button 
                        className="button"
                        onClick={downloadText}
                    >
                            Download
                    </button>
                </div>
            </div>
        </Template>
    )
}
