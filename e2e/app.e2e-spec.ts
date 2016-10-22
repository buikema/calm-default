import { CalmDefaultPage } from './app.po';

describe('calm-default App', function() {
  let page: CalmDefaultPage;

  beforeEach(() => {
    page = new CalmDefaultPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
