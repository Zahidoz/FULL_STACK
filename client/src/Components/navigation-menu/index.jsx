import React from "react";
import * as S from "./styles";
import {MENU} from "./constants";

const NavigationMenu = () => {
  return (
    <S.NavigationMenu>
      {MENU.map((item) => (
        <S.MenuItem to={item.href} key={item.id}>
          <S.IconWrapper>{item.icon}</S.IconWrapper>
          <S.Title>{item.title}</S.Title>
        </S.MenuItem>
      ))}
    </S.NavigationMenu>
  );
};

export { NavigationMenu };
