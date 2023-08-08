import { useEffect, useRef, useState } from "react";

export default function Viewer() {
  const RENDERING_ENGINE_ID = "myRenderingEngine";
  const VIEWPORT_ID = "CT_AXIAL_STACK";
  const TOOL_GROUP_ID = "myToolGroup";
  const viewer = useRef<HTMLDivElement>(null);
  const [infos, setInfos] = useState<Array<Array<string>>>([]);

  useEffect(() => {
    async function initRenderStack(imageId: string) {
      const { RenderingEngine, Enums } = await import("@cornerstonejs/core");

      const { ViewportType } = Enums;

      const imageIds = [imageId];
      // const imageIds = [];

      const renderingEngine = new RenderingEngine(RENDERING_ENGINE_ID);
      if (viewer.current) {
        const viewerElement = viewer.current;
        const viewportInput = {
          viewportId: VIEWPORT_ID,
          element: viewerElement,
          type: ViewportType.STACK,
        };
        renderingEngine?.enableElement(viewportInput);

        const viewport = renderingEngine?.getViewport(VIEWPORT_ID);

        if (imageIds.length > 0) {
          viewport?.setStack(imageIds, 0);
        }

        viewport?.render();
      }
    }

    async function initToolGroup() {
      const cornerstoneTools = await import("@cornerstonejs/tools");
      const {
        ToolGroupManager,
        ZoomTool,
        WindowLevelTool,
        Enums: csToolsEnums,
      } = cornerstoneTools;
      cornerstoneTools.addTool(ZoomTool);
      cornerstoneTools.addTool(WindowLevelTool);
      const toolGroup = ToolGroupManager.createToolGroup(TOOL_GROUP_ID);
      toolGroup?.addTool(ZoomTool.toolName);
      toolGroup?.addTool(WindowLevelTool.toolName);
      toolGroup?.addViewport(VIEWPORT_ID, RENDERING_ENGINE_ID);
      toolGroup?.setToolActive(ZoomTool.toolName, {
        bindings: [
          {
            mouseButton: csToolsEnums.MouseBindings.Secondary,
          },
        ],
      });
      toolGroup?.setToolActive(WindowLevelTool.toolName, {
        bindings: [
          {
            mouseButton: csToolsEnums.MouseBindings.Primary,
          },
        ],
      });
    }

    async function initInfo(imageId: string) {
      const { metaData } = await import("@cornerstonejs/core");
      const imagePixelModule = metaData.get("imagePixelModule", imageId);
      setInfos(() => {
        return Object.entries(imagePixelModule);
      });
    }

    async function init() {
      const exampleImageId = "wadouri:dicom_00000001_000.dcm";

      console.time("initDemo");
      const initDemo = await import("../utils/demo/helpers/initDemo")
        .then((module) => module.default)
        .catch(() => {
          return () => {};
        });
      await initDemo();
      console.timeEnd("initDemo");

      console.time("initRenderStack");
      await initRenderStack(exampleImageId);
      console.timeEnd("initRenderStack");

      console.time("initToolGroup");
      await initToolGroup();
      console.timeEnd("initToolGroup");

      console.time("initInfo");
      await initInfo(exampleImageId);
      console.timeEnd("initInfo");
    }
    init();
  }, []);
  return (
    <div>
      <input
        type="file"
        accept="*/dicom"
        onChange={(event) => {
          event.preventDefault();
          event.stopPropagation();
          console.log(event.target.files);

          if (event.target.files) {
            async function render() {
              const cornerstoneDICOMImageLoader = await import(
                "@cornerstonejs/dicom-image-loader"
              );
              console.log(cornerstoneDICOMImageLoader);
              const imageId =
                cornerstoneDICOMImageLoader.wadouri.fileManager.add(
                  event.target.files[0]
                );

              const { getRenderingEngine } = await import(
                "@cornerstonejs/core"
              );
              const renderingEngine = getRenderingEngine(RENDERING_ENGINE_ID);
              console.log(renderingEngine);
              const viewport = renderingEngine?.getViewport(VIEWPORT_ID);
              viewport.setStack([imageId], 0);
              viewport?.render();
            }
            render();
          }
        }}
      ></input>
      <div
        id="viewer"
        ref={viewer}
        style={{ width: "500px", height: "500px" }}
      ></div>
      <div>
        <table>
          <caption>DICOM Info</caption>
          <tbody>
            <tr>
              <th id="dicom-info-key">Key</th>
              <th id="dicom-info-value">Value</th>
            </tr>
            {infos.map(([key, value]) => {
              return (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
