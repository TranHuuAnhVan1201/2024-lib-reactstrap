import { Fragment, useState } from "react";
import { Button } from "reactstrap";
import { Small_Modal } from "../../../../utils/Constant";
import CommonModal from "../../../../CommonElements/Ui-kits/CommonModal";
import FeatherIcons from "../../../../utils/CommonSvgIcon/FeatherIcons";
import { H6, P } from "../../../../AbstractElements";
import { fullscreenModalData } from "../../../../Data/Ui-Kits/ModalData";

const SmallModal = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const ModalData = {
    isOpen: modal,
    header: true,
    class: "modal-sm",
    toggler: toggle,
    title: "Small modal",
    size: "fullscreen",
  };
  return (
    <>
      <Button
        color="primary"
        onClick={() => {
          toggle();
        }}
      >
        {Small_Modal}
      </Button>
      <CommonModal modalData={ModalData}>
        <>
          {fullscreenModalData &&
            fullscreenModalData.map((item, index) => (
              <Fragment key={index}>
                {index <= 2 && (
                  <Fragment key={index}>
                    <div className="large-modal-header">
                      <FeatherIcons iconName="ChevronRight" />
                      <H6>{item.title}</H6>
                    </div>
                    <P className={`modal-padding-space ${index === 2 && "mb-0"}`} >
                      {item.text}
                    </P>
                  </Fragment>
                )}
              </Fragment>
            ))}
        </>
      </CommonModal>
    </>
  );
};

export default SmallModal;
