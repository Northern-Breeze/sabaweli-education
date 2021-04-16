import * as React from 'react'
import { useLocation } from 'react-router-dom';
import TextSummary from './TextSummary';

import './Results.scss'

type TextSummary = {
    textSummary: string
}

type Location = {
    state: TextSummary
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
                textSummary={location.state?.textSummary}
            />
        )
    }
    return (
        <div className="no-results">
            No results yet
        </div>
    )
}
