const loggerMiddleware = store => next => action => {
    // 현재 스토어 상태 기록
    console.log('현재 상태 ', store.getState());

    // 액션 기록
    console.log('액션 ', action);

    // 액션을 다음 미들웨어 또는 리듀서로 넘깁니다.
    const result = next(action);

    // 액션 처리 후의 스토어 상태를 기록합니다.
    console.log('다음 상태 ', store.getState());
    console.log('\n') // 기록을 구분

    return result;
}

export default loggerMiddleware;