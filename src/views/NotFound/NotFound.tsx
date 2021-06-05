import * as  React from 'react';
import Animation from '../../components/Animation';
import animationFile from '../../assets/annimation/42479-page-not-found-404.json';
import './Notfound.scss';

export default function NotFound(): JSX.Element {
    return (
        <div className="page-not-found">
            <Animation fileObject={animationFile} />
        </div>
    )
}
