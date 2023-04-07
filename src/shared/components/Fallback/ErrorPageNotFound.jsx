import React from 'react'
import { ErrorContainer, ErrorLink, ErrorSubContainer, ErrorSubTitle, ErrorTitle, SubMessage } from './ErrorStyle'

export const ErrorPageNotFound = () => {
  return (
    <ErrorContainer>
        <ErrorSubContainer>
            <ErrorTitle>Não encontrado</ErrorTitle>
            <ErrorSubTitle>404</ErrorSubTitle>
            <ErrorLink to='/'>
            <SubMessage>
                Página incial
            </SubMessage>
            </ErrorLink>

        </ErrorSubContainer>
    </ErrorContainer>
  )
}
