import { TwitterFollowCard } from './TwitterFollowCard';
import './App.css'
import { useState } from 'react';

export function App() {

    return (
        <section className='App'>
            <TwitterFollowCard
                userName="JulianRivers" initialIsFollowing >
                Julian Riveros
            </TwitterFollowCard>

            <TwitterFollowCard   
                userName="Angeldev07" initialIsFollowing={false}>
                Angel García
            </TwitterFollowCard>

            <TwitterFollowCard
                userName="IngridFLG" initialIsFollowing={false}>
                Ingrid Neileth
            </TwitterFollowCard>
        </section>
    )
}