import React from 'react';
import styled from 'styled-components';

export default function Header ({darkMode}) {
  return (
    <HeaderStyle>
      <a href="_blank">go home</a>
      <a href="_blank">meet the team</a>
      <a href="_blank">see our projects</a>
      <a href="_blank">follow us</a>
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
