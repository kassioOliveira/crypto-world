import React from 'react'

import { ErrorContainer, ErrorSubContainer,  ErrorTitle, IconSmileSad,  } from './ErrorStyle';

export const ErrorPage = ({error}) => {

  return(
   <>
   {
    error ?(
      <ErrorContainer>
    <ErrorSubContainer>
        <ErrorTitle>{error.message}</ErrorTitle> 
        </ErrorSubContainer>
    </ErrorContainer>
    ): (
<ErrorContainer>

        <ErrorSubContainer>
        <ErrorTitle>Ops, Algo deu errado.</ErrorTitle> 
        {<IconSmileSad/>}
        </ErrorSubContainer>
        </ErrorContainer>
    )
   }
   
   </>
  )

 

 
}
