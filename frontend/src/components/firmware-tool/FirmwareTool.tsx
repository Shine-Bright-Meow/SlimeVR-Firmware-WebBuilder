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
      <Alert variant="filled" severity="warning" sx={{ my: 2 }}>
        This is an experimental version of the SlimeVR Firmware Tool run by
        Butterscotch, so uptime, functionality, and performance is not
        guaranteed.
      </Alert>
      <Alert variant="outlined" severity="info" sx={{ my: 2 }}>
        SlimeVR/vX.X.X - SlimeVR stable release(s)
        <p>{ghLink("SlimeVR", "main")} - SlimeVR development branch</p>
        <p>
          {ghLink("SlimeVR", "feat/magnetometer-toggle")} - BNO08X magnetometer
          toggle support
        </p>
        <p>
          {ghLink("SlimeVR", "shade-bno-mag")} -  SlimeVR's Fork of Shade_Emry's Repository for BNO085 Nag Fix.
        </p>
        <p>
          {ghLink("SlimeVR", "bno085-mag-fix")} -  SlimeVR's Fork of Shade_Emry's Repository for BNO085 Nag Fix. (Eiren's Edit)
        </p>
        <p>
          {ghLink("ButterscotchV", "v0.3.3-bno-patched")} - Release
          SlimeVR/v0.3.3 with BNO patched
        </p>
        <p>
          {ghLink("ButterscotchV", "mag-enabled-stable")} - The latest stable
          firmware release with 9 DoF ICM20948 and BNO0xx (magnetometer enabled)
        </p>
        <p>
          {ghLink("ButterscotchV", "mag-enabled-main")} - Based off SlimeVR/main
          with 9 DoF ICM20948 and BNO0xx (magnetometer enabled)
        </p>
        <p>
          {ghLink("ButterscotchV", "alt-port-stable")} - The latest stable
          firmware release with "trackerPort" set to 6970 instead of 6969
        </p>
        <p>
          {ghLink("ButterscotchV", "alt-port-main")} - Based off SlimeVR/main
          with "trackerPort" set to 6970 instead of 6969
        </p>
        <p>
          {ghLink("l0ud", "main", "SlimeVR-Tracker-ESP-BMI270")} - [DEPRECATED]
          - Use SlimeVR/main instead (Adds support for BMI270)
        </p>
        <p>
          {ghLink("l0ud", "sfusion", "SlimeVR-Tracker-ESP-BMI270")} -
          [DEPRECATED] - Use SlimeVR/main instead.
        </p>
        <p>
          {ghLink("furrycoding", "sfusion-tuned-mbe-decimation")} - sFusion tuned MBE
          with sample rates reduced (decimated). Use Shine-Bright-Meow/sfusion-tuned-mbe-decimation if you really need this.
        </p>
        <p>
          {ghLink("furrycoding", "sfusion_mag")} - sFusion with mag support for limited mags and IMUs.
        </p>
        <p>
          {ghLink("wigwagwent", "BMI_senscal", "LSM6DSV16X")} - [DEPRECATED] - Use SlimeVR/main instead (Adds support for LSM6DSV)
        </p>
        <p>
          {ghLink("wigwagwent", "lsm6dsv-with-bug-fix", "LSM6DSV16X")} - Adds
          support for LSM6DSV
        </p>
        <p>
          {ghLink("kounocom", "sfusion-tuned-mbe")} - Meia's sfusion with MBE
          (Motion bias estimation) and some tuned VQF Parameters
        </p>
        <p>
          {ghLink("kounocom", "gorbits-thing")} - GorbitSlimes Tracker
          firmware
        </p>
        <p>
          {ghLink("kounocom", "serial-mag-toggle")} - Meia's 
          branch from main with BNO mag toggle using serial
        </p>
        <p>
          {ghLink("kounocom", "dynamic-sfusion")} - Meia's 
          sFusion and MBE with dynamic calibration
        </p>
        <p>
          {ghLink("kounocom", "dynamic-sfusion-icm45-hotfix")} - Meia's 
          Hotfix for sFusion and MBE with dynamic calibration
        </p>
        <p>
          {ghLink("kounocom", "feat/lerp-bias")} - Dynamic-sFusion with linear gyro bias interpolation
        </p>
        <p>
          {ghLink("kounocom", "sfusion-machine-optimized")} - Dynamic-sFusion with machine optimized VQF values
        </p>
        <p>
          {ghLink("gorbit99", "on-off-button")} - Gorbit's 
          sFusion with on-off push button
        </p>
        <p>
          {ghLink("gorbit99", "icm45686-firmware")} - ICM-45686 sFusion
          firmware
        </p>
        <p>
          {ghLink("gorbit99", "gorbits-thing-beta")} - Gorbit's beta test branch
        </p>
        <p>
          {ghLink("gorbit99", "sfusion-mag-support")} - Magnetometer support for sFusion. LSM6DSR + IST8306 working. (ICM-45686 + IST8306 WIP)
        </p>
        <p>
          {ghLink("ErrorBox-0", "main", "slimevr_sfusion_tempcal")} -
          sFusion with Temp Cal
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
        <p>
          {ghLink("Shade-emry", "main", "bno_mag_fix")} -  Experimental drift and mag fix for bno085 (Orignial Shade/KeiN) 
        </p>
        <p>
          {ghLink("Shade-emry", "Unis-fixes", "bno_mag_fix")} -  Experimental drift and mag fix for bno085 (Orignial Shade/KeiN) with Unlogisch's fixes.
        </p>
        <p>
          {ghLink("Shade-emry", "main_rotationfix", "bno_mag_fix")} -  Experimental drift and mag fix for bno085 (Orignial Shade/KeiN) with rotation fix.
        </p>
        </p>
        <p>
          {ghLink("Shade-emry", "Unis-fixes_v2", "bno_mag_fix")} -  Experimental drift and mag fix for bno085 (Orignial Shade/KeiN) with Unlogisch's fixes. (Version 2)
        </p>
        <p>
          {ghLink("Shade-emry", "Added-fusion-disection/injection-sh2", "bno_mag_fix")} -  Experimental fusion for BNO
        </p>
      </Alert>
      <Alert variant="filled" severity="warning" sx={{ my: 2 }}>
        IMPORTANT: {ghLink("SlimeVR", "v0.3.3")} is now being redirected to{" "}
        {ghLink("ButterscotchV", "v0.3.3-bno-patched")}. Using BNOs with v0.3.3
        is still not recommended, but it should work with the patch. The
        original release can still be found on the SlimeVR repository.
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
