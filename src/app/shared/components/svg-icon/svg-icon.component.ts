import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconService } from '../../../core/services/icon.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svg-icon.component.html',
})
export class SvgIconComponent implements OnInit {
  @Input() iconName: string = '';
  @Input() iconClass: string = '';

  sanitizedSvgContent: SafeHtml | null = null;

  constructor(
    private iconService: IconService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
    this.iconService.getIcon(this.iconName).subscribe(svgContent => {
      this.sanitizedSvgContent = svgContent
        ? this.sanitizer.bypassSecurityTrustHtml(svgContent)
        : null;
    });
  }
}
