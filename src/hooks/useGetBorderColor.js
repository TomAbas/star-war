import { message } from "antd";
import { useEffect, useState } from "react";
import { getId } from "../helper/helper";
import { getSpecies } from "../services/Species";

const useGetBorderColor = (species) => {
  const [borderColor, setBorderColor] = useState("black");

  async function getSpeciesBorder() {
    const checkSpecies = species.length > 0 ? getId(species[0]) : null;

    if (checkSpecies) {
      try {
        const res = await getSpecies(checkSpecies);
        if (res.skin_colors !== "n/a") {
          setBorderColor(res.skin_colors.split(",")[0]);
        }
      } catch (error) {
        console.log(error);
        message.error(error);
      }
    }
  }

  useEffect(() => {
    if (!species) return;

    getSpeciesBorder();
  }, [species]);

  return { borderColor };
};

export default useGetBorderColor;
