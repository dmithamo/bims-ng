import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  private cache: { [key: string]: string } = {};
  private ROOT_ICON_PATH = 'assets/icons';
  constructor(private http: HttpClient) {}

  getIcon(iconName: string): Observable<string> {
    if (this.cache[iconName]) {
      return of(this.cache[iconName]);
    }
    return this.http
      .get(`${this.ROOT_ICON_PATH}/${iconName}.svg`, {
        responseType: 'text',
      })
      .pipe(
        map(svgContent => {
          this.cache[iconName] = svgContent.trim();
          return svgContent;
        }),
        catchError(() => of('')),
      );
  }
}
