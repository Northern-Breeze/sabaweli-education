import * as  React from 'react'
import { useNavigate } from 'react-router-dom';
import Template from '../../../Template';

type Props = {
    notes: string
}
export default function Audio2Notes(props: Props): JSX.Element {
    const { notes } = props;
    const navigate = useNavigate();
    React.useEffect(() => {
        if(notes === ''){
            navigate('/profile');
        }
    },[history, notes]);

    const downloadText = async () => {
        window.open('data:application/txt,' + encodeURIComponent(notes), "_self")
    }
    
    return (
        <Template>
            <div className="text-summary">
                <textarea 
                    className="textarea"
                    defaultValue={notes}
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
