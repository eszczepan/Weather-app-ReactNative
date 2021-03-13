import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-native";

import { setModalVisible } from "../../../../store/actions";
import { IAppState } from "../../../../store/models";
import MainBox from "../../atoms/MainBox/MainBox";

interface IProps {
  weather: any;
}

const ModalDetials: FC<IProps> = ({ weather }) => {
  const dispatch = useDispatch();
  const { modalVisible, detailsDayIndex } = useSelector(
    (state: IAppState) => state.weather
  );

  if (weather.data === undefined) return null;

  const handleCloseModal = () => dispatch(setModalVisible(false));

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <MainBox
        weather={weather.data[detailsDayIndex]}
        city={weather.city_name}
        modal={true}
        onCloseModal={handleCloseModal}
      />
    </Modal>
  );
};

export default ModalDetials;
