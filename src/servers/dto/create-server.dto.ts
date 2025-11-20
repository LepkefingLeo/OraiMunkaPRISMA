import { IsDateString, IsDefined, IsEmail, IsInt, IsIP, /*IsISO8601*/ IsOptional, IsString, Matches, Min, MinLength } from "class-validator";

export class CreateServerDto {
  @IsDefined({ message: "The admin email is required!" })
  @IsEmail({ allow_ip_domain: false }, { message: "Invalid email format!" })
  adminEmail: string;
  @IsDefined()
  @IsIP()
  ipAddress: string;
  @IsDefined()
  @IsDateString({ strict: true })
  //@IsISO8601({ strictSeparator: true, strict: true })
  @Matches(/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)/, {message: "Installed at must be an ISO date time string!"})
  installedAt: string;
  @IsOptional()
  @IsString()
  @MinLength(3)
  nickname?: string;
  @IsDefined()
  @IsInt()
  @Min(1)
  memory: number;
}

/*

- Template for new data:

{
    "adminEmail": "admin_@example.com",
    "ipAddress": "192.168.1.1_",
    "installedAt": "2024-00-00T00:00:00.000Z",
    "memory": any number (GB)
}

*/
