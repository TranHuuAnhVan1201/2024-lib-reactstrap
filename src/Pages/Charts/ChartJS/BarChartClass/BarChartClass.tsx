import { Card, Col } from "reactstrap";

const BarChartClass = () => {
  return (
    <Col xl={6} md={12} className="box-col-12">
      <Card >
        {/* <CommonHeader title={BarChart} headClass="pb-0"/> */}
        {/* <CardBody className="chart-block">
          <Bar
            data={barChartData}
            options={barChartOptions}
            width={778}
            height={400}
          />
        </CardBody> */}
        bar chart
      </Card>
    </Col>
  );
};

export default BarChartClass;
