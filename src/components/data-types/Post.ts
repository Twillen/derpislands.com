export class Post {
  constructor(
    id: number,
    author: string,
    title: string,
    date: string,
    text: string
  ) {
    this._id = id;
    this._author = author;
    this._title = title;
    this._date = date;
    this._text = text;
  }

  private _id: number;
  public get id(): number {
    return this._id;
  }
  public set id(v: number) {
    this._id = v;
  }

  private _author: string;
  public get author(): string {
    return this._author;
  }
  public set author(v: string) {
    this._author = v;
  }

  private _title: string;
  public get tittle(): string {
    return this._title;
  }
  public set tittle(v: string) {
    this._title = v;
  }

  private _date: string;
  public get date(): string {
    return this._date;
  }
  public set date(v: string) {
    this._date = v;
  }

  private _text: string;
  public get text(): string {
    return this._text;
  }
  public set text(v: string) {
    this._text = v;
  }
}
