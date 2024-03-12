import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import { Col, InputGroup, Label, Row } from "reactstrap";
import { TimePickerHeading } from "../../../../../utils/Constant";

const OnlyTimePicker = () => {
  return (
    <Row>
      <Col xxl="3">
        <Label className="box-col-12 text-start">{TimePickerHeading}</Label>
      </Col>
      <Col xxl={9} className="box-col-12">
        <InputGroup>
        <DatePicker
            inputClass="form-control"
            disableDayPicker
            format="HH:mm"
            plugins={[<TimePicker hideSeconds key={"TimePicker"}  />]}
            
        />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default OnlyTimePicker;
