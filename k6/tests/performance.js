import http from 'k6/http';
import { check } from 'k6';

const data = JSON.parse(open('../fixtures/dataBody.json'));
const dataBody = data

export const options = {
  vus: 100,
  duration: '30s',
  thresholds: {
    http_req_duration: ['p(95)<2000'],
    http_req_failed: ['rate<0.01']
  }
};
export default function () {
  
  const baseUrl = 'https://jsonplaceholder.typicode.com/users'

  const payload = JSON.stringify(dataBody)

  const headers = {
    'Content-Type': 'application/json'
  }

  const resPost = http.post(baseUrl, payload, headers);

  check(resPost, {
    'POST - Status should be 201': (r) => r.status === 201,
    'POST - Response Should have an id': (r) => r.json().id !== undefined,
  })
  
  const resGet = http.get(baseUrl, headers)

  check(resGet, {
    'GET - Status Should be 200': (r) => r.status === 200
  })
}
