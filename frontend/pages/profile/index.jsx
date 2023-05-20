import { Card } from "../../components";
<<<<<<< HEAD
import { _container } from "./index.styled";
export const Profile = () => {
  return (
    <_container>
      <Card />
=======

import PostActivityCard from "../../components/post";
import { _container } from "./index.styled";
export const Profile = () => {
  var thread = {
    posts : [
      {icon: "apple", company: "Apple", position: "SWE",  months: "1 yr ", rating: 3},
      {icon: "netflix", company: "Netflix", position: "SRE",  months: "2 yr", rating: 4},
      {icon: "hana",company: "Hana bank", position: "HR manager",  months: "0.5 yr", rating: 5},
      {icon: "png", company: "P&G", position: "Product manager",  months: "1 yr", rating: 4},
      {icon: "naver", company: "Naver", position: "PR specialist",  months: "3 yr", rating: 2},    
    ]}

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

      {thread.posts.map( (item, i) => 
        <PostActivityCard data={item} key={i}/>
      )}
>>>>>>> 9679c58bffe91a7c76e224a0d952eb9040d3fe18
    </_container>
  );
};

export default Profile;
