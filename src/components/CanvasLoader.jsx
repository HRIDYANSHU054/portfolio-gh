import { Html, useProgress } from "@react-three/drei";

const HtmlStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const paraStyle = {
  marginTop: 40,
  fontSize: "1.125rem",
  lineHeight: "1.75rem",
  color: "#f1f1f1",
  fontWeight: 700,
};

function CanvasLoader() {
  const { progress } = useProgress();

  return (
    <Html as="div" center style={HtmlStyle}>
      <span className="canvas-loader" />
      <p style={paraStyle}>{`${Math.floor(progress * 100) / 100}%`}</p>
    </Html>
  );
}

export default CanvasLoader;
