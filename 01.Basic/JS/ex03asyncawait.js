/* 
promise 객체 생성
- 첫번째 인자 : 성공 시 결과값
- 두번째 인자 : 실패 시 에러

async
- 함수 앞에 작성

awit
- 작업 완료를 기다릴 구문 앞에 작성
- async 함수 안에서 동작
 */

const increase = number => {
    const promise = new Promise((resolve, reject) => {
        // resolve 성공, reject 실패
        setTimeout(() => {
            // number 값에 +10 후 성공 처리
            const result = number + 10
            resolve(result);
        }, 1000)
    })
    return promise;
}

const runTasks = async () => {
    // try, catch 구문을 사용
    try {
        let result = await increase(0);
        console.log(result); // 10
        result = await increase(result);
        console.log(result); // 20
    } catch (error) {
        console.log(error);
    }
}
runTasks();