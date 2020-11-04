/**
 * Context for songs
 * As the song player is the global component,
 * this context is created to avoid the waterfall props
 */
import React from 'react';

const songContext = React.createContext({
    all: [],
    current : null
});

export default songContext;