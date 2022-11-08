import React from "react";
import { StatusBar, StyleSheet, View, Button } from "react-native";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";

const data = {
  name: "Leif Brasil",
  email: "leifbrasil@hotmail.com",
  address: "Brasil",
};

const App = () => {
  const html = `
        <html>
            <body>
                <h2>Hi ${data.name}</h2>
                <h4>Email: ${data.email}</h4>
                <h4>Address: ${data.address}</h4>
            </body>
        </html>
    `;

  const generatePdf = async () => {
    const file = await printToFileAsync({
      html: html,
      base64: false,
    });
    await shareAsync(file.uri);
  };

  return (
    <View style={styles.container}>
      <Button title="generate Pdf" onPress={generatePdf} />
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#bcbcbc",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
