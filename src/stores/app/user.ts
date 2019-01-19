export interface UserI {
  name: string
}

export class User implements UserI {
  fullName: string
  constructor(public name: string) {
    this.fullName = name
  }
}
