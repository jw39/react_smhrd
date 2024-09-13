import React, { useState, useEffect } from 'react'

const Ex19 = () => {
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=2b4fdff93c8e1b7aabbe9f0fb00cec04&targetDt=20240701`

            // fetch 형식으로 데이터 받는 중
            fetch(url)
                // 영화진흥원에서 받는 정보 = res
                .then((res) => res.json())
                .then((res) => {
                    // console.log(res);
                    setMovieList(res.boxofficeResult.dailyBoxOfficeList)
                })
                .catch(() => {
                    console.log('failed');
                })
        }, [])

    // [] 화면이 처음 렌더링 됐을 때만
    // [state] 감지할 대상을 배열 안에 넣기
    // [] 배열이 없으면 화면이 렌더링 될 때마다


    return (
        <div>
            <h1>영화 순위!</h1>
            <table border='1px'>
                <tbody>
                    {movieList.map((item) => (
                        <tr key={item.rnum}>
                            <td>{item.rank}</td>
                            <td>{item.movieNm}</td>
                            <td>{item.openDt}</td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    )
}

export default Ex19