export class SiteEvent {
  private _id: number;
  private _author: string;
  private _name: string;
  private _start: string;
  private _text: string;
  private _end: string;

  constructor(
    id: number,
    author: string,
    name: string,
    start: string,
    end: string,
    text: string
  ) {
    this._id = id;
    this._author = author;
    this._name = name;
    this._start = start;
    this._end = end;
    this._text = text;
  }

  public get id(): number {
    return this._id;
  }
  public set id(v: number) {
    this._id = v;
  }

  public get author(): string {
    return this._author;
  }
  public set author(v: string) {
    this._author = v;
  }

  public get name(): string {
    return this._name;
  }
  public set name(v: string) {
    this._name = v;
  }

  public get start(): string {
    return this._start;
  }
  public set start(v: string) {
    this._start = v;
  }

  public get end(): string {
    return this._end;
  }
  public set end(v: string) {
    this._end = v;
  }

  public get text(): string {
    return this._text;
  }
  public set text(v: string) {
    this._text = v;
  }
}
