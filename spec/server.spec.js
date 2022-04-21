import app from '../';
import request from 'supertest';
import should from 'should';

describe('User', () => {
  describe('중복확인', () => {
    it('email이 중복되지 않는다면 200을 응답한다.', (done) => {});

    it('email이 중복된다면 409를 응답한다.', (done) => {});

    it('nickname이 중복되지 않는다면 200을 응답한다.', (done) => {});

    it('nickname이 중복된다면 409를 응답한다.', (done) => {});
  });

  describe('회원가입', () => {
    it('회원가입 성공시 200을 응답한다.', (done) => {});

    it('회원가입에 필요한 email, nickname, password 중 하나라도 없다면 400을 응답한다.', (done) => {});
  });
});
