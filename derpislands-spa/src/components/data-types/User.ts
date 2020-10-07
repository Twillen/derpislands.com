export class User {
  public username: string;
  public youtube: string;
  public twitch: string;

  constructor(username: string, youtube: string, twitch: string) {
    this.username = username;
    this.youtube = youtube;
    this.twitch = twitch;
  }
}
