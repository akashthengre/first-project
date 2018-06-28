import { AboutusRoutingModule } from './aboutus-routing.module';

describe('AboutusRoutingModule', () => {
  let aboutusRoutingModule: AboutusRoutingModule;

  beforeEach(() => {
    aboutusRoutingModule = new AboutusRoutingModule();
  });

  it('should create an instance', () => {
    expect(aboutusRoutingModule).toBeTruthy();
  });
});
