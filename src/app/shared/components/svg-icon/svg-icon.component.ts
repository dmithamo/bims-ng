import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconService } from '../../../core/services/icon.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svg-icon.component.html',
})
export class SvgIconComponent implements OnInit, OnChanges {
  @Input() iconName: string = '';
  @Input() iconClass: string = '';

  sanitizedSvgContent: SafeHtml | null = null;

  constructor(
    private iconService: IconService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
    this.fetchIcon(this.iconName);
    this.provideDefaultDimensions();
  }

  ngOnChanges() {
    this.fetchIcon(this.iconName);
  }

  private fetchIcon(name: string) {
    this.iconService.getIcon(name).subscribe(svgContent => {
      this.sanitizedSvgContent = svgContent
        ? this.sanitizer.bypassSecurityTrustHtml(svgContent)
        : null;
    });
  }

  private provideDefaultDimensions() {
    if (!this.iconClass.includes('w-')) {
      this.iconClass += ' w-6 h-6';
    }
  }
}
