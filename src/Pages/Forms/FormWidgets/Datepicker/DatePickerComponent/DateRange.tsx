import { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { Col, InputGroup, Label, Row } from "reactstrap";
import { Range } from "../../../../../utils/Constant";

const DateRange = () => {
    const [value, setValue] = useState<DateObject | DateObject[] | null>(new DateObject());
    console.log(value)
  return (
    <Row>
      <Col xxl="3">
        <Label className="box-col-12 text-start">{Range}</Label>
      </Col>
      <Col xxl={9} className="box-col-12">
        <InputGroup className="flatpicker-calender">
          <DatePicker
            inputClass="form-control"
            range
            value={value}
            onChange={setValue}
            format="DD-MM-YYYY"
          />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default DateRange;
