import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Template from '../../Template';

import './Features.scss';

import Summary from './Summarize/Summarize';


function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

export default function Features() {
    const history = useHistory();
    const query = useQuery();
    const readMore = (value: string) => {
        switch (value) {
            case 'notes-summarizer': {
                const toValue = value;
                history.push(`/features?name=${toValue}`) 
                break;
            }           
            case 'audio-to-text': {
                const toValue = value;
                history.push(`/features?name=${toValue}`)
                break;
            }
            case 'question-generator': {
                const toValue = value;
                history.push(`/features?name=${toValue}`);
                break;
            }
            case 'long-video-breaker': {
                const toValue = value;
                history.push(`/features?name=${toValue}`);
                break;
            }
            default:
                break;
        }
    }

    if (query.get('name') === 'notes-summarizer') {
        return (<Template><Summary /></Template>)
    }
    if (query.get('name') === 'audio-to-text') {
        return (<Template><Summary /></Template>)
    }
    if (query.get('name') === 'question-generator') {
        return (<Template><Summary /></Template>)
    }
    if (query.get('name') === 'long-video-breaker') {
        return (<Template><Summary /></Template>)
    }
    return (
        <Template>
            <div className="website-features">
                <div className="features">
                    <div className="columns">
                        <div className="column feature">
                            <header className="header">Summarize Notes</header>
                            <p className='description'>
                                Using our SleepyBears Notes summarizer you can upload notes or copy paste 
                                them in the editor and the system will generate a summary of notes for you to study
                            </p>
                            <span 
                                className="button"
                                onClick={() => {
                                    readMore('notes-summarizer')
                                }}
                                >Read More</span>
                        </div>
                        <div className="column feature">
                            <header className="header">Audio to Text</header>
                            <p className='description'>
                                You can upload an audio upload an audio file of you notes and the system will generate 
                                note from the audio, you can share or download the text file
                            </p>
                            <span 
                                className="button"
                                onClick={() => {
                                    readMore('audio-to-tex')
                                }}
                                >Read More</span>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column feature">
                            <header className="header">Question generator</header>
                            <p className='description'>
                                you can upload notes and the system will generate notes based on the notes you uploaded, the notes can also be typed in the editor
                            </p>
                            <span 
                                className="button" 
                                onClick={() => {
                                    readMore('question-generator')
                                }}
                            >Read More</span>
                        </div>
                        <div className="column feature">
                            <header className="header">Video Breaker</header>
                            <p className='description'>
                               Upload a video of the lecture and the have the system break it into smaller tagged videos for easier leaning 
                            </p>
                            <span 
                                className="button"
                                onClick={() => {
                                    readMore('long-video-breaker')
                                }}
                            >Read More</span>
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    )
}
