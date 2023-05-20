import { Card } from "../../components";
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
      {/* <Card /> */}
      {thread.posts.map( (item, i) => 
        <PostActivityCard data={item} key={i}/>
      )}
      
    </_container>
  );
};

export default Profile;
