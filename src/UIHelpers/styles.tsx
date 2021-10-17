import styled from 'styled-components';

export const InputFieldWrapper = styled.div<{ matches: any }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
  flex-direction: ${(props) => (props.matches ? 'row' : 'column')};
`;

export const typographyStyle = {
  fontWeight: 'bold',
  cursor: 'pointer',
  marginTop: '1rem',
};
