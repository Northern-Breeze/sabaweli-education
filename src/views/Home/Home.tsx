import React from 'react';



// Components
import Template from '../Template';
import FileSize from '../../components/fileSizeLimit';
// Styles
import "./Home.scss";
import FileType from '../../components/FileType';

interface ErrorState {
    error: boolean,
    message: string
}

interface FileProperty {
    filename: string,
    filsize: number,
    filetype: string
}

export default function Home(): JSX.Element {
	const [selectedFile, setSelectedFile]  = React.useState<File>();
	const [isFilePicked, setIsFilePicked] = React.useState(false);
    const [erroState, setErrorState]  = React.useState<ErrorState>();

    const [fileProperty, setFileProperty] = React.useState<FileProperty>()

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.files !== null){
            setSelectedFile(event?.target?.files[0]);
            setIsFilePicked(true);
            setFileProperty({ filename: event?.target?.files[0].name, filsize: event.target.files[0].size, filetype: event.target.files[0].type })
        }
    }
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            if (selectedFile) {
                const formData = new FormData();
                formData.append('file', selectedFile);
                const token = localStorage.getItem('token') || ""
                const response = await fetch(
                    'http://localhost:5000',
                    {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${token}`
                        },
                        body: formData,
                    }
                );
                const responseJson = await response.json()
                const data = await responseJson
                if(data.success){
                    setErrorState({ error: false, message: data.message});
                }else{
                    setErrorState({ error: true, message: data.message});
                }
                console.log(data);
            } 
        } catch (error) {
            console.log(error)   
        }
    }
    return (
        <Template>
            <div className="home-container">
                    {isFilePicked && (
                        <div className="file-content">
                            <div className="file">File Name: {fileProperty?.filename}</div>
                            <div className="file">File Size: {fileProperty && <FileSize fileSize={fileProperty}/>}</div>
                            <div className="file">File Type: {fileProperty && <FileType fileType={fileProperty}/>}</div>
                        </div>
                    )}
                <div className="content">
                    <form className="form" onSubmit={onSubmit}>
                        <div className="field">
                            <label className="custom-file-upload">
                                <input type="file" accept="audio/*" onChange={onFileChange} />
                                <i className="fa fa-cloud-upload"></i> Select Audio
                            </label>
                        </div>
                        <div className="field">
                            <button className="button is-fullwidth upload-btn" type="submit">
                                Upload
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Template>
    )
}
