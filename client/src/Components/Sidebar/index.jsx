import React from 'react'
import * as S from './styles'
import {Logo} from '../Logo'
import { NavigationMenu } from '../navigation-menu'
const Sidebar = () => { 
  return (
    <S.Sidebar>
        <Logo/>
        <NavigationMenu/>
    </S.Sidebar>
  )
}

export  {Sidebar}