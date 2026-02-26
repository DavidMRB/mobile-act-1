import { WelcomeCard } from "@/components/WelcomeCard";
import { Colors } from "@/constants/colors";
import { useRouter } from "expo-router";
import React from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  const handleGetStarted = () => {
    Alert.alert(
      "Bienvenido",
      "Has iniciado tu primera aplicación React Native",
      [{ text: "Continuar", style: "default" }],
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <WelcomeCard userName="Desarrollador" onGetStarted={handleGetStarted} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Navegación</Text>

          <TouchableOpacity
            style={styles.navButton}
            onPress={() => router.push("/about")}
          >
            <View style={styles.navButtonContent}>
              <Text style={styles.navButtonTitle}>Acerca De</Text>
              <Text style={styles.navButtonSubtitle}>
                Información de la aplicación
              </Text>
            </View>
            <Text style={styles.navButtonArrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navButton}
            onPress={() => router.push("/technologies")}
          >
            <View style={styles.navButtonContent}>
              <Text style={styles.navButtonTitle}>Tecnologías</Text>
              <Text style={styles.navButtonSubtitle}>
                Explora las herramientas usadas
              </Text>
            </View>
            <Text style={styles.navButtonArrow}>→</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 15,
  },
  section: {
    marginTop: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 15,
    marginLeft: 5,
  },
  navButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.surface,
    padding: 15,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.textLight + "20",
  },

  navButtonContent: {
    flex: 1,
  },
  navButtonTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.text,
    marginBottom: 4,
  },
  navButtonSubtitle: {
    fontSize: 13,
    color: Colors.textLight,
  },
  navButtonArrow: {
    fontSize: 18,
    color: Colors.primary,
    marginLeft: 10,
  },
});
