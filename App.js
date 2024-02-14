import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";

import DashboardApp from "./app/DashboardApp";
import SplashScren from "./app/SplashScren";

export default function App() {
  const [loadingSplash, setLoadingSplash] = useState(true);
  let url = "https://dashboard-video-tool.vercel.app/";

  useEffect(() => {
    const onLoadSplash = setTimeout(() => {
      setLoadingSplash(false);
    }, 2000);

    return () => clearTimeout(onLoadSplash);
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ paddingTop: 40, flex: 0 }} />
      <StatusBar style="auto" />
      {loadingSplash ? <SplashScren /> : <DashboardApp url={url} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
