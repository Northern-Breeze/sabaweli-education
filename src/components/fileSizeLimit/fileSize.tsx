import React from 'react';

import './fileSize.scss';

interface Size {
    filsize: number
}

interface FileSize {
    fileSize: Size
}

export default function fileSize(props: FileSize) {
    const { fileSize } = props;
    const size = (fileSize?.filsize / 1000000)
    return (
            <span className={`file-size-limit${size < 10 ? "-green" : "-red"}`}>
                {` ${size.toFixed(2)} MB`}
            </span>
    )
}
