import React from "react";
import {
  asset,
  Pano,
  Text,
  View,
  AmbientLight,
  Sound,
  VrButton
} from "react-vr";
// import Primitives from "./Primatives";
import Penholder from "./Penholder";

export default class App extends React.Component {
  changeScene() {
    console.log("scene change!");
  }
  render() {
    return (
      <View>
        <AmbientLight intensity={2.5} />
        <Pano source={asset("background.jpeg")} />
        <Sound
          loop={true}
          volume={0.7}
          source={{
            wav: asset("birds.wav")
          }}
        />
        <VrButton onClick={this.changeScene.bind(this)}>
          <Text
            style={{
              backgroundColor: "#777879",
              fontSize: 0.8,
              fontWeight: "400",
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: "center",
              textAlignVertical: "center",
              transform: [{ translate: [0, 2, -6] }]
            }}
          >
            My office
          </Text>
        </VrButton>
        {/* <Primitives /> */}
        <Penholder />
      </View>
    );
  }
}
