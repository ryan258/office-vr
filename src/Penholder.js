import React from "react";
import { asset, View, Model, StyleSheet } from "react-vr";
// import Primitives from "./Primatives";

export default class Penholder extends React.Component {
  render() {
    return (
      <View>
        <Model
          source={{
            obj: asset("/penholder/Table_Set_obj.obj"),
            mtl: asset("/penholder/Table_Set_obj.mtl")
          }}
          style={{
            position: "absolute",
            transform: [
              { translate: [-2.3, 0.7, -4] },
              { scale: 0.00125 },
              { rotateX: -90 }
            ]
          }}
        />
        <Model
          source={{
            obj: asset("/penholder/Table_Set_obj.obj"),
            mtl: asset("/penholder/Table_Set_obj.mtl")
          }}
          style={{
            transform: [
              { translate: [4.75, 0.7, -4] },
              { scale: 0.0015 },
              { rotateX: -90 }
            ]
          }}
        />
        <Model
          source={{
            obj: asset("/penholder/Table_Set_obj.obj"),
            mtl: asset("/penholder/Table_Set_obj.mtl")
          }}
          style={{
            transform: [
              { translate: [8.5, 0.6, -2.75] },
              { scale: 0.0015 },
              { rotateX: -90 },
              { rotateZ: -270 }
            ]
          }}
        />
      </View>
    );
  }
}
