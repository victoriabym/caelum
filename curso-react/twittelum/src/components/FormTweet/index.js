import { useState } from 'react';

export default function FormTweet({addTweetCallback}) {

    const [tweet, setTweet] = useState('');
    // let statusClass = tweet.length > 140 ? 'novoTweet__status--invalido' : '';
    let statusClass = tweet.length > 140 && 'novoTweet__status--invalido';
    let isDisabled = tweet.trim().length < 1 || tweet.length > 140;

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTweetCallback(tweet);
        setTweet('');
    }

    return ( 
        <form className="novoTweet" onSubmit={handleFormSubmit}>
            <div className="novoTweet__editorArea">
                <span className={`novoTweet__status ${statusClass}`}>
                    { tweet.length }/140
                </span>
                <textarea className="novoTweet__editor" placeholder="O que está acontecendo?" onChange={(e) => setTweet(e.target.value)} value={tweet}></textarea>
            </div>
            <button type="submit" className="novoTweet__envia" disabled={isDisabled}>Tweetar</button>
        </form>
    );
}