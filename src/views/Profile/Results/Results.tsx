import * as React from 'react'
import { useLocation } from 'react-router-dom';
import TextSummary from './TextSummary';

import './Results.scss'
import Audio2Notes from './Audio2Notes';

type DataParams = {
    data: string
}

type Location = {
    state: DataParams,
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

export default function Results(): JSX.Element  {
    const location: Location = useLocation();
    const query = useQuery();
    if(query.get('results') === 'text-summary'){
        return (
            <TextSummary 
                textSummary={location.state?.data}
            />
        )
    }
    if(query.get('results') === 'audio-to-text'){
        return (
            <Audio2Notes
                notes={location.state?.data}
            />
        )
    }
    return (
        <div className="no-results">
            No results yet
        </div>
    )
}
