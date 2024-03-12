import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import { Col, InputGroup, Label, Row } from "reactstrap";
import { hourPicker } from "../../../../../utils/Constant";

const TimePicker24Hours = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  console.log('startDate', startDate);
  return (
    <Row>
      <Col xxl="3">
        <Label className="box-col-12 text-start">{hourPicker}</Label>
      </Col>
      <Col xxl={9} className="box-col-12">
        <InputGroup>
        123123213
          <DatePicker
            inputClass="form-control"
            disableDayPicker
            format="HH:mm"
            plugins={[<TimePicker hideSeconds key={"TimePicker"} />]}
            value={startDate}
         
            
          />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default TimePicker24Hours;
