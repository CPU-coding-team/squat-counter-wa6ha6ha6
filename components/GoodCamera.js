import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Camera } from "expo-camera";
import { cameraWithTensors } from "@tensorflow/tfjs-react-native";

const TensorCamera = cameraWithTensors(Camera);

export default function GoodCamera() {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  let handleCameraStream = (images, updatePreview, gl) => {
    const loop = async () => {
      const nextImageTensor = images.next().value;

      //
      // do something with tensor here
      //

      // if autorender is false you need the following two lines.
      updatePreview();
      gl.endFrameEXP();

      requestAnimationFrame(loop);
    };
    loop();
  };

  let textureDims;
  if (Platform.OS === "ios") {
    textureDims = {
      height: 1920,
      width: 1080,
    };
  } else {
    textureDims = {
      height: 1200,
      width: 1600,
    };
  }

  return (
    <View>
      <TensorCamera
        // Standard Camera props
        style={{
          flex: 1,
        }}
        type={Camera.Constants.Type.front}
        // Tensor related props
        cameraTextureHeight={textureDims.height}
        cameraTextureWidth={textureDims.width}
        resizeHeight={200}
        resizeWidth={152}
        resizeDepth={3}
        onReady={(images, updatePreview, gl) =>
          handleCameraStream(images, updatePreview, gl)
        }
        autorender={false}
      />
    </View>
  );
}
