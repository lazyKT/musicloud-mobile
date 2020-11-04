/**
 * Network Requests related to songs
 */
export const getMySongs = async ( access_token, signal ) => {

    try {

        const request = await fetch(`http://127.0.0.1:5000/mysongs`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-type' : 'application/json',
                'Authorization': `Bearer ${access_token}`
            },
            signal
        });

        const status = request.status;
        const songs = await request.json();

        return { songs, status };

    } catch (error) {
        console.error("Error Fetching Songs : ", error);
    }
}