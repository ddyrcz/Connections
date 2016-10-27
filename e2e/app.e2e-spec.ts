import { ConnectionsPage } from './app.po';

describe('connections App', function() {
  let page: ConnectionsPage;

  beforeEach(() => {
    page = new ConnectionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
