import { ObjectState } from "./object_state";

export class Demo {
  private name: string;
  private email: string;
  private phone: string;
  private title: string;
  private industry: string;
  private numOfStaffs: string;
  private address: string;
  public readonly _id!: string;
  private message: string;
  objectState = ObjectState.Unchanged;
  private createdAt: Date = new Date();
  private updatedAt: Date = new Date();

    public get Address(): string {
        return this.address;
    }
    public set Address(value: string) {
        this.address = value;
        if (this.objectState === ObjectState.Unchanged) {
        this.objectState = ObjectState.Changed;
        }
    }

    public get NumOfStaffs(): string {
        return this.numOfStaffs;
    }
    public set NumOfStaffs(value: string) {
        this.numOfStaffs = value;
        if (this.objectState === ObjectState.Unchanged) {
        this.objectState = ObjectState.Changed;
        }
    }

  public get Name(): string {
    return this.name;
  }
  public set Name(value: string) {
    this.name = value;
    if (this.objectState === ObjectState.Unchanged) {
      this.objectState = ObjectState.Changed;
    }
  }

    public get Industry(): string {
        return this.industry;
    }
    public set Industry(value: string) {
        this.industry = value;
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

  public get Title(): string {
    return this.title;
  }
  public set Title(value: string) {
    this.title = value;
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
