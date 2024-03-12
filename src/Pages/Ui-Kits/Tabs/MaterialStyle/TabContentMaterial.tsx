import { CardBody, TabContent, TabPane, Table } from "reactstrap";
import { materialStyleDataList } from "../../../../Data/Ui-Kits/TabData";
import { H6 } from "../../../../AbstractElements";

const TabContentMaterial = ({ tabId }: { tabId: string }) => {
  return (
    <TabContent activeTab={tabId}>
      {materialStyleDataList &&
        materialStyleDataList.map(({ tabId, header, tableHeaders, tableData }, index) => (
          <TabPane tabId={tabId} className="fade show" key={index}>
            <CardBody className="px-0 pb-0">
              <div className="user-header pb-2">
                <H6 className="fw-bold">{header}</H6>
              </div>
              <div className="user-content">
                <div className="table-responsive">
                  <Table className="mb-0">
                    <thead>
                      <tr>
                        {tableHeaders.map((item, index) => (
                          <th scope="col" key={index}>
                            {item}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row, index) => (
                        <tr key={index}>
                          {Object.values(row).map((value, index) => (
                            <td key={index}>{value}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </CardBody>
          </TabPane>
        ))}
    </TabContent>
  );
};

export default TabContentMaterial;
