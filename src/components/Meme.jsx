import { useState } from "react"
import memeData from "../memeData"

export default function Meme(){
    
    const [newMeme, setMeme] = useState({
        topText:'', 
        bottomText:'', 
        randomImage:'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemeImages, setAllMemeImages] = useState(memeData)
    
    function getMeme(){
        let randomNumber = Math.floor(Math.random() * 100)
        setMeme(prev => {
            return {
            ...prev,
            randomImage: allMemeImages.data.memes[randomNumber].url
        }})
    }


    return(
        <main>
            <div action="" id='meme-generator'>
                <div className="inputs">
                    <input type="text" name="" id="" placeholder="Shut up"/>
                    <input type="text" name="" id="" placeholder="and take my money"/>
                </div>
                <button type='button' onClick={getMeme}  id='get-meme-btn'>Get a new meme image 🎨</button>
                <img className='meme-img' src={newMeme.randomImage} alt="" />
            </div>
        </main>
    )
}