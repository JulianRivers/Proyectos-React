import { useEffect, useState } from "react"
import { getQuotes } from "./getQuotes"
import './style.css'

export const QuoteMachine = () => {
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('');
    const [twitter, setTwitter] = useState('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=');

    const getQuote = async () => {
        const quotesApi = await getQuotes();
        const quoteRandom = quotesApi[Math.floor(Math.random() * quotesApi.length)]
        const twitterPost = twitter+quoteRandom.quote

        setQuotes(quotesApi)
        setQuote(quoteRandom.quote)
        setAuthor(quoteRandom.author)
        setTwitter(twitterPost)
    }

    const onNewQuote = () => {
        const quoteRandom = quotes[Math.floor(Math.random() * quotes.length)]
        setQuote(quoteRandom.quote)
        setAuthor(quoteRandom.author)
    }
    useEffect(() => {
        getQuote();
    }, [])
    
    return (
        <div id="quote-box">
            <p id="text">{quote}</p>
            <p id="author">{author}</p>
            <button onClick={onNewQuote} id="new-quote" >New quote</button>
            <button><a href={twitter} id="tweet-quote" >Twitter</a></button>
        </div>
    )
}
