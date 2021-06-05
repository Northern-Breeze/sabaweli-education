import * as React from 'react'
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import { useHistory } from 'react-router-dom';

type Props = {
    file: File | undefined
}

const ffmpeg = createFFmpeg({ log: process.env.NODE_ENV !== 'production'});

export default function VideoSplit(props: Props): JSX.Element {
        const { file } = props;
        const history = useHistory();
        
        React.useEffect(() => {
            if(!file){
                history.push('/profile')
            }
        },[file, history])
        // load ffmpeg
        const load = async () => {
            await ffmpeg.load();

        }

        const splitVideo = async () => {
            if(file && ffmpeg.isLoaded()){
                ffmpeg.FS('writeFile', file.name, await fetchFile(file));
                await ffmpeg.run('-i', file.name, '-ss', '00:00:00', '-to', '00:4:00', '-c', 'copy', 'output.mp4')
            }
        }
        React.useEffect(() => {
            if(!ffmpeg.isLoaded()){
                load();
            }
        })
        React.useEffect(() => {
            splitVideo();
        },[]);

    return (
        <div className="video-split-container">
            <div className="video-container">
            </div>
        </div>
    )
}
