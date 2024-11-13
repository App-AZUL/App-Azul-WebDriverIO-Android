import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Obtener el nombre del archivo y el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageJsonPath = path.join(__dirname, "..", "package.json");

// Leer el archivo package.json
fs.readFile(packageJsonPath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading package.json:", err);
    return;
  }

  try {
    // Recoger argumentos
    const args = process.argv.slice(2);
    // Analizar los datos JSON
    const packageJson = JSON.parse(data);

    // Verificar si el campo 'scripts' existe, si no, crear uno
    if (!packageJson.scripts) {
      packageJson.scripts = {};
    }

    // Agregar o modificar el script 'start-mobile-aws'
    packageJson.scripts['start-mobile-aws'] = `your-start-command "${args[0]}"`;

    // Escribir de nuevo el package.json modificado
    fs.writeFile(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2),
      "utf8",
      (err) => {
        if (err) {
          console.error("Error writing package.json:", err);
          return;
        }
        console.log("package.json has been updated successfully!");
      }
    );
  } catch (parseError) {
    console.error("Error parsing package.json:", parseError);
  }
});
