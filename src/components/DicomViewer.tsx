import { Grid, Paper } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ContrastIcon from "@mui/icons-material/Contrast";
import ReplayIcon from "@mui/icons-material/Replay";
import StraightenIcon from "@mui/icons-material/Straighten";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import { ZoomIn } from "@mui/icons-material";
import { useOpenCv } from "opencv-react";
import FilterMenu from "./FilterMenu";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const dicomInfoColumns: GridColDef[] = [
  { field: "key", headerName: "KEY", flex: 1 },
  { field: "value", headerName: "VALUE", flex: 1 },
];

export default function DicomViewer() {
  const VIEWPORT_ID = "CT_AXIAL_STACK";
  const TOOL_GROUP_ID = "myToolGroup";
  const viewer = useRef<HTMLDivElement>(null);
  const [infos, setInfos] = useState<Array<Object>>([]);
  const [imageIds, setImageIds] = useState<Array<string>>([]);
  const [isSnackOpen, setIsSnackOpen] = useState(false);
  const [renderingEngineId, setRenderingEngineId] =
    useState("myRenderingEngine");
  const [currentToolName, setCurrentToolName] = useState<string>();
  const openCvData = useOpenCv();

  function loadImageIds(files: FileList) {
    async function render() {
      const cornerstoneDICOMImageLoader = await import(
        "@cornerstonejs/dicom-image-loader"
      );
      const imageId = cornerstoneDICOMImageLoader.wadouri.fileManager.add(
        files[0]
      );
      setImageIds(() => [imageId]);
    }
    if (files) {
      render();
    }
  }

  async function changeToolActive(newToolName: string) {
    const cornerstoneTools = await import("@cornerstonejs/tools");
    const { ToolGroupManager, Enums: csToolsEnums } = cornerstoneTools;
    if (currentToolName !== newToolName) {
      const toolGroup = ToolGroupManager.getToolGroup(TOOL_GROUP_ID);
      toolGroup?.setToolActive(newToolName, {
        bindings: [
          {
            mouseButton: csToolsEnums.MouseBindings.Primary,
          },
        ],
      });
      if (currentToolName) {
        toolGroup?.setToolPassive(currentToolName);
      }
      setCurrentToolName(newToolName);
    }
  }

  useEffect(() => {
    async function initRenderStack() {
      const { RenderingEngine, Enums } = await import("@cornerstonejs/core");

      const { ViewportType } = Enums;

      const renderingEngine = new RenderingEngine(renderingEngineId);
      if (viewer.current) {
        const viewerElement = viewer.current;
        const viewportInput = {
          viewportId: VIEWPORT_ID,
          element: viewerElement,
          type: ViewportType.STACK,
        };
        renderingEngine?.enableElement(viewportInput);

        const viewport = renderingEngine?.getViewport(VIEWPORT_ID);

        viewport?.render();
      }
    }

    async function initToolGroup() {
      const cornerstoneTools = await import("@cornerstonejs/tools");
      const {
        ToolGroupManager,
        ZoomTool,
        WindowLevelTool,
        LengthTool,
        PanTool,
        utilities,
        Enums: csToolsEnums,
      } = cornerstoneTools;
      cornerstoneTools.removeTool(ZoomTool);
      cornerstoneTools.removeTool(WindowLevelTool);
      cornerstoneTools.removeTool(LengthTool);
      cornerstoneTools.removeTool(PanTool);
      cornerstoneTools.addTool(ZoomTool);
      cornerstoneTools.addTool(WindowLevelTool);
      cornerstoneTools.addTool(LengthTool);
      cornerstoneTools.addTool(PanTool);
      const toolGroup = ToolGroupManager.createToolGroup(TOOL_GROUP_ID);
      toolGroup?.addTool(ZoomTool.toolName);
      toolGroup?.addTool(WindowLevelTool.toolName);
      toolGroup?.addTool(LengthTool.toolName);
      toolGroup?.addTool(PanTool.toolName);
      toolGroup?.addViewport(VIEWPORT_ID, renderingEngineId);
      toolGroup?.setToolActive(WindowLevelTool.toolName, {
        bindings: [
          {
            mouseButton: csToolsEnums.MouseBindings.Primary,
          },
        ],
      });
      setCurrentToolName(WindowLevelTool.toolName);
    }

    async function init() {
      const initDemo = await import("../utils/demo/helpers/initDemo")
        .then((module) => module.default)
        .catch(() => {
          return () => {};
        });
      await initDemo();
      await initRenderStack();
      await initToolGroup();
      setImageIds(() => ["wadouri:I0000164.dcm"]);
    }
    init();
  }, [renderingEngineId]);

  useEffect(() => {
    async function changeViewerImage() {
      const { getRenderingEngine } = await import("@cornerstonejs/core");
      const renderingEngine = getRenderingEngine(renderingEngineId);
      const viewport = renderingEngine?.getViewport(VIEWPORT_ID);
      if (viewport && "setStack" in viewport) {
        await viewport?.setStack(imageIds, 0);
      }
      viewport?.render();

      const { metaData } = await import("@cornerstonejs/core");
      const metaDataTypes = [
        "transferSyntax",
        "sopCommonModule",
        "imagePixelModule",
        "voiLutModule",
      ];
      const currentInfos: Array<Object> = metaDataTypes
        .map((metaDataType) => metaData.get(metaDataType, imageIds[0]))
        .filter((metaData) => !!metaData)
        .map((metaData) =>
          Object.entries(metaData).map(([key, value]) => {
            return { key: key, value: value };
          })
        )
        .reduce((prev, curr) => [...prev, ...curr], []);
      setInfos(() =>
        currentInfos.map((obj, idx) => {
          return { ...obj, id: idx };
        })
      );
    }
    if (imageIds.length > 0) {
      setIsSnackOpen(false);
      changeViewerImage();
    } else {
      setIsSnackOpen(true);
    }
  }, [renderingEngineId, imageIds]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Paper>
        <input
          type="file"
          accept="*/dicom"
          onChange={(event) => {
            event.preventDefault();
            event.stopPropagation();
            if (event.target.files) {
              loadImageIds(event.target.files);
            }
          }}
          style={{ width: "100%" }}
        ></input>
        <Grid container>
          <Grid item xs={1}>
            <MenuList>
              <MenuItem
                onClick={() => {
                  async function changeToolAcitveToLevel() {
                    const { WindowLevelTool } = await import(
                      "@cornerstonejs/tools"
                    );
                    changeToolActive(WindowLevelTool.toolName);
                  }
                  changeToolAcitveToLevel();
                }}
              >
                <ListItemIcon>
                  <ContrastIcon></ContrastIcon>
                </ListItemIcon>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  async function changeToolAcitveToZoom() {
                    const { PanTool } = await import("@cornerstonejs/tools");
                    changeToolActive(PanTool.toolName);
                  }
                  changeToolAcitveToZoom();
                }}
              >
                <ListItemIcon>
                  <OpenWithIcon></OpenWithIcon>
                </ListItemIcon>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  async function changeToolAcitveToZoom() {
                    const { ZoomTool } = await import("@cornerstonejs/tools");
                    changeToolActive(ZoomTool.toolName);
                  }
                  changeToolAcitveToZoom();
                }}
              >
                <ListItemIcon>
                  <ZoomIn></ZoomIn>
                </ListItemIcon>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  async function changeToolAcitveToLength() {
                    const { LengthTool } = await import("@cornerstonejs/tools");
                    changeToolActive(LengthTool.toolName);
                  }
                  changeToolAcitveToLength();
                }}
              >
                <ListItemIcon>
                  <StraightenIcon></StraightenIcon>
                </ListItemIcon>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  async function resetView() {
                    const { getRenderingEngine } = await import(
                      "@cornerstonejs/core"
                    );
                    const renderingEngine =
                      getRenderingEngine(renderingEngineId);
                    const viewport = renderingEngine?.getViewport(VIEWPORT_ID);
                    viewport?.resetCamera();
                    if (viewport && "resetProperties" in viewport) {
                      viewport?.resetProperties();
                    }
                    viewport?.render();
                  }
                  resetView();
                }}
              >
                <ListItemIcon>
                  <ReplayIcon></ReplayIcon>
                </ListItemIcon>
              </MenuItem>
            </MenuList>
          </Grid>
          <Grid item xs md container alignItems="center">
            <Grid item xs md>
              <div
                id="viewer"
                ref={viewer}
                style={{
                  maxWidth: "30rem",
                  aspectRatio: 1,
                  margin: "0 auto",
                }}
              ></div>
            </Grid>
            <Grid id="canvas-output-container" item xs md>
              {/* <canvas
                id="canvas-output"
                style={{
                  maxWidth: "30rem",
                  margin: "0 auto",
                }}
              ></canvas> */}
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <FilterMenu imageId={imageIds[0]}></FilterMenu>
          </Grid>
        </Grid>
        {infos.length > 0 && (
          <Grid container>
            <Grid item md={1}></Grid>
            <Grid item xs={12} md>
              <DataGrid rows={infos} columns={dicomInfoColumns}></DataGrid>
            </Grid>
            <Grid item md={1}></Grid>
          </Grid>
        )}
        <Snackbar
          open={isSnackOpen}
          onClose={() => {
            setIsSnackOpen(false);
          }}
        >
          <Alert severity="info">DICOM 파일을 업로드해주세요.</Alert>
        </Snackbar>
      </Paper>
    </ThemeProvider>
  );
}
