import { Component, OnInit, Input, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'pokedex-gently-pokemon-grid',
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.scss'],
})
export class PokemonGridComponent implements OnInit {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  columnas!: number;

  gridByBreakpoint = {
    xl: 8,
    lg: 6,
    md: 4,
    sm: 2,
    xs: 1,
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
        this.columnas = this.gridByBreakpoint.xs;
      }
      if ( result.breakpoints[Breakpoints.Small] ) {
        this.columnas = this.gridByBreakpoint.sm;
      }
      if ( result.breakpoints[Breakpoints.Medium] ) {
        this.columnas = this.gridByBreakpoint.md;
      }
      if ( result.breakpoints[Breakpoints.Large] ) {
        this.columnas = this.gridByBreakpoint.lg;
      }
      if ( result.breakpoints[Breakpoints.XLarge] ) {
        this.columnas = this.gridByBreakpoint.xl;
      }
    });
  };

  ngOnInit(): void {('')}
}
