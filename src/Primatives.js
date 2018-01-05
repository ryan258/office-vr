import React from "react";
import { View, Box, Cylinder, Sphere, StyleSheet } from "react-vr";

export default class Primatives extends React.Component {
  render() {
    return (
      <View>
        {/* <Box dimWidth={2} dimDepth={2} dimHeight={1} style={{ color: "red" }} /> */}
        {/* // Round cylinder */}
        <Cylinder
          radiusTop={0.5}
          radiusBottom={0.5}
          dimHeight={2}
          segments={12}
          style={{
            transform: [{ translate: [-0.5, 2, -5] }]
          }}
        />
      </View>
    );
  }
}
