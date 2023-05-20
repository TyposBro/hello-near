import { Card } from "../../components";
import { _container } from "./index.styled";
export const Profile = () => {
  return (
    <_container>
      <Card
        src="https://img.icons8.com/?size=512&id=30840&format=png"
        title="Current company"
        position="SWE"
        company="Apple"
        time="48m"
      />
      <Card title="Total experience" position="SWE" company="" time="5y" />
    </_container>
  );
};

export default Profile;
