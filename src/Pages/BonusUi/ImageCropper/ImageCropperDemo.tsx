import { useRef, useState } from "react";
import { Crop, PixelCrop, ReactCrop, centerCrop, makeAspectCrop } from "react-image-crop";
import { Card, CardBody, Input, Label } from "reactstrap";
import { canvasPreview } from "./canvasPreview";
import { useDebounceEffect } from "./useDebounceEffect";

function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop({ unit: "%", width: 90 }, aspect, mediaWidth, mediaHeight),
    mediaWidth,
    mediaHeight
  );
}
const ImageCropperDemo = () => {
  const [imgSrc, setImgSrc] = useState("");
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [aspect, setAspect] = useState<number | undefined>(16 / 9);

  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined); // Makes crop preview update between images.
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setImgSrc(reader.result?.toString() || "")
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate
        );
      }
    },
    100,
    [completedCrop, scale, rotate]
  );
  return (
    <Card>
      <CardBody>
        <Input type="file" accept="image/*" onChange={onSelectFile} />
        <Label htmlFor="scale-input">Scale: </Label>
        <Input
          id="scale-input"
          type="number"
          step="0.1"
          value={scale}
          disabled={!imgSrc}
          onChange={(e) => setScale(Number(e.target.value))}
        />
        <Label htmlFor="rotate-input">Rotate: </Label>
        <Input
          id="rotate-input"
          type="number"
          value={rotate}
          disabled={!imgSrc}
          onChange={(e) =>
            setRotate(Math.min(180, Math.max(-180, Number(e.target.value))))
          }
        />
        {!!imgSrc && (
          <ReactCrop
            crop={crop}
            onChange={(_, percentCrop) => setCrop(percentCrop)}
            onComplete={(c) => setCompletedCrop(c)}
            aspect={aspect}
          >
            <img
              ref={imgRef}
              alt="Crop me"
              src={imgSrc}
              onLoad={onImageLoad}
              style={{
                transform: `scale(${scale}) rotate(${rotate}deg)`,
              }}
            />
          </ReactCrop>
        )}
        <div>
          {!!completedCrop && (
            <canvas
              ref={previewCanvasRef}
              style={{
                border: "1px solid black",
                objectFit: "contain",
                width: completedCrop.width,
                height: completedCrop.height,
              }}
            />
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default ImageCropperDemo;
