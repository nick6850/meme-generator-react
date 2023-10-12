import { useState, useEffect } from "react"

export default function Meme(){
    
    const [newMeme, setMeme] = useState({
        topText:'', 
        bottomText:'', 
        randomImage:'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemeImages, setAllMemeImages] = useState('')

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setAllMemeImages(data))
    }, [])
    
    function getMeme(){
        let randomNumber = Math.floor(Math.random() * 100)
        setMeme(prev => {
            return {
            ...prev,
            randomImage: allMemeImages.data.memes[randomNumber].url
        }})
    }

    function changeText(e){
        let {name, value} = e.target
        setMeme(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    return(
        <main>
            <div action="" id='meme-generator'>
                <div className="inputs">
                    <input type="text" onChange={changeText} name="topText" value={newMeme.topText} placeholder="Shut up"/>
                    <input type="text" name="bottomText" value={newMeme.bottomText} onChange={changeText} placeholder="and take my money"/>
                </div>
                <button type='button' onClick={getMeme}  id='get-meme-btn'>Get a new meme image 🎨</button>
                <div className="meme">
                    <img className='meme-img' src={newMeme.randomImage} alt="" />
                    <div className="meme-text top">{newMeme.topText}</div>
                    <div className="meme-text bottom">{newMeme.bottomText}</div>
                </div>
            </div>
        </main>
    )
}