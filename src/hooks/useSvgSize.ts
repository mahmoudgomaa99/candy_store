import { SVG_DIMENSION } from "../constants";
import { TSize, TDimensions } from "../components/atoms/Svg";
import { isObjectLike } from "lodash";
import isNumber from "lodash/isNumber";
import isArray from "lodash/isArray";

const useSvgSize = (inputSize: TSize | undefined, ratioToWidth: number) => {
  if (isNumber(inputSize)) {
    return { width: inputSize, height: inputSize * ratioToWidth };
  } else if (isObjectLike(inputSize)) {
    const { width, height } = inputSize as TDimensions;
    if (width && !height) return { width: width, height: width * ratioToWidth };
    if (!width && height)
      return { width: height / ratioToWidth, height: height };
    else return { width, height };
  }
  if (isArray(inputSize)) {
    const [width, height] = inputSize;
    if (!height) return { width, height: width * ratioToWidth };
    return { width, height };
  }
  return { width: SVG_DIMENSION, height: SVG_DIMENSION * ratioToWidth };
};

export default useSvgSize;
