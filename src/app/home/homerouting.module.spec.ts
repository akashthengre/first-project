import { HomeroutingModule } from './homerouting.module';

describe('HomeroutingModule', () => {
  let homeroutingModule: HomeroutingModule;

  beforeEach(() => {
    homeroutingModule = new HomeroutingModule();
  });

  it('should create an instance', () => {
    expect(homeroutingModule).toBeTruthy();
  });
});
