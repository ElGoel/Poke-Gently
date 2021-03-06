import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'pokedex-gently-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  cols!: number;

  gridByBreakpoint = {
    xl: 8,
    lg: 6,
    md: 4,
    sm: 2,
    xs: 1
  };

  constructor(private BreakpointObserver: BreakpointObserver) {
    this.BreakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      if ( result.breakpoints[Breakpoints.XSmall] ) {
        this.cols = this.gridByBreakpoint.xs;
      }
      if ( result.breakpoints[Breakpoints.Small] ) {
        this.cols = this.gridByBreakpoint.sm;
      }
      if ( result.breakpoints[Breakpoints.Medium] ) {
        this.cols = this.gridByBreakpoint.md;
      }
      if ( result.breakpoints[Breakpoints.Large] ) {
        this.cols = this.gridByBreakpoint.lg;
      }
      if ( result.breakpoints[Breakpoints.XLarge] ) {
        this.cols = this.gridByBreakpoint.xl;
      }
    });
  };


  ngOnInit() {''}
}
