import { ObjectState } from "./object_state";

export class Contact {
  private name: string;
  private email: string;
  private phone: string;
  public readonly _id!: string;
  private subject!: string;
  private message: string;
  objectState = ObjectState.Unchanged;
  private createdAt: Date = new Date();
  private updatedAt: Date = new Date();

  public get Name(): string {
    return this.name;
  }
  public set Name(value: string) {
    this.name = value;
    if (this.objectState === ObjectState.Unchanged) {
      this.objectState = ObjectState.Changed;
    }
  }

  public get Email(): string {
    return this.email;
  }
  public set Email(value: string) {
    this.email = value;
    if (this.objectState === ObjectState.Unchanged) {
      this.objectState = ObjectState.Changed;
    }
  }

  public get Phone(): string {
    return this.phone;
  }
  public set Phone(value: string) {
    this.phone = value;
    if (this.objectState === ObjectState.Unchanged) {
      this.objectState = ObjectState.Changed;
    }
  }

  public get Subject(): string {
    return this.subject;
  }
  public set Subject(value: string) {
    this.subject = value;
    if (this.objectState === ObjectState.Unchanged) {
      this.objectState = ObjectState.Changed;
    }
  }

  public get Message(): string {
    return this.message;
  }
  public set Message(value: string) {
    this.message = value;
    if (this.objectState === ObjectState.Unchanged) {
      this.objectState = ObjectState.Changed;
    }
  }
  
}
