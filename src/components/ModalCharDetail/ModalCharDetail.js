import { Modal } from "antd";
import React from "react";
import useGetHometown from "../../hooks/useGetHometown";
import "./styles.css";

const ModalCharDetail = ({ open, onCancel, data }) => {
  const { hometown, loading } = useGetHometown(data.homeworld);

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      title={data.name}
      closable
      footer={null}
      loading={loading}
    >
      {/* character information */}
      <div>
        <p className="title">Basic character information</p>
        <div className="char-info">
          <p>Height :</p>
          <p>
            <span className="metric"> {data.height} </span>meters
          </p>
        </div>
        <div className="char-info">
          <p>Mass :</p>
          <p>
            <span className="metric"> {data.mass} </span>kg
          </p>
        </div>
        <div className="char-info">
          <p>Gender :</p>
          <span className="metric">{data.gender} </span>
        </div>
        <div className="char-info">
          <p>Birth Year :</p>
          <span className="metric">{data.birth_year}</span>
        </div>
      </div>
      {/* planet */}
      {hometown && (
        <div>
          <p className="title">Planet information</p>
          <div className="char-info">
            <p>Name :</p>
            <p>
              <span className="metric"> {hometown.name} </span>
            </p>
          </div>
          <div className="char-info">
            <p>Rotation period :</p>
            <p>
              <span className="metric"> {hometown.rotation_period} </span>
            </p>
          </div>
          <div className="char-info">
            <p>Orbital period :</p>
            <span className="metric">{hometown.orbital_period} </span>
          </div>
          <div className="char-info">
            <p>Diameter :</p>
            <span className="metric">{hometown.diameter}</span>
          </div>
          <div className="char-info">
            <p>Climate :</p>
            <span className="metric">{hometown.climate}</span>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ModalCharDetail;
