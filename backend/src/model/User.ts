import { InvalidParameterError } from "../errors/InvalidParameterError"

export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private nickname: string,
    private password: string,
    private role: UserRole,
    private approved: boolean,
    private description?: string
  ) { }

  public getId(): string {
    return this.id
  }

  public getName(): string {
    return this.name
  }

  public getEmail(): string {
    return this.email
  }

  public getNickname(): string {
    return this.nickname
  }

  public getPassword(): string {
    return this.password
  }

  public getRole(): UserRole {
    return this.role
  }

  public getDescription(): string {
    return this.description as string
  }

  public getApproved(): boolean {
    const approvedBoolean = Boolean(this.approved)
    return approvedBoolean
  }
}

export const stringToUserRole = (input: string): UserRole => {
  switch (input) {
    case "PAYINGLISTENER":
      return UserRole.PAYINGLISTENER
    case "UNPAYINGISTENER":
      return UserRole.UNPAYINGISTENER
    case "ADMIN":
      return UserRole.ADMIN
    case "BAND":
      return UserRole.BAND
    default:
      throw new InvalidParameterError("Invalid user role")
  }
}

export enum UserRole {
  PAYINGLISTENER = "PAYINGLISTENER",
  UNPAYINGISTENER = "UNPAYINGISTENER",
  ADMIN = "ADMIN",
  BAND = "BAND"
}
