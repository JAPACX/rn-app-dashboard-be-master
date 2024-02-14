import React from "react";
import { WebView } from "react-native-webview";
import { StyleSheet, SafeAreaView } from "react-native";

const DashboardApp = ({ url }) => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: url }} />
    </SafeAreaView>
  );
};

export default DashboardApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
});
