import axios from 'axios';
import React from 'react';
import './pages.css';
const Upload = () => {
    
    const chunkSize = 10*1024;
    const [dropzoneActive, setDropzoneActive] = React.useState(false);
    const [files, setFiles] = React.useState([]);
    const [currentFileIndex, setCurrentFileIndex] = React.useState(null);
    const [lastUpdatedFileIndex, setLastUpdatedFileIndex] = React.useState(null);
    const [currentChunkIndex, setCurrentChunkIndex] = React.useState(null);

    //handle drop action
    function readAndUploadCurrentChunk(){
        const reader = new FileReader();
        const file = files[currentFileIndex];
        if(!file){
            return;
        }
        const from = currentChunkIndex*chunkSize;// first will be 0 *  10240;
        const to = from + chunkSize;
        const blob = file.slice(from, to);
        reader.onload=e=>uploadChunk(e);
        reader.readAsDataURL(blob);
        
    }
    
    function uploadChunk(readerEvent){
        const file = files[currentFileIndex];
        const data = readerEvent.target.result;
        const params = new URLSearchParams();
        params.set('name', file.name);
        params.set('size', file.size);
        params.set('currentChunkIndex', currentChunkIndex);
        params.set('totalChunks', Math.ceil(file.size/chunkSize));
        const headers = {'Content-Type': 'application/octet-stream'};
        const url = 'http://localhost:4000/upload?'+params.toString();
        axios.post(url, data,{headers});
            
    }

    function handleDrop(e){
        e.preventDefault();
        setFiles([...files, ...e.dataTransfer.files]);
    }

    //function read and upload files

    //make sure the file will always adding up until the last file
    React.useEffect(()=>{
        if(files.length>0){
            if(!currentFileIndex ===null){
                setCurrentFileIndex(lastUpdatedFileIndex=== null? 0: lastUpdatedFileIndex+1);
            }
        }
    }, [files.length]);
    //uploading the current file
    React.useEffect(()=>{
        if(currentFileIndex !== null){
            setCurrentChunkIndex(0);
        }
    },[currentFileIndex])


    React.useEffect(()=>{
        if(currentChunkIndex !== null){
            readAndUploadCurrentChunk()
        }
    },[currentChunkIndex]);

    //return part
  return (
    <div>
        <div onDragOver={e=>{setDropzoneActive(true);e.preventDefault()}}
             onDragLeave={e =>{setDropzoneActive(false);e.preventDefault()}}
             onDrop = {e=>{handleDrop(e)}}
         className={'trove__dropzone'+ (dropzoneActive ? "active": "" )}>
            <h1>Drop your files here</h1>
        </div>
    </div>
  )
}

export default Upload