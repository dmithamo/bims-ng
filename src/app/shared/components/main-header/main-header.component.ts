import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [CommonModule, RouterLink, SvgIconComponent, RouterLinkActive],
  templateUrl: './main-header.component.html',
})
export class MainHeaderComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) {}

  public pageTitle: string = '';
  public showBackButton: boolean = false; // Figure out when to show
  public showAppsButton: boolean = false; // Figure out when to show

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        let currentRoute = this.activeRoute;

        while (currentRoute.firstChild) {
          currentRoute = currentRoute.firstChild;
        }
        this.pageTitle =
          (currentRoute.snapshot.routeConfig?.title as string) || 'Welcome';
      });
  }

  goBack(): void {
    this.location.back();
  }
}
