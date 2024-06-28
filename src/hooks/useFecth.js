import { message } from "antd";
import { useEffect, useState } from "react";

const useFecth = (func) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleFetch() {
    try {
      setLoading(true);
      const res = await func();

      setData(res.results);
    } catch (error) {
      console.log(error);
      message.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    handleFetch();
  }, []);

  return {
    data,
    loading,
  };
};

export default useFecth;
