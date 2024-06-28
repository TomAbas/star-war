import { Card } from "antd";
import React, { useMemo, useState } from "react";
import { getRandomPic } from "../../helper/getRandomPic";
import useGetBorderColor from "../../hooks/useGetBorderColor";
import "./styles.css";

const CharCard = ({ loading, data }) => {
  const pic = useMemo(() => {
    return getRandomPic();
  }, [data]);
  const [isFocused, setFocus] = useState(false);
  const { borderColor } = useGetBorderColor(data.species);

  function getBorderColorImg(borderColor) {
    if (borderColor === "black") {
      return "red";
    }
    return borderColor;
  }

  return (
    <Card
      hoverable
      style={{ borderColor: borderColor }}
      title={data.name}
      className="char-card"
      loading={loading}
    >
      <img
        src={pic}
        alt="character"
        onMouseEnter={() => setFocus(true)}
        onMouseLeave={() => setFocus(false)}
        style={{
          borderColor: isFocused ? getBorderColorImg(borderColor) : "",
        }}
      ></img>
    </Card>
  );
};

export default CharCard;
