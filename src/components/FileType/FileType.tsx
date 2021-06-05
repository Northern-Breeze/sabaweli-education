import React from 'react';

import './FileType.scss';

interface File {
    filetype: string
}

interface Props {
    fileType: File 
}

export default function FileType(props: Props): JSX.Element {
    const { fileType } = props;
    const type = fileType.filetype.split('/')
    return (
        <span className={`file-type${type[1] === 'wav' ? '-green' : '-red'}`}>
            {fileType.filetype}
        </span>
    )
}
