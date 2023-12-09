describe('Servers test (with setup and tear-down)', function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });
  // alteast one server needed
  it('should not  add a new server with empty value to allServers on submitServerInfo()', function () {
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });
  //
  //Q -> if i use after each with line 17 .toequal(1) faile my test but if i do not use aftereach line 17 .toequal(0)throw an error
  afterEach(function () {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});
