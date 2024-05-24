const { mockApp } = require('../server.test');
const MOCK_USER = require('../../constants/mockUser');

describe('Test authorization user routes', () => {
  it('建立使用者失敗因為手機號碼為空', done => {
    mockApp
      .post('/auth/users')
      .set('Content-Type', 'application/json')
      .send({
        name: "unitestuser001",
        password: 'a12345678',
      })
      .then(response => {
        expect(response.statusCode).toBe(400);
        expect(response.body.data.message).toBe("電話不可為空");
        done();
      }).catch(done);
  });

  it('建立使用者失敗因為暱稱為空', done => {
    mockApp
      .post('/auth/users')
      .set('Content-Type', 'application/json')
      .send({
        phone: '0987654321',
        password: 'a12345678',
      })
      .then(response => {
        expect(response.statusCode).toBe(400);
        expect(response.body.data.message).toBe("暱稱不可為空");
        done();
      }).catch(done);
  });

  it('建立使用者失敗因為密碼為空', done => {
    mockApp
      .post('/auth/users')
      .set('Content-Type', 'application/json')
      .send({
        phone: '0987654321',
        name: "unitestuser001",
      })
      .then(response => {
        expect(response.statusCode).toBe(400);
        expect(response.body.data.message).toBe("密碼不可為空");
        done();
      }).catch(done);
  });

  it('密碼少於六個字元, Example: a1234', done => {
    mockApp
      .post('/auth/users')
      .set('Content-Type', 'application/json')
      .send({
        phone: '0987654321',
        name: "unitestuser001",
        password: 'a1234',
      })
      .then(response => {
        expect(response.statusCode).toBe(400);
        expect(response.body.data.message).toBe("密碼必須是 6~20 英數混合");
        done();
      }).catch(done);
  });

  it('密碼長度大於 20 個字元, Example: a1234567890123456789123', done => {
    mockApp
      .post('/auth/users')
      .set('Content-Type', 'application/json')
      .send({
        phone: '0987654321',
        name: "unitestuser001",
        password: 'a1234567890123456789123',
      })
      .then(response => {
        expect(response.statusCode).toBe(400);
        expect(response.body.data.message).toBe("密碼必須是 6~20 英數混合");
        done();
      }).catch(done);
  });

  it('密碼不含有英文, Example: 123456789', done => {
    mockApp
      .post('/auth/users')
      .set('Content-Type', 'application/json')
      .send({
        phone: '0987654321',
        name: "unitestuser001",
        password: '123456789',
      })
      .then(response => {
        expect(response.statusCode).toBe(400);
        expect(response.body.data.message).toBe("密碼必須是 6~20 英數混合");
        done();
      }).catch(done);
  });

  it('密碼不含有數字, Example: afadfdsafdsf', done => {
    mockApp
      .post('/auth/users')
      .set('Content-Type', 'application/json')
      .send({
        phone: '0987654321',
        name: "unitestuser001",
        password: 'afadfdsafdsf',
      })
      .then(response => {
        expect(response.statusCode).toBe(400);
        expect(response.body.data.message).toBe("密碼必須是 6~20 英數混合");
        done();
      }).catch(done);
  });

  it('建立使用者 0987654321 成功', done => {
    mockApp
      .post('/auth/users')
      .set('Content-Type', 'application/json')
      .send(MOCK_USER)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      }).catch(done);
  });

  it('使用者 0987654321 缺少電話 登入失敗', done => {
    mockApp
      .post('/auth')
      .set('Content-Type', 'application/json')
      .send({password: "a12345678"})
      .then(response => {
        expect(response.statusCode).toBe(400);
        expect(response.body.data.message).toBe("電話不可為空");
        done();
      }).catch(done);
  });

  it('使用者 0987654321 缺少密碼 登入失敗', done => {
    mockApp
      .post('/auth')
      .set('Content-Type', 'application/json')
      .send({phone: "0987654322"})
      .then(response => {
        expect(response.statusCode).toBe(400);
        expect(response.body.data.message).toBe("密碼不可為空");
        done();
      }).catch(done);
  });

  it('使用者 0987654321 登入成功', done => {
    mockApp
      .post('/auth')
      .set('Content-Type', 'application/json')
      .send(MOCK_USER)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.token).not.toBe(undefined);
        expect(response.body.user).not.toBe(undefined);
        expect(response.body.user.id).not.toBe(undefined);
        expect(response.body.user.phone).not.toBe(undefined);
        done();
      }).catch(done);
  });
});
