import type { ElementInfo, ElementType, SourceDimensions } from "../types.js";

const getImageDimensions = ({
  naturalWidth,
  naturalHeight,
}: HTMLImageElement): SourceDimensions => ({
  width: naturalWidth,
  height: naturalHeight,
});

const getCanvasDimensions = ({
  width,
  height,
}: HTMLCanvasElement): SourceDimensions => ({
  width,
  height,
});

export const getElementInfo = (element: ElementType): ElementInfo => ({
  element,
  ...(element instanceof HTMLImageElement && getImageDimensions(element)),
  ...(element instanceof HTMLCanvasElement && getCanvasDimensions(element)),
});
