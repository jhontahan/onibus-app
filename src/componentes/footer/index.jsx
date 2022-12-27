import * as S from "./style"; //Importando conteúdo do styled component

export default function Footer() {
  return (
    <S.FooterWrapper>
      <div className="footer">
        © {new Date().getFullYear()}
      </div>
    </S.FooterWrapper>
  );
}