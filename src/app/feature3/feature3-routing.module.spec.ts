import { Feature3RoutingModule } from './feature3-routing.module';

describe('Feature3RoutingModule', () => {
  let feature3RoutingModule: Feature3RoutingModule;

  beforeEach(() => {
    feature3RoutingModule = new Feature3RoutingModule();
  });

  it('should create an instance', () => {
    expect(feature3RoutingModule).toBeTruthy();
  });
});
