import http from 'k6/http';
import { check } from 'k6';

const data = JSON.parse(open('../fixtures/dataBody.json'));
const dataBody = data;

export const options = {
  stages: [
    { duration: '1m', target: 100 },
    { duration: '2m', target: 100 },
    { duration: '1m', target: 200 },
    { duration: '1m', target: 200 },
    { duration: '2m', target: 300 },
    { duration: '1m', target: 300 },
    { duration: '1m', target: 400 },
    { duration: '2m', target: 400 },
    { duration: '1m', target:   0 }
  ],
  thresholds: {
    http_req_duration: ['p(95)<2000'],
    http_req_failed: ['rate<0.01']
  }
};
export default function () {

  const url = 'https://jsonplaceholder.typicode.com/users'

  const payload = JSON.stringify(dataBody)

  const headers = {
    'Content-Type': 'application/json'
  }

  const resPost = http.post(url, payload, headers);

  check(resPost, {
    'POST - Status should be 201': (r) => r.status === 201,
    'POST - Response Should have an id': (r) => r.json().id !== undefined,
    'Server should return 500': (r) => r.status === 500
  })
  
  const resGet = http.get(url, headers)

  check(resGet, {
    'GET - Status Should be 200': (r) => r.status === 200
  })
}
