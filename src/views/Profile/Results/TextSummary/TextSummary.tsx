import * as React from 'react'
import { useNavigate } from 'react-router-dom';

import Template from '../../../TemplateWrapper';
import './TextSummary.scss';


type Props = {
    textSummary: string
}

export default function TextSummary(props: Props): JSX.Element  {
    const { textSummary } = props;
    const navigate = useNavigate();
    React.useEffect(() => {
        if(textSummary === ''){
            navigate('/profile');
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
