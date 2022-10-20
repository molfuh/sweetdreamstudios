import React from 'react';
import styled, {keyframes} from 'styled-components';

export default function Header ({darkMode}) {
  return (
    <HeaderStyle>
    <a>home</a>
    <a>meet the team</a>
    <a>projects</a>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
    color: white;
    width: 50%;
    float: right;
    border-bottom: 1px solid white;
    height: 30px;
    margin: 1.5em 1.5em 0;
    display: flex;
    justify-content: flex-end;
    a {
        min-width: 25%;
        display: flex;
        justify-content: center;    
    }
`;
