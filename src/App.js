import { Col, Pagination, Row } from "antd";
import "./App.css";
import CharCard from "./components/CharCard/CharCard";
import ModalCharDetail from "./components/ModalCharDetail/ModalCharDetail";
import useFecthList from "./hooks/useFecthList";
import useGetCharacter from "./hooks/useGetCharacter";
import { getAllCharacters } from "./services/CharService";

function App() {
  const { data, loading, params, handleChangePage, metadata } =
    useFecthList(getAllCharacters);
  const { handleCloseModal, handleOpenModal, open, selectedData } =
    useGetCharacter();

  return (
    <div className="App">
      <Row>
        {data.map((item, idx) => (
          <Col
            key={idx}
            xs={12}
            md={6}
            xl={6}
            xxl={4}
            onClick={() => {
              handleOpenModal(item);
            }}
          >
            <CharCard loading={loading} data={item} idx={idx} />
          </Col>
        ))}
      </Row>
      <Pagination
        current={params.page}
        total={metadata}
        pageSize={10}
        showSizeChanger={false}
        onChange={handleChangePage}
      />
      {open && (
        <ModalCharDetail
          open={open}
          onCancel={handleCloseModal}
          data={selectedData}
        />
      )}
    </div>
  );
}

export default App;
