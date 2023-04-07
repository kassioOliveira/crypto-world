import React from 'react'
import { ErrorContainer, ErrorLink, ErrorSubContainer, ErrorSubTitle, ErrorTitle, SubMessage } from './ErrorStyle'
import { LayoutBase } from '../../layouts/LayoutBase/Layout'

export const ErrorPageNotFound = () => {
  return (
   <LayoutBase>
     <ErrorContainer>
        <ErrorSubContainer>
            <ErrorTitle>Não encontrada</ErrorTitle>
            <ErrorSubTitle>404</ErrorSubTitle>
            <ErrorLink to='/'>
            <SubMessage>
                Página incial
            </SubMessage>
            </ErrorLink>

        </ErrorSubContainer>
    </ErrorContainer>
   </LayoutBase>
  )
}
