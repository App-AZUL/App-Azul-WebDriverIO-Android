import { execSync, exec } from "child_process";
import os from "os";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const projectARN =
  "arn:aws:devicefarm:us-west-2:807608485714:project:5fa2559d-5b43-416a-acc8-fbda7cdee0db";

// Obtener el nombre del archivo y el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let reportFilePath;

if (os.platform().includes("win32")) {
  reportFilePath = `${__dirname}\\Host_Machine_Files\\$DEVICEFARM_LOG_DIR`;
} else {
  reportFilePath = `${__dirname}/Host_Machine_Files/$DEVICEFARM_LOG_DIR`;
}

const getCurrentRun = () => {
  const allRuns = execSync(`aws devicefarm list-runs --arn ${projectARN}`);
  const allRunsParsed = JSON.parse(allRuns.toString());
  return allRunsParsed.runs[0];
};

const checkForRunStatus = () => {
  let currentRun = getCurrentRun();
  let statusChecker = setInterval(() => {
    if (currentRun.status === "COMPLETED") {
      console.log(new Date(), "- Status:", currentRun.status);
      downloadArtifact();
      clearInterval(statusChecker);
    } else {
      console.log(new Date(), "- Checking Status...");
      console.log(new Date(), `- Current: ${currentRun.status}`);
      currentRun = getCurrentRun();
    }
  }, 50000);
};

const getArtifactFromCurrentRun = () => {
  const currentRun = getCurrentRun();
  const listArtifacts = execSync(
    `aws devicefarm list-artifacts --arn ${currentRun.arn} --type "FILE"`
  );
  const listArtifactsParsed = JSON.parse(listArtifacts.toString());
  const retrieveZipFile = listArtifactsParsed.artifacts.filter(
    (file) => file.extension === "zip"
  );
  if (retrieveZipFile.length > 0) {
    return retrieveZipFile[0].url;
  } else {
    return "failed";
  }
};

const downloadArtifact = () => {
  const artifactDownloadUrl = getArtifactFromCurrentRun();
  if (artifactDownloadUrl === "failed") {
    console.error("Fallo al encontrar link de descarga de reporte");
  } else {
    try {
      execSync(`curl "${artifactDownloadUrl}" -o artifacts.zip`);
      let getAllureReport = execSync(`unzip -o artifacts.zip`).toString();
      console.log(getAllureReport);

      const allureReportPath = path.join(reportFilePath, "allure-report.zip");

      // Verificar si el archivo allure-report.zip existe antes de moverlo
      if (fs.existsSync(allureReportPath)) {
        execSync(`mv ${allureReportPath} ${__dirname}`);
      } else {
        console.log("allure-report.zip no encontrado en la ruta esperada.");
      }

      let extractAllureReport = execSync(`unzip -o allure-report.zip -d ./allure-report`).toString();
      console.log(extractAllureReport);
    } catch (error) {
      console.error("Error descargando o descomprimiendo el artefacto:", error.message);
    }
  }
};

checkForRunStatus();
