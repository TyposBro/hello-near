import React from 'react';
import {PostCard, Avatar, Job, Company, Months, Rating, StarIcon} from "./index.styled";
import apple from '../../assets/apple.png';
import netflix from "../../assets/netflix.png";
import png from "../../assets/png.png";
import naver from "../../assets/naver.png";
import hana from "../../assets/hana.png";

const PostActivityCard = ({data}) => {
  return (
    <PostCard>
      <Avatar>{
        data.icon == "apple" ? <img src={apple} width="30"></img> : 
        data.icon == "netflix" ? <img src={netflix} width="30"/> :
        data.icon == "naver" ? <img src={naver} width="30"/> :
        data.icon == "hana" ? <img src={hana} width="30"/> :
        <img src={png} width="40"/>
        }</Avatar>
      <Company>{data.company}</Company>
      <Job>{data.position}</Job>
      <Months>{data.months}</Months>
      <Rating>{
        [...Array(data.rating)].map((e, i) => <StarIcon key={i}/>)
      }</Rating>
      
    </PostCard>
  );
};

export default PostActivityCard;