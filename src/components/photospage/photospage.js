import { useState, useEffect } from "react";
import { storage } from "../Firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import './photospage.css';
 
function Photopage() {
    // State to store uploaded file
    const [file, setFile] = useState("");

    const [sampleImage, setSampleImage] = useState(); 
 
    // progress
    const [percent, setPercent] = useState(0);
 
    // Handle file upload event and update state
    function handleChange(event) {
        setFile(event.target.files[0]);
    }

 
    const handleUpload = () => {
        if (!file) {
            alert("Please upload an image first!");
        }
 
        const storageRef = ref(storage, `/files/${file.name}`);
        const storageRef1 = ref(storage, '/files/');

        const getSampleImage = async () => {
            const imageRef = storageRef1.listAll();
            const url = await imageRef.getDownloadURL().catch((error) => { throw error });
            setSampleImage(url);
        }    
        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
 
                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                });
            }
        );
    };
 
    return (
        <div>
            <div className="up-div">
                <center>
                <input type="file" onChange={handleChange} accept="image/*" /><br></br><br></br><br></br>
                <button onClick={handleUpload} className='up-btn'>Upload to Firebase</button><br></br><br></br>
                <p>{percent} "% done"</p>
                </center>
            </div>
        </div>
    );
}
 
export default Photopage;