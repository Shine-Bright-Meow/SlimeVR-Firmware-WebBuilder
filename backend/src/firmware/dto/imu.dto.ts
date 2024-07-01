import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsOptional } from "class-validator";

export enum IMUType {
  IMU_MPU9250 = "IMU_MPU9250",
  IMU_MPU6500 = "IMU_MPU6500",
  IMU_BNO080 = "IMU_BNO080",
  IMU_BNO085 = "IMU_BNO085",
  IMU_BNO055 = "IMU_BNO055",
  IMU_BNO086 = "IMU_BNO086",
  IMU_MPU6050 = "IMU_MPU6050",
  IMU_BMI160 = "IMU_BMI160",
  IMU_ICM20948 = "IMU_ICM20948",
  IMU_BMI270 = "IMU_BMI270",
  IMU_MPU6500_NODMP = "IMU_MPU6500_NODMP",
  IMU_MPU6050_NODMP = "IMU_MPU6050_NODMP",
  IMU_LSM6DSO = "IMU_LSM6DSO",
  IMU_LSM6DSV = "IMU_LSM6DSV",
  IMU_LSM6DS3TRC = "IMU_LSM6DS3TRC",
  IMU_ICM42688 = "IMU_ICM42688",
  IMU_LSM6DSR = "IMU_LSM6DSR",
  IMU_MPU6050_SF = "IMU_MPU6050_SF",
}

export const IMUS: IMUDTO[] = [
  {
    type: IMUType.IMU_MPU9250,
    hasIntPin: false,
  },
  {
    type: IMUType.IMU_MPU6500,
    hasIntPin: false,
  },
  {
    type: IMUType.IMU_BNO080,
    hasIntPin: true,
  },
  {
    type: IMUType.IMU_BNO085,
    hasIntPin: true,
  },
  {
    type: IMUType.IMU_BNO055,
    hasIntPin: true,
  },
  {
    type: IMUType.IMU_BNO086,
    hasIntPin: true,
  },
  {
    type: IMUType.IMU_MPU6050,
    hasIntPin: false,
  },
  {
    type: IMUType.IMU_BMI160,
    hasIntPin: false,
  },
  {
    type: IMUType.IMU_ICM20948,
    hasIntPin: false,
  },
  {
    type: IMUType.IMU_BMI270,
    hasIntPin: false,
  },
  {
    type: IMUType.IMU_MPU6500_NODMP,
    hasIntPin: false,
  },
  {
    type: IMUType.IMU_MPU6050_NODMP,
    hasIntPin: false,
  },
  {
    type: IMUType.IMU_LSM6DSO,
    hasIntPin: false,
  },
  {
    type: IMUType.IMU_LSM6DSR,
    hasIntPin: false,
  },
  {
    type: IMUType.IMU_MPU6050_SF,
    hasIntPin: false,
  },
  {
    type: IMUType.IMU_LSM6DSV,
    hasIntPin: false,
  },
  {
    type: IMUType.IMU_LSM6DS3TRC,
    hasIntPin: false,
  },
  {
    type: IMUType.IMU_ICM42688,
    hasIntPin: false,
  },
  {
    type: IMUType.IMU_MPU6050_SF,
    hasIntPin: false,
  },
];

export class IMUConfigDTO {
  @ApiProperty({ enum: IMUType })
  @IsEnum(IMUType)
  public type: IMUType;

  @ApiProperty()
  public rotation: number;

  @ApiProperty({ required: false })
  @IsOptional()
  public imuINT?: string;
}

export class IMUDTO {
  @ApiProperty({ enum: IMUType })
  @IsEnum(IMUType)
  public type: IMUType;

  @ApiProperty()
  public hasIntPin: boolean;
}
