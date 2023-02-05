import React, {useState} from 'react';  


export const PageContext = React.createContext();

export const PageContextProvider = props => {

    const [page, setPage] = useState('Welcome');

    
    return(
        <PageContext.Provider value = {{page, setPage}}>
            {props.children}
        </PageContext.Provider>
    )

}