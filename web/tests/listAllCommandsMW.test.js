const { expect } = require('chai');
const sinon = require('sinon');
const listAllCommandsMW = require('../middleware/commands/listAllCommandsMW');

describe('listAllCommandsMW middleware', () => {
  let req, res, next, CommandModel, GroupModel;

  beforeEach(() => {
    req = {
      params: { groupname: 'Debian' },
    };
    res = {
      locals: {},
    };
    next = sinon.spy();

    GroupModel = {
      findOne: sinon.stub(),
    };
    CommandModel = {
      find: sinon.stub(),
    };
  });

  it('should set commands and groupName if group and commands are found', async () => {
    const mockGroup = { _id: 'groupid123', name: 'Debian' };
    const mockCommands = [{ name: 'ls' }, { name: 'cd' }];

    GroupModel.findOne.returns({
      lean: () => Promise.resolve(mockGroup),
    });

    CommandModel.find.returns({
      lean: () => Promise.resolve(mockCommands),
    });

    const mw = listAllCommandsMW({
      GroupModel,
      CommandModel,
    });

    await mw(req, res, next);

    expect(res.locals.groupName).to.equal('Debian');
    expect(res.locals.commands).to.deep.equal(mockCommands);
    expect(next.calledOnce).to.be.true;
  });

  it('should call next with error if group not found', async () => {
    GroupModel.findOne.returns({
      lean: () => Promise.resolve(null),
    });

    const mw = listAllCommandsMW({
      GroupModel,
      CommandModel,
    });

    await mw(req, res, next);

    expect(next.calledOnce).to.be.true;
    expect(next.firstCall.args[0]).to.be.an('error');
    expect(next.firstCall.args[0].message).to.include('Group not found');
  });

  it('should call next with error if GroupModel.findOne throws', async () => {
    GroupModel.findOne.returns({
      lean: () => Promise.reject(new Error('DB error')),
    });

    const mw = listAllCommandsMW({
      GroupModel,
      CommandModel,
    });

    await mw(req, res, next);

    expect(next.calledOnce).to.be.true;
    expect(next.firstCall.args[0]).to.be.an('error');
    expect(next.firstCall.args[0].message).to.equal('DB error');
  });

  it('should call next with error if CommandModel.find throws', async () => {
    const mockGroup = { _id: 'groupid123', name: 'Debian' };

    GroupModel.findOne.returns({
      lean: () => Promise.resolve(mockGroup),
    });

    CommandModel.find.returns({
      lean: () => Promise.reject(new Error('Command DB error')),
    });

    const mw = listAllCommandsMW({
      GroupModel,
      CommandModel,
    });

    await mw(req, res, next);

    expect(next.calledOnce).to.be.true;
    expect(next.firstCall.args[0]).to.be.an('error');
    expect(next.firstCall.args[0].message).to.equal('Command DB error');
  });
});
