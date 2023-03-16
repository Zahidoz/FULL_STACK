import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 40px;
`;
export const MenuItem = styled(NavLink)`
  display: flex;
  gap: 10px;
  align-items: center;
  background: transparent;
  color: gray;
  padding: 10px 16px;
  border-radius: 6px;
  border: 1px solid gray;
  transition: .2s;
  &.active,
  &:hover {
    color: #fff;
    background: gray;
  }
`;

export const IconWrapper = styled.div`
  display: inline-flex;
  svg {
    width: 24px;
    height: 24px;
  }
`;
export const Title = styled.span`
  
`;
