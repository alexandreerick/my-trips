import * as S from './styles';

const Main: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="React logo with React Avançado written on it"
      />
      <S.Title>React Avançado</S.Title>
      <S.Description>
        Typescript, React, NextJS and Styled Components
      </S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="A developer guy in front of a code."
      />
    </S.Wrapper>
  );
};

export default Main;
