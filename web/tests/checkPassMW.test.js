const { expect } = require('chai');
const sinon = require('sinon');
const checkPassMW = require('../middleware/auth/checkPassMW');

describe('checkPassMW middleware', () => {
  it('should call next() if password is undefined', () => {
    const req = { body: {} };
    const res = { locals: {} };
    const next = sinon.spy();

    checkPassMW({})(req, res, next);

    expect(next.calledOnce).to.be.true;
  });

  it('should create session and redirect on correct password', (done) => {
    const req = {
      body: { password: 'pass' },
      session: {
        save: (cb) => cb(),
      },
    };
    const res = {
      redirect: sinon.spy(),
    };

    checkPassMW({})(req, res, () => {
      // shouldn't reach here
    });

    setTimeout(() => {
      expect(req.session.belepve).to.be.true;
      expect(res.redirect.calledOnceWith('/')).to.be.true;
      done();
    }, 10);
  });

  it('should set res.locals.error and call next() on wrong password', () => {
    const req = { body: { password: 'wrong' }, session: {} };
    const res = { locals: {} };
    const next = sinon.spy();

    checkPassMW({})(req, res, next);

    expect(res.locals.error).to.equal('Hibás jelszó!');
    expect(next.calledOnce).to.be.true;
  });
});
