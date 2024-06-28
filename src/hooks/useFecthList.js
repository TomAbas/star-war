import { message } from "antd";
import { useEffect, useState } from "react";

const useFecthList = (func) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useState({
    page: 1,
  });

  const [metadata, setMetadata] = useState(0);
  async function handleFetch() {
    try {
      setLoading(true);
      const res = await func(params);
      setData(res.results);
      setMetadata(res.count);
    } catch (error) {
      console.log(error);
      message.error(error);
    } finally {
      setLoading(false);
    }
  }

  function handleChangePage(page) {
    setParams((prev) => ({ ...prev, page: page }));
  }

  useEffect(() => {
    handleFetch();
  }, [params]);

  return {
    data,
    loading,
    params,
    handleChangePage,
    metadata,
  };
};

export default useFecthList;
