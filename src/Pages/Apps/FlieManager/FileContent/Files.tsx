import { H5, H6, LI, P, UL } from "../../../../AbstractElements";
import { MyFiles } from "../../../../Types/Apps/FileManager/FileManager";
import { File } from "../../../../utils/Constant";
interface DataType{
    myFiles:MyFiles[]
}
const Files = ({myFiles}:DataType) => {
  return (
    <>
      <H5 className="mt-4">{File} </H5>
      <UL className="d-flex flex-row files-content simple-list">
        {myFiles.map((data,i) => (
          <LI className="folder-box d-flex align-items-center" key={i}>
            <div className="d-flex align-items-center files-list">
              <div className="flex-shrink-0 file-left">
                <i className={`f-22 fa fa-${data.icons} font-${data.color}`} />
              </div>
              <div className="flex-grow-1 ms-3">
                <H6>{data.title}</H6>
                <P>{data.details}</P>
              </div>
            </div>
          </LI>
        ))}
      </UL>
    </>
  );
};

export default Files;
