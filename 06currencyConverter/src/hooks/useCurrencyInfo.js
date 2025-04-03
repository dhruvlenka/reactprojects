import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        //API call
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        // chaining and converting t
        // he response to json
        .then((res) => res.json())
        //holding the response
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency, data])
    console.log(data);
    return data;
}

export default useCurrencyInfo;