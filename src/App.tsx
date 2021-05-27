import React from 'react';
import styled from 'styled-components';
import './styles.scss';

export const App: React.VFC = () => {
  return (
    <div>
      <ParentComponent>
        <div>テキスト1</div>
        <ChildComponent>テキスト2</ChildComponent>
      </ParentComponent>
      <ChildComponent>テキスト3</ChildComponent>
    </div>
  );
};

const ChildComponent = styled.div`
  color: blue;
`;

const ParentComponent = styled.div`
  color: red;
  > ${ChildComponent} {
    color: green;
  }
`;
