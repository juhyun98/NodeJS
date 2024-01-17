// 파라미터 값이 주어지면
// 1초 뒤에 10을 더해서 변환
const increase = (number, callback) => {
    setTimeout(() => {
        const result = number + 10;
        if (callback) {
            callback(result)
        }
    }, 1000)
}

// 1초 뒤에 10을 반환
for (i = 1; i > 10; i++) {
    
}
increase(0, result => {
    console.log(result);
    increase(result, result => {
        console.log(result);
        increase(result, result => {
            console.log(result);
            increase(result, result => {
                console.log(result);
                increase(result, result => {
                    console.log(result);
                    increase(result, result => {
                        console.log(result);
                        increase(result, result => {
                            console.log(result);
                            increase(result, result => {
                                console.log(result);
                                increase(result, result => {
                                    console.log(result);
                                    increase(result, result => {
                                        console.log(result);
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})