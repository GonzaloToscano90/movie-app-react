const API = "https://api.themoviedb.org/3";

export async function get(path) {
  const result = await fetch(API + path + "?api_key=262040ac2e3c359b9d98f063fd17aef4", {
        header: {
            Authorization:
                // 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjIwNDBhYzJlM2MzNTliOWQ5OGYwNjNmZDE3YWVmNCIsInN1YiI6IjYyMTk2NTQ4ZGQ5MjZhMDAxYjM4MWRiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oUq-06HxX-m6AiUfc8izR-e4-b2Ep-KxsnoEKLQ12DA',
                "Content-Type:application/json;charset=utf-8",
        },
    });
    return await result.json();
}
