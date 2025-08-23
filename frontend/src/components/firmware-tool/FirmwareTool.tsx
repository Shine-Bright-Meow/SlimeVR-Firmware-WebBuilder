import {
  Alert,
  Container,
  Link,
  Paper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { ConfigurationForm } from "./ConfigurationForm";
import { ErrorPane } from "./ErrorPane";
import { FinishStep } from "./FinishStep";
import { ProgressStep } from "./ProgressStep";
import { useSerial } from "../../hooks/serial";
import { useFirmwareTool } from "../../hooks/firmware-tool";
import { useState } from "react";

const steps = [
  "Configuration",
  "Building",
  "Downloading",
  "Flashing",
  "Setting WiFi",
  "Done",
];

const link = (href: string, text: string, prefix: string = "https://") => {
  return (
    <Link target="_blank" rel="noopener" href={`${prefix}${href}`}>
      {text}
    </Link>
  );
};
const ghLink = (
  owner: string,
  branch: string,
  repo: string = "SlimeVR-Tracker-ESP",
) => {
  return link(
    `github.com/${owner}/${repo}/tree/${branch}`,
    `${owner}/${branch}`,
  );
};

export function FirmwareTool() {
  const { serialSupported } = useSerial();
  const {
    flash,
    activeStep,
    error,
    buildConfig,
    form,
    statusValue,
    statusMessage,
    toConfig,
  } = useFirmwareTool();

  const doAnother = () => {
    flash();
  };

  const [saveZip, setSaveZip] = useState(false);

  return (
    <Container component="main" maxWidth="md" sx={{ my: 3 }}>
      {!serialSupported && (
        <Alert variant="filled" severity="error" sx={{ my: 2 }}>
          This Browser does not support the WebSerial API.
          <p>
            Please use a different browser. (Chrome, Microsoft Edge or Opera)
          </p>
        </Alert>
      )}
      <Alert variant="outlined" severity="info" sx={{ my: 2 }}>
        SlimeVR/vX.X.X - SlimeVR stable release(s)
        <p>{ghLink("SlimeVR", "main")} - SlimeVR development branch</p>
         <p>{ghLink("SlimeVR", "optimized-params-v2")} - ICM-45686 Optimized Parameters (Use Shine-Bright-Meow/optimized-params-v2)</p>
        <p>
          {ghLink("kounocom", "sfusion-tuned-mbe")} - Meia's sfusion with MBE
          (Motion bias estimation) and some tuned VQF Parameters
        </p>
        <p>
          {ghLink("kounocom", "sfusion-bmi160")} - sFusion support for BMI160 (with dynamic calibration)
        </p>
        <p>
          {ghLink("kounocom", "gorbits-thing")} - GorbitSlimes Tracker
          firmware
        </p>
        <p>
          {ghLink("kounocom", "sfusion-machine-optimized")} - Dynamic-sFusion with machine optimized VQF values
        </p>
        <p>
          {ghLink("gorbit99", "on-off-button")} - Gorbit's 
          sFusion with on-off push button
        </p>
        <p>
          {ghLink("gorbit99", "gorbits-thing-beta")} - Gorbit's beta test branch
        </p>
        <p>
          {ghLink("Earnhbry000", "main")} - Topaz's 
          Estrogen Tracker Firmware
        </p>
        <p>
          {ghLink("Earnhbry000", "MBE-Thing")} - Topaz's 
          Second Dose of Estrogen with a sprinkle of MBE Tracker Firmware
        </p>
        <p>
          {ghLink("Shine-Bright-Meow", "v0.4.0-OTA-Enabled")} - Shine's 
          v0.4.0 Branch with OTA Enabled
        </p>
        <p>
          {ghLink("Shine-Bright-Meow", "v0.5.4-OTA-Enabled")} - Shine's 
          v0.5.4 Branch with OTA Enabled
        </p>
        <p>
          {ghLink("Shine-Bright-Meow", "v0.6.2-OTA-Enabled")} - Shine's 
          v0.6.2 Branch with OTA Enabled
        </p>
      </Alert>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 3 }, p: { xs: 1, md: 3 } }}
      >
        <Typography component="h1" variant="h4" align="center">
          Configure your firmware
        </Typography>
        <Stepper
          activeStep={activeStep}
          sx={{ pt: 3, pb: 5 }}
          orientation="vertical"
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                {error && <ErrorPane error={error}></ErrorPane>}

                {!error && (
                  <>
                    {activeStep === 0 && (
                      <ConfigurationForm
                        form={form}
                        nextStep={buildConfig}
                        saveZip={saveZip}
                        setSaveZip={setSaveZip}
                      />
                    )}
                    {activeStep > 0 && activeStep < 5 && (
                      <ProgressStep
                        value={statusValue}
                        message={statusMessage}
                        showRickOption={activeStep === 3}
                      ></ProgressStep>
                    )}
                    {activeStep === 5 && (
                      <FinishStep
                        doAnother={doAnother}
                        toConfig={toConfig}
                        saveZip={saveZip}
                      />
                    )}
                  </>
                )}
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Paper>
    </Container>
  );
}
