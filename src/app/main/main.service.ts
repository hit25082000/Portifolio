import { GitProfile } from './../models/git-profile/git-profile';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private gitProfile: any;
  private url = 'https://api.github.com/users/hit25082000';

  constructor(private httpClient: HttpClient) {
    this.gitProfile = '';
  }
  get gitUserProfile() {
    return this.gitProfile;
  }
  profile() {
    return this.httpClient.get<GitProfile>(this.url);
  }
}
