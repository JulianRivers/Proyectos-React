import { useState } from "react";

export function TwitterFollowCard({children, userName, initialIsFollowing}){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const text = isFollowing ? 'Siguiendo': 'Seguir';

    const buttonClassName = isFollowing
    ? 'tw-followCard-button'
    : 'tw-followCard-button is-following';

    const handleCLick= ()=>{
        setIsFollowing(!isFollowing)
    }

    const srcImg = `https://unavatar.io/${userName}`
    return (
    <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img 
            className="tw-followCard-avatar"
            src={srcImg} alt="Ávatar de Julian" />
            <div className="tw-followCard-info">
                <strong>{children}</strong>
                <span>@{userName}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleCLick}>
                {text}
            </button>
        </aside>
    </article>
    )
}