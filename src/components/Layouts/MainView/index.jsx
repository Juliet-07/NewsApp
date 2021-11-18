import React from "react";
import { View, ScrollView } from "react-native";
import { styles } from "./styles";

const MainView = ({ scrollable, children }) => {
  return scrollable ? (
    <View style={styles.mainScroll}>
      <ScrollView contentContainerStyle={styles.mainScrolling}>
        {children}
      </ScrollView>
    </View>
  ) : (
    <View style={styles.main}>{children}</View>
  );
};

export default MainView;
