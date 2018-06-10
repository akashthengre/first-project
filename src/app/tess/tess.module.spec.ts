import { TessModule } from './tess.module';

describe('TessModule', () => {
  let tessModule: TessModule;

  beforeEach(() => {
    tessModule = new TessModule();
  });

  it('should create an instance', () => {
    expect(tessModule).toBeTruthy();
  });
});
