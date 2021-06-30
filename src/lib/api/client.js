// axios 인스턴스 생성
// - API 클라이언트에 공통된 설정 쉽게 넣을 수 있음
// axios 사용하지 않는 상황이 왔을 경우, 쉽게 클라이언트 교체가 가능함
import axios from 'axios';

const client = axios.create();

/*
  글로벌 설정 예시:
  
  // API 주소를 다른 곳으로 사용함
  client.defaults.baseURL = 'https://external-api-server.com/' 
  // 헤더 설정
  client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';
  // 인터셉터 설정
  axios.intercepter.response.use(\
    response => {
      // 요청 성공 시 특정 작업 수행
      return response;
    }, 
    error => {
      // 요청 실패 시 특정 작업 수행
      return Promise.reject(error);
    }
  })  
*/

export default client;