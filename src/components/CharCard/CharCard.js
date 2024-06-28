import { Card } from "antd";
import React, { useMemo, useState } from "react";
import { getRandomPic } from "../../helper/getRandomPic";
import useGetBorderColor from "../../hooks/useGetBorderColor";
import "./styles.css";

const CharCard = ({ loading, data }) => {
  const pic = useMemo(() => {
    return getRandomPic();
  }, [data]);

  const { borderColor } = useGetBorderColor(data.species);

  return (
    <Card
      hoverable
      style={{ borderColor: borderColor }}
      className="char-card"
      loading={loading}
    >
      <div className="pic-card">
        <img src={pic} alt="character"></img>
      </div>

      <p className="title-char">{data.name}</p>
    </Card>
  );
};

export default CharCard;
