import { _container, _row, _col, _avatar, _span, _subtitle, _title } from "./index.styled";

export const Card = ({
  src = null,
  title = "Total experience",
  position = "SWE",
  company = "",
  time = "48m",
}) => {
  return (
    <_container>
      {src && <_avatar src={src} alt="avatar" />}
      <_col>
        <_row>
          <_title>{title}</_title>
          <_col>
            <_subtitle>{position}</_subtitle>
            <_subtitle>{company}</_subtitle>
          </_col>
        </_row>
        <_row>
          <_span>{time}</_span>
        </_row>
      </_col>
    </_container>
  );
};

export default Card;
