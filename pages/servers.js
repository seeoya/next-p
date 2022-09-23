import { useEffect, useState } from "react";

function Servers() {
    const [servers, setServers] = useState([]);

    useEffect(() => {
        (async () => {
            let result = await (await fetch(`https://xivapi.com/servers/dc`)).json();
            setServers(Object.entries(result));

            console.log(servers);
        })();
    }, []);

    return (
        <div>
            {servers.map((arr) => {
                return (
                    <div>
                        <p>{arr[0]}</p>
                        <ul>
                            {arr[1].map((el) => {
                                return <li>{el}</li>;
                            })}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}

export default Servers;
