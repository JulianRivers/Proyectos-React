import { CounterApp } from './CounterApp';
import { useState } from 'react';

export function App() {
    return (
        <section>
        <CounterApp valueInitial={0}></CounterApp>
        </section>
    )
}