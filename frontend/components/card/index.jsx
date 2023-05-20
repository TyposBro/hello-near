import { _container, _row, _col, _avatar, _span, _subtitle, _title } from "./index.styled";

// <<<<<<< HEAD
const Card = () => {
  // hello!
// =======
// export const Card = () => {
// >>>>>>> 3715ccb (f)
  return (
    <_container>
      <_row>
        <_avatar src="https://img.icons8.com/?size=512&id=30840&format=png" alt="avatar" />
      </_row>
      <_row>
        <div>Current company</div>
        <div>SWE</div>
        <div>Instagram</div>
        <div>48 months</div>
      </_row>
    </_container>
  );
};

export default Card;
