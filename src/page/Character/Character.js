import { Col, Pagination, Row, Spin } from "antd";
import React from "react";
import useFecthList from "../../hooks/useFecthList";
import { getAllCharacters } from "../../services/CharService";
import useGetCharacter from "../../hooks/useGetCharacter";
import ModalCharDetail from "../../components/ModalCharDetail/ModalCharDetail";
import CharCard from "../../components/CharCard/CharCard";
import "./styles.css";
const Character = () => {
  const { data, loading, params, handleChangePage, metadata } =
    useFecthList(getAllCharacters);
  const { handleCloseModal, handleOpenModal, open, selectedData } =
    useGetCharacter();

  if (loading) {
    return (
      <div className="char-container-loading">
        <Spin />
      </div>
    );
  }

  return (
    <div className="char-container">
      <h1>Star War Character Catalog</h1>
      <Row gutter={10}>
        {data.map((item, idx) => (
          <Col
            key={idx}
            xs={24}
            md={6}
            xl={{ flex: "20%" }}
            onClick={() => {
              handleOpenModal(item);
            }}
            style={{
              margin: "5px 0px",
            }}
          >
            <CharCard loading={loading} data={item} idx={idx} />
          </Col>
        ))}
      </Row>
      <div className="pagination">
        <Pagination
          current={params.page}
          total={metadata}
          pageSize={10}
          showSizeChanger={false}
          onChange={handleChangePage}
          showLessItems={true}
        />
      </div>
      {open && (
        <ModalCharDetail
          open={open}
          onCancel={handleCloseModal}
          data={selectedData}
        />
      )}
    </div>
  );
};

export default Character;
