const request = require('supertest');
const server = require('../api/server.js');

describe('Jokes router', function(){
    it('runs the test', function(){
        expect(true).toBe(true);
    })

    describe('GET /', function(){

    it('should return JSON', function(){
        return request(server).get('/api/jokes')
        .then(res => { 
            expect(res.type).toMatch(/json/i);
            })
        })

    it('No creds should be 400', function(){
        return request(server).get('/api/jokes')
        .then(res => { 
            expect(res.status).toBe(400);
            })
        })

    })

})