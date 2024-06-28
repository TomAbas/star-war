import React, { useEffect, useState } from "react";
import { getId } from "../helper/helper";
import { getPlanet } from "../services/HometownService";
import { message } from "antd";

const useGetHometown = (charHometown) => {
  const [hometown, setHometown] = useState();
  const [loading, setLoading] = useState(false);

  async function getHometown() {
    try {
      setLoading(true);

      const id = getId(charHometown);

      const res = await getPlanet(id);

      setHometown(res);
    } catch (error) {
      console.log(error);
      message.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!charHometown) return;
    getHometown();
  }, [charHometown]);

  return { hometown, loading };
};

export default useGetHometown;
