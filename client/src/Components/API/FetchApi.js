import { useState, useEffect } from "react";

import Counter from "../../Counter/Counter";  

function FetchAPI() {

    const [data, setData] = useState([])
    const [dataSamples, setDataSamples] = useState([])

    useEffect(() => {
        apiGet();
        setDataSamples(data.samples)

        // eslint-disable-next-line
      },[Counter(10) === 10]);

    const apiGet = () => {
        // const url = "https://api.dane.gov.pl/datasets?page=1&per_page=10&q=prognoza%20czas%C3%B3w%20oczekiwania%20na%20przej%C5%9Bciach&sort=relevance&formats__in=json";
        // const url = "http://978-tech-pcpw/asix/v1/variable/archive/raw?name=JO976KGW_OPC_PALACZ_CisnienieZaK3&periodStart=DAY&periodLength=1D&maxNumberOfSamples=1000";

        const url = "http://978-tech-pcpw/asix/v1/variable/archive/processed?name=JO976KGW_OPC_PALACZ_EnergiaK3&aggregate=Delta&periodStart=YEAR&periodLength=1MO&resampleInterval=1D";

        fetch(url)
        .then((response) => response.json())
        .then((json) => {
            setData(json);
        })

    // Fetch() z obsługą błędów - coś nie działą.
    /*   
        fetch(url)
        .then((response) => {
            if(response.ok) {
                response.json()
            } else {
                return Promise.reject(`Http error: ${response.status}`);
            }
        })
        .then((json) => {
            setData(json);
        })
        .catch(error => {
            console.error(error)
        });
    */
}

return dataSamples
    // return (
    // <div className="App">
    //     <h1>My API Asix</h1>
    //     <div>{Counter(10)}</div>
    //     <br />
    //     <pre>{JSON.stringify(data, null, 2)}</pre>
    //     <div>
    //         {/* <ulChart>
    //             {data.samples.map(item =>
    //                <liChart key={item.t}>Time: {item.t}, Value: {item.v}</liChart>
    //                 )}
    //         </ulChart> */}
    //     </div>
    // </div>
    // );
}

export default FetchAPI;