import { NgModule } from '@angular/core';
import { SeasonpipePipe } from './seasonpipe/seasonpipe';
@NgModule({
	declarations: [SeasonpipePipe],
	imports: [],
	exports: [SeasonpipePipe]
})
export class PipesModule {
	static forRoot() {
		return {
			ngModule: PipesModule,
			providers: [],
		};
	 }
}
